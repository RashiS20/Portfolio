# Rashi Singh · Portfolio

A creative, interactive portfolio built with **React + TypeScript + Vite**.

## Features

- **Command palette**: press **Ctrl + K** to jump to sections, toggle theme, and open links
- **Theme toggle**: dark/light with local persistence
- **Spotlight cursor**: subtle reactive lighting for a “creative experience” feel
- **Interactive sections**: impact metrics, timeline, and filterable projects

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Resume asset

The UI expects a resume **PDF** at:

- `public/rashi-singh-resume.pdf`

Optional: also add a preview image at:

- `public/rashi-singh-resume.png`

If you want to use your existing resume image (from this Cursor session) as the preview, copy it here (PowerShell):

```powershell
Copy-Item "C:\Users\Rashi Singh\.cursor\projects\c-WORKSPACE-portfolio\assets\c__Users_Rashi_Singh_AppData_Roaming_Cursor_User_workspaceStorage_d11d2b03a78030d804617e5531c8c0a7_images_my_resume-768b0bf7-64dd-4dfe-b41a-ec0e7f3a3521.png" "C:\WORKSPACE\portfolio\public\rashi-singh-resume.png"
```
