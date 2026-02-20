-- Create tables
create table public.profiles (
  id uuid references auth.users not null primary key,
  username text unique,
  avatar_url text,
  status text default 'offline',
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

create table public.guilds (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  icon_url text,
  owner_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table public.channels (
  id uuid default gen_random_uuid() primary key,
  guild_id uuid references public.guilds(id) on delete cascade not null,
  name text not null,
  type text default 'text', -- 'text' or 'voice'
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table public.messages (
  id uuid default gen_random_uuid() primary key,
  channel_id uuid references public.channels(id) on delete cascade not null,
  user_id uuid references public.profiles(id) not null,
  content text, -- Encrypted content (base64)
  type text default 'text', -- 'text', 'image', 'system'
  nonce text, -- For encryption
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table public.members (
  id uuid default gen_random_uuid() primary key,
  guild_id uuid references public.guilds(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text default 'member', -- 'owner', 'admin', 'member'
  joined_at timestamp with time zone default timezone('utc'::text, now()),
  unique(guild_id, user_id)
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.guilds enable row level security;
alter table public.channels enable row level security;
alter table public.messages enable row level security;
alter table public.members enable row level security;

-- Policies (Basic Open Policies for now - NEED AUDIT)
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

create policy "Guilds are viewable by members." on public.guilds for select using (true); -- simplified
create policy "Authenticated users can create guilds." on public.guilds for insert with check (auth.role() = 'authenticated');

create policy "Channels viewable by everyone." on public.channels for select using (true);
create policy "Messages viewable by everyone." on public.messages for select using (true);
create policy "Authenticated users can insert messages." on public.messages for insert with check (auth.role() = 'authenticated');

-- Realtime
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table public.messages, public.channels, public.profiles, public.members;
commit;
