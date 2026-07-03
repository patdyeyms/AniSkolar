# AniSkolar

The public-facing landing page and scholar sign-in screen for **AniSkolar**, a
scholarship management portal built for De La Salle University – Dasmariñas
(DLSU-D).

This build contains only the pre-authentication experience:

- **Landing Page** — hero section, impact stats, scholarship program cards,
  a 4-step renewal process overview, and an FAQ section.
- **Login Page** — sign-in form with a simulated authentication sequence,
  demo credentials, and a password recovery flow.

## Tech Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vitejs.dev/) for dev server / bundling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons

## Getting Started

**Prerequisites:** Node.js (18+ recommended)

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------- |
| `npm run dev`       | Start the local dev server            |
| `npm run build`     | Type-check and produce a production build in `dist/` |
| `npm run preview`   | Preview the production build locally  |
| `npm run lint`      | Run TypeScript's `--noEmit` type check |
| `npm run clean`     | Remove the `dist/` output folder      |

## Project Structure

```
src/
├── assets/              # Logo and hero background image
├── components/
│   ├── LandingPage.tsx
│   ├── LandingPage.css
│   ├── LoginPage.tsx
│   └── LoginPage.css
├── lib/
│   └── utils.ts          # cn() class-merging helper
├── App.tsx               # Landing → Login state flow
├── constants.ts          # AVAILABLE_SCHOLARSHIPS data
├── types.ts               # Scholarship type
├── index.css              # Tailwind import + theme tokens + base styles
└── main.tsx                # App entry point
```

## Notes

- This is a trimmed-down build — the authenticated scholar portal (dashboard,
  requirements tracker, GPA/duty-hour tools, renewal workflow, announcements,
  etc.) has intentionally been removed and is not part of this repo.
- Login is currently simulated client-side (demo credentials are shown on the
  sign-in form); there's no real backend or authentication provider wired up.
