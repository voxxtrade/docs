# VoxTrade Documentation

Official documentation repository for **VoxTrade** — The Voice-to-Voice AI Commerce Protocol on Stellar Soroban.

🌐 **Live Documentation Site**: [https://voxxtrade.github.io/docs/](https://voxxtrade.github.io/docs/)

---

## 📖 Overview

This repository powers the official documentation portal for the VoxTrade ecosystem, built using [Astro Starlight](https://starlight.astro.build/). It covers:
- The Three Calling Modes (User ↔ Agent, Agent ↔ Agent, User ↔ User)
- Real-time acoustic rate negotiation & audio visualizer telemetry
- HTTP 402 challenge/proof with SHA-256 preimages
- Rust Soroban smart contracts (`AgentTreasury` & `X402Escrow`)
- TypeScript `@voxtrade/sdk` and Python agent runtime
- Live Stellar Testnet deployments and verified contract addresses

---

## 🛠️ Local Development

To run the documentation portal locally:

```bash
# Clone the repository
git clone https://github.com/voxxtrade/docs.git
cd docs

# Install dependencies
pnpm install

# Start local development server
pnpm dev
```

Open [http://localhost:4321/docs](http://localhost:4321/docs) in your browser.

---

## 🏗️ Production Build

```bash
# Build the production site with Pagefind offline search index
pnpm run build

# Preview the built site locally
pnpm run preview
```

---

## 🚀 Deployment

The documentation site is automatically built and deployed to **GitHub Pages** on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

---

## 📜 License

Licensed under the [MIT License](https://opensource.org/licenses/MIT) or [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
