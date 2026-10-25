# 5-Day Advanced Mindful Manifestation Workshop — Confirmation Page

High-converting, mobile-first confirmation and WhatsApp community access page for the **5-Day Advanced Mindful Manifestation Workshop** (Buddhist Secret to Abundance Life by Monkhood).

---

## 🚀 Features

- **Mobile-First Design**: Optimized for instant loading and touch interactions on mobile devices (iOS Safari, Android Chrome, Instagram in-app browsers).
- **Instant WhatsApp Redirection**: Preconnected domain resolution (`chat.whatsapp.com`) with direct deep linking into the official community group.
- **Dynamic Link Support**: Supports optional URL query parameters (`?link=...` or `?group=...`) with seamless fallback to the official invite URL.
- **Ultra-Fast & Lightweight**: Built with Vite 8 + React 19 + Tailwind CSS 4.
- **Zero Config Cloudflare Pages Ready**: Contains `.npmrc`, `.nvmrc`, and `public/_redirects` for automatic, error-free CI/CD builds.

---

## 🛠️ Cloudflare Pages Deployment Settings

When connecting this repository to **Cloudflare Pages**:

| Configuration | Value |
| :--- | :--- |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty / default) |
| **Node.js Version** | `20` (auto-detected via `.nvmrc`) |

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (http://localhost:3000)
npm run dev

# 3. Build for production
npm run build
```

---

© Monkhood. All Rights Reserved.
