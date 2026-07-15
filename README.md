# Ron Haviv — Personal Website

A clean, professional one-page personal website for Ron Haviv, a SOC/MDR Analyst and AI Security
Builder. Built as a static, single-page React application — no backend, no database, no login,
no CMS.

Sections: Header/Nav, Hero, About, Experience, Featured Project (ObserveAgents), Skills,
Education, and Contact.

## Tech Stack

- React 18
- Vite
- Plain CSS (no framework)
- Static site, fully client-side

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

This starts a local dev server (default: http://localhost:5173) with hot reload.

## Build for production

```bash
npm run build
```

Output is written to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository (see "Push to GitHub" below).
2. In Vercel, click **Add New Project** and import the repository.
3. Framework preset: **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Vercel will build and host the site automatically on every push.

Alternatively, using the Vercel CLI from inside this project folder:

```bash
npm install -g vercel
vercel
```

## ⚠️ Action required: add your real resume

`public/resume.pdf` in this repo is **only a placeholder text file**, not a real PDF. The site's
"View Resume" buttons link to `/resume.pdf`, so before you deploy for real:

1. Export/save your actual resume as a PDF.
2. Replace `public/resume.pdf` with that file, keeping the exact same filename (`resume.pdf`).
3. No code changes are needed — the button already points at `/resume.pdf`.

Until you do this, visitors who click "View Resume" will download a placeholder text file
instead of your CV.

## ⚠️ Action required: add your real LinkedIn URL

`src/App.jsx` currently uses a placeholder LinkedIn link (`https://www.linkedin.com/`) in the
Contact section, marked with a `// TODO` comment. Replace it with your real LinkedIn profile URL
before deploying.

## Notes

- No backend, database, authentication, analytics, or contact form backend are included by
  design — this is a static, one-page site.
- Colors, spacing, and section content live in `src/App.jsx` and `src/styles.css` if you want to
  customize further.
