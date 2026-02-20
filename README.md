# Yapper 🚀

![Status](https://img.shields.io/badge/status-Alpha-orange)
![CI](https://github.com/NikheelR97/Yapper/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

**Yapper** is a privacy-first, self-hosted communication platform designed to bridge the gap between the performance of desktop apps and the security of zero-knowledge architectures. Think "Discord, but YOU own the data."

## 🚀 Key Features

### 🔒 Zero-Knowledge Privacy (E2EE 2.0)

- **Signal Protocol**: Implementation of Double Ratchet & X3DH for asynchronous messaging.
- **Dual Encryption**: Messages are encrypted for **both** the recipient and sender's other devices (Self-Visibility).
- **Self-Healing Identity**: Automated session repair for corrupted cryptographic states.
- **Strict CSP**: Client-side protection against XSS and data exfiltration.

### 🎙️ Real-Time Communication

- **Instant Messaging**: Powered by **Supabase Realtime** for sub-millisecond latency.
- **Voice Chat**: Peer-to-Peer audio streaming using **WebRTC** (Mesh Topology) and **Opus** codec.
- **Multi-Server Architecture**: Seamless navigation between Pods and Threads.

### 💻 Modern Tech Stack

- **Frontend**: React 19 (TypeScript) + Vite + Tailwind CSS v4.
- **Backend**: Supabase (PostgreSQL 15, Auth, Realtime).
- **Desktop Runtime**: Tauri v2 (Rust).
- **Testing**: Vitest (Unit), Playwright (E2E), Sentry (Monitoring).

---

## 📚 Documentation

Detailed documentation is available in the [`docs/`](./docs) directory:

- [**Wiki Home**](./docs/WIKI.md): Project overview and roadmap.
- [**Architecture**](./docs/ARCHITECTURE.md): Deep dive into E2EE and system design.
- [**Contributing**](./CONTRIBUTING.md): How to contribute to Yapper.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- Rust (for Tauri build)
- Supabase Project (or local instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NikheelR97/Yapper.git
   cd Yapper
   ```

2. **Install Client Dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Environment Setup**
    Create a `.env` file in the `client` directory:

    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_SENTRY_DSN=your_sentry_dsn
    ```

4. **Run Development Server**

    ```bash
    npm run dev
    ```

5. **Run Tests**

    ```bash
    npm test          # Unit Tests (Vitest)
    npx playwright test # E2E Tests
    ```

---

## 🗺️ Roadmap

- **Phase 1-6**: Core Infrastructure, E2EE, Voice, Reliability (Done) ✅
- **Phase 7**: Encrypted File Sharing & Offline Support (Next) 🚧
- **Phase 8**: Compliance & Trust (GDPR) 📅
- **Phase 9**: Mobile App 📱

---

## 📄 License

MIT License. Built with ❤️ for the decentralized web.
