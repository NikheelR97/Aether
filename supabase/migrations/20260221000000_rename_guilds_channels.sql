-- Migration: Rename guilds -> pods, channels -> threads
-- This migration renames existing tables and columns to reflect the Yapper brand terminology.

-- 1. Drop existing RLS policies that reference old names (safe: IF EXISTS)
drop policy if exists "Guilds are viewable by everyone" on public.guilds;
drop policy if exists "Authenticated users can create guilds" on public.guilds;
drop policy if exists "Guilds are viewable by members." on public.guilds;
drop policy if exists "Authenticated users can create pods." on public.guilds;
drop policy if exists "Channels are viewable by everyone" on public.channels;
drop policy if exists "Authenticated users can create channels" on public.channels;
drop policy if exists "Threads viewable by everyone." on public.channels;

-- 2. Rename the channels table first (it references guilds)
alter table if exists public.channels rename to threads;

-- 3. Rename the guild_id column in threads (formerly channels)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'threads' and column_name = 'guild_id'
  ) then
    alter table public.threads rename column guild_id to pod_id;
  end if;
end $$;

-- 4. Rename the guilds table
alter table if exists public.guilds rename to pods;

-- 5. Rename guild_id in members table (if the table exists)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'members' and column_name = 'guild_id'
  ) then
    alter table public.members rename column guild_id to pod_id;
  end if;
end $$;

-- 6. Rename channel_id to thread_id in messages (if it exists)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'messages' and column_name = 'channel_id'
  ) then
    alter table public.messages rename column channel_id to thread_id;
  end if;
end $$;

-- 7. Re-create RLS policies with new names (only if tables exist)
do $$
begin
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'pods') then
    execute 'create policy "Pods are viewable by members." on public.pods for select using (true)';
    execute 'create policy "Authenticated users can create pods." on public.pods for insert with check (auth.role() = ''authenticated'')';
  end if;

  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'threads') then
    execute 'create policy "Threads viewable by everyone." on public.threads for select using (true)';
  end if;
end $$;

-- 8. Update the realtime publication
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table public.messages, public.threads, public.profiles;
commit;

-- 9. Update seed data names
update public.pods set name = 'Yapper Prime' where name = 'Aether Prime';
update public.pods set icon_url = 'https://api.dicebear.com/7.x/shapes/svg?seed=Yapper' where icon_url like '%seed=Aether%';
