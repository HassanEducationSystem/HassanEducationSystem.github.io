# HES Download Website (`hes-web`)

Standalone landing page for the Hassan Education System Android APK.  
Separate from `frontend/` (Expo) and `backend/`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- EN / Urdu toggle (RTL)

## Local development

```bash
cd hes-web
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/`).

## Config you will update later

Edit [`src/config.ts`](src/config.ts):

- `GITHUB_OWNER` / `GITHUB_REPO` — for the stable APK link  
  `https://github.com/<owner>/<repo>/releases/latest/download/hes.apk`
- `CONTACT` — WhatsApp, email, phone (sample values for now)

Version label comes from [`public/version.json`](public/version.json).

## Assets

| Path | Purpose |
|------|---------|
| `public/images/hes_logo.png` | Header logo |
| `public/images/logo_with_bg.jpg` | Hero logo (light bg) / favicon |
| `public/images/admin.webp` | Maktab admin photo |
| `public/images/adminwithteachers.webp` | Admin + teachers group photo |
| `public/videos/guide.mp4` | HES app guide video |
| `public/videos/complaints-guide.mp4` | Complaints guide video |
Until media files exist, the page shows dashed placeholders.

## Pre-deploy checklist (do one by one)

1. **Set GitHub user/repo in `src/config.ts`** — DONE (`AbdulRehmanGHub` / `HES-WEB`)  
2. **Upload `hes.apk` to a GitHub Release** — DONE (`v1.3.0` / `hes.apk`)  
3. **Deploy to org Pages** — DONE (`https://hassaneducationsystem.github.io/`)  
4. **Test on a real phone** — Urdu, videos, images, Download  

### Org Pages setup (new clean URL)

1. Create organization: https://github.com/organizations/plan  
   - Name: `HassanEducationSystem` (must be free)  
2. Create a **public** repo named exactly: `HassanEducationSystem.github.io`  
3. Push this `hes-web` project to that repo (`main`)  
4. Repo → **Settings → Pages** → Source: **GitHub Actions**  
5. Wait for the deploy workflow to finish  

Live site: https://hassaneducationsystem.github.io/  
APK: https://hassaneducationsystem.github.io/hes.apk  

### Updating the APK

1. Replace `public/hes.apk` with the new build (keep the same filename).  
2. Bump `public/version.json`.  
3. Commit and push `main` — Pages redeploys.  
Download URL stays the same.

Optional later: compress large gallery images; custom domain.

### Step 1 — `config.ts` (current)

In [`src/config.ts`](src/config.ts) replace:

```ts
export const GITHUB_OWNER = 'YOUR_GITHUB_USER'
export const GITHUB_REPO = 'YOUR_REPO'
```

With your real values, for example:

```ts
export const GITHUB_OWNER = 'your-github-username'
export const GITHUB_REPO = 'MKBW_APP' // or whatever the repo is named
```

That builds the stable download link:

`https://github.com/<owner>/<repo>/releases/latest/download/hes.apk`

You need a GitHub account + a repo (can be this project). The Release with the APK comes in step 2.

On each new app version: upload a new Release with asset name **`hes.apk` again**, bump `version.json`. Page URL and download URL stay the same.
