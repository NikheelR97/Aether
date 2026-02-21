import { Shield, Lock, ArrowRight, Bot, Sparkles, ArrowDownToLine, Check, X as XIcon, Menu, X, Globe, Rocket, Users, MessageCircle, Zap } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Layers */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        backgroundImage: 'url("/hero-bg.png")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.3, mixBlendMode: 'screen'
      }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, backgroundColor: 'var(--void)' }} />

      {/* Ambient Glow */}
      <div style={{ position: 'fixed', top: '-15%', left: '-10%', width: '35%', height: '35%', background: 'var(--nebula)', opacity: 0.12, filter: 'blur(100px)', borderRadius: '50%' }} />
      <div style={{ position: 'fixed', bottom: '-15%', right: '-10%', width: '30%', height: '30%', background: 'var(--nova)', opacity: 0.08, filter: 'blur(100px)', borderRadius: '50%' }} />

      {/* ════════════════════ NAV ════════════════════ */}
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="nebula-gradient glow-shadow" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 900, fontSize: '1.1rem', fontStyle: 'italic' }}>Y</span>
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--starlight)' }}>YAPPER</span>
          </div>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#why" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>Why Yapper</a>
            <a href="#migrate" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>Switch</a>
            <a href="#devs" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>Developers</a>
            <a href="https://github.com/NikheelR97/Yapper" className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>GitHub</a>
            <a href="#download" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
              <ArrowDownToLine style={{ width: '1rem', height: '1rem' }} /> Download
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--starlight)', cursor: 'pointer' }}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="glass animate-reveal" style={{ position: 'absolute', top: '4.5rem', left: 0, width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <a href="#why" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--starlight)' }}>Why Yapper</a>
            <a href="#migrate" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--starlight)' }}>Switch</a>
            <a href="#devs" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--starlight)' }}>Developers</a>
            <a href="#download" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Download Now</a>
          </div>
        )}
      </nav>

      <main>
        {/* ════════════════════ HERO ════════════════════ */}
        <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="section-label glass animate-reveal" style={{ animationDelay: '0.1s', display: 'inline-flex' }}>
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: 'var(--green-glow)' }} />
              <span style={{ color: 'var(--green-glow)' }}>Open Source & Encrypted</span>
            </div>

            <h1 className="animate-reveal" style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 900,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              marginBottom: '1.5rem', animationDelay: '0.2s'
            }}>
              Your group chat.<br />
              <span className="text-gradient">Actually private. fr fr.</span>
            </h1>

            <p className="animate-reveal" style={{
              maxWidth: '38rem', margin: '0 auto', fontSize: '1.2rem',
              color: 'var(--dust)', lineHeight: 1.7, marginBottom: '2.5rem',
              animationDelay: '0.3s'
            }}>
              The <strong style={{ color: 'var(--starlight)' }}>privacy focused chat app</strong> that
              doesn't mine your data, nag you with Nitro popups, or sell your DMs to advertisers.
              End-to-end encrypted. Open source. Kinda based. 🔐
            </p>

            <div className="animate-reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', animationDelay: '0.4s' }}>
              <a href="#download" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Download Now <ArrowDownToLine style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
              <a href="#why" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Show Me Why <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════ SOCIAL PROOF BAR ════════════════════ */}
        <section style={{ padding: '2.5rem 0' }}>
          <div className="container">
            <div className="glass" style={{ borderRadius: '1.5rem', padding: '2rem 1rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
              <div className="stat-item"><span className="stat-number">E2EE</span><span className="stat-label">Signal Protocol</span></div>
              <div style={{ width: '1px', background: 'var(--glass-border)', alignSelf: 'stretch' }} />
              <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Open Source</span></div>
              <div style={{ width: '1px', background: 'var(--glass-border)', alignSelf: 'stretch' }} />
              <div className="stat-item"><span className="stat-number">Zero</span><span className="stat-label">Data Sold. Ever.</span></div>
              <div style={{ width: '1px', background: 'var(--glass-border)', alignSelf: 'stretch' }} />
              <div className="stat-item"><span className="stat-number">🌍</span><span className="stat-label">Global & Free</span></div>
            </div>
          </div>
        </section>

        {/* ════════════════════ 3-PILLAR FEATURE GRID ════════════════════ */}
        <section id="why">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Why people are switching 👀</h2>
              <p style={{ color: 'var(--dust)', maxWidth: '32rem', margin: '0 auto', fontSize: '1.05rem' }}>
                Three reasons. All of them good.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Pillar 1: Privacy */}
              <div className="pillar-card glass" style={{ borderColor: 'rgba(124,58,237,0.15)' }}>
                <div className="pillar-icon" style={{ background: 'rgba(124,58,237,0.1)' }}>
                  <Lock style={{ color: 'var(--nebula)', width: '1.75rem', height: '1.75rem' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Privacy First 🔐
                </h3>
                <p style={{ color: 'var(--dust)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  We literally <em>cannot</em> read your DMs. End-to-end encrypted via the Signal Protocol.
                  No data mining. No selling your info. No "personalized ads."
                  Your chats are <strong style={{ color: 'var(--starlight)' }}>your</strong> chats.
                </p>
              </div>

              {/* Pillar 2: Migration */}
              <div className="pillar-card glass" style={{ borderColor: 'rgba(236,72,153,0.15)' }}>
                <div className="pillar-icon" style={{ background: 'rgba(236,72,153,0.1)' }}>
                  <Rocket style={{ color: 'var(--nova)', width: '1.75rem', height: '1.75rem' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Switching is Easy 🎈
                </h3>
                <p style={{ color: 'var(--dust)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Moving from Discord takes like 5 minutes. Seriously.
                  Use our <strong style={{ color: 'var(--starlight)' }}>Discord migration tool</strong> to
                  bring your servers, roles, and vibes. No PhD required.
                </p>
              </div>

              {/* Pillar 3: Devs */}
              <div className="pillar-card glass" style={{ borderColor: 'rgba(34,211,238,0.15)' }}>
                <div className="pillar-icon" style={{ background: 'rgba(34,211,238,0.1)' }}>
                  <Bot style={{ color: 'var(--cyan-glow)', width: '1.75rem', height: '1.75rem' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Your Bots Work Here 🤖
                </h3>
                <p style={{ color: 'var(--dust)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Full <strong style={{ color: 'var(--starlight)' }}>Discord bot compatibility</strong>.
                  Easier setup, lower hosting costs. Bring your bots over and they just... work.
                  Less config, more shipping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ PRIVACY DEEP-DIVE ════════════════════ */}
        <section>
          <div className="container">
            <div className="glass" style={{ borderRadius: '2rem', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0', alignItems: 'center' }}>
                <div style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
                  <div className="section-label" style={{ background: 'rgba(124,58,237,0.1)', color: 'var(--nebula-light)' }}>
                    <Shield style={{ width: '0.875rem', height: '0.875rem' }} /> Secure Community Platform
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.15 }}>
                    "We literally cannot<br />read your DMs" 🔒
                  </h2>
                  <p style={{ color: 'var(--dust)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '36rem' }}>
                    Other apps read your chats to sell you ads. That's weird. We built Yapper so that
                    <strong style={{ color: 'var(--starlight)' }}> even we can't see what you're sending</strong>.
                    Signal Protocol encryption means your messages are scrambled on your device and
                    only unscrambled on your friend's device. The server sees garbled nonsense. Beautiful, private garbled nonsense. ✨
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {['End-to-end encrypted DMs & group chats', 'Zero data mining or selling policies 🚫', 'No ads. No tracking. No compromise.', 'Open source — verify it yourself'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--dust)', fontSize: '0.9rem' }}>
                        <Check style={{ color: 'var(--green-glow)', width: '1.1rem', height: '1.1rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ MIGRATION: "IT'S EASY" ════════════════════ */}
        <section id="migrate">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ background: 'rgba(236,72,153,0.1)', color: 'var(--nova)', display: 'inline-flex' }}>
              <Sparkles style={{ width: '0.875rem', height: '0.875rem' }} /> Discord Migration Tool
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
              Switching from Discord?<br />It takes like 5 minutes. 🎈
            </h2>
            <p style={{ color: 'var(--dust)', maxWidth: '34rem', margin: '0 auto 3rem', fontSize: '1.05rem' }}>
              We're not gonna make you rebuild everything from scratch. That's psychotic.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '48rem', margin: '0 auto' }}>
              {[
                { step: '1', color: 'var(--nebula)', title: 'Export your server', desc: 'One click. Grabs your channels, roles, and settings.' },
                { step: '2', color: 'var(--nova)', title: 'Import into Yapper', desc: 'Drag, drop, done. We handle the translation layer.' },
                { step: '3', color: 'var(--cyan-glow)', title: 'Start yapping 🎉', desc: 'Your community is live. Same vibes, way more privacy.' },
              ].map((s, i) => (
                <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '1.25rem', textAlign: 'center' }}>
                  <div className="step-circle" style={{ background: `${s.color}15`, color: s.color, margin: '0 auto 1.25rem' }}>{s.step}</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--dust)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ DEVELOPER SECTION ════════════════════ */}
        <section id="devs">
          <div className="container">
            <div className="glass" style={{ borderRadius: '2rem', padding: 'clamp(2rem, 5vw, 4rem)' }}>
              <div className="section-label" style={{ background: 'rgba(34,211,238,0.1)', color: 'var(--cyan-glow)' }}>
                <Bot style={{ width: '0.875rem', height: '0.875rem' }} /> Discord Bot Compatibility
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                Devs: your bots just work. 🤖
              </h2>
              <p style={{ color: 'var(--dust)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '40rem' }}>
                Yapper's API is compatible with Discord's bot framework. Import your existing bots,
                slash commands, and webhooks. <strong style={{ color: 'var(--starlight)' }}>Easier setup. Lower hosting costs. 💰</strong>
                Less time configuring infrastructure, more time building cool stuff.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: <Bot />, label: 'Drop-in bot migration' },
                  { icon: <Zap />, label: 'Simpler API surface' },
                  { icon: <Globe />, label: 'Self-hostable (your infra)' },
                  { icon: <Users />, label: 'Active dev community' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
                    <div style={{ color: 'var(--cyan-glow)', width: '1.25rem', height: '1.25rem', flexShrink: 0 }}>{item.icon}</div>
                    <span style={{ color: 'var(--dust)', fontSize: '0.85rem', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ COMPARISON TABLE ════════════════════ */}
        <section>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>The honest comparison 💀</h2>
            <p style={{ color: 'var(--dust)', marginBottom: '2.5rem', fontSize: '1rem' }}>No fluff. No asterisks. Just facts.</p>

            <div className="glass" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Yapper 💜</th>
                    <th>Discord</th>
                    <th>Slack</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'End-to-end encryption', yapper: true, discord: false, slack: false },
                    { feature: 'No data mining', yapper: true, discord: false, slack: false },
                    { feature: 'Open source', yapper: true, discord: false, slack: false },
                    { feature: 'Discord bot compatible', yapper: true, discord: true, slack: false },
                    { feature: 'No Nitro nag screens', yapper: true, discord: false, slack: true },
                    { feature: 'Self-hostable', yapper: true, discord: false, slack: false },
                    { feature: 'Free voice chat', yapper: true, discord: true, slack: false },
                    { feature: 'Clean UI (no bloat 😵‍💫)', yapper: true, discord: false, slack: false },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td>{row.yapper ? <Check style={{ color: 'var(--green-glow)', width: '1.1rem' }} /> : <XIcon style={{ color: '#ef4444', width: '1.1rem' }} />}</td>
                      <td>{row.discord ? <Check style={{ color: 'var(--green-glow)', width: '1.1rem' }} /> : <XIcon style={{ color: '#ef4444', width: '1.1rem' }} />}</td>
                      <td>{row.slack ? <Check style={{ color: 'var(--green-glow)', width: '1.1rem' }} /> : <XIcon style={{ color: '#ef4444', width: '1.1rem' }} />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════════════ FINAL CTA ════════════════════ */}
        <section id="download" style={{ padding: '6rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{
              position: 'relative', borderRadius: '2rem', padding: 'clamp(3rem, 8vw, 5rem) 2rem',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.1) 100%)',
              border: '1px solid rgba(124,58,237,0.2)'
            }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Stop getting data-mined. 🛑
              </h2>
              <p style={{ color: 'var(--dust)', fontSize: '1.15rem', maxWidth: '30rem', margin: '0 auto 2.5rem' }}>
                Download Yapper and start chatting like nobody's watching.
                <br />Because nobody is. That's the whole point.
              </p>
              <a href="#" className="btn-primary glow-shadow" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem' }}>
                <ArrowDownToLine style={{ width: '1.5rem', height: '1.5rem' }} /> Download the App
              </a>
              <p style={{ color: 'var(--dust)', fontSize: '0.75rem', marginTop: '1.25rem', opacity: 0.6 }}>
                Available on Windows, macOS, and Linux. Free forever.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
            <div className="nebula-gradient" style={{ width: '1.25rem', height: '1.25rem', borderRadius: '0.25rem' }} />
            <span style={{ fontWeight: 700, letterSpacing: '-0.03em', fontSize: '0.875rem' }}>YAPPER</span>
          </div>
          <p style={{ color: 'var(--dust)', fontSize: '0.7rem' }}>
            © 2026 Yapper. The secure community platform built for actual humans. 🌍
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem' }}>
            <a href="#" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>Community</a>
            <a href="https://github.com/NikheelR97/Yapper" style={{ color: 'var(--dust)', transition: 'color 0.2s' }}>GitHub</a>
          </div>
        </div>
      </footer>

      {/* ── Responsive override for mobile menu ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
