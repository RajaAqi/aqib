# 📄 Resume Builder — Full Stack Web App

A modern, production-ready resume builder web application. Users can:
- Create dynamic resumes with multiple experiences, education, skills, and languages
- Choose from 5+ professional templates
- Preview in real-time
- Export to PDF (client-side)
- Save resumes locally in browser dashboard

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 16.x
- **npm** >= 8.x

### Frontend Setup

```bash
cd ~/projects/resume-builder/client
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Frontend Build

```bash
cd ~/projects/resume-builder/client
npm run build
```

Output: `client/dist/` (ready for deployment to Netlify, Vercel, etc.)

## 📁 Project Structure

```
resume-builder/
├── client/                          # React + Vite + Tailwind frontend
│   ├── package.json                 # Dependencies: React 18, Vite 4, Tailwind 3
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.cjs           # Tailwind CSS config
│   ├── postcss.config.cjs            # PostCSS config (Tailwind + Autoprefixer)
│   ├── index.html                   # HTML entry point
│   ├── src/
│   │   ├── main.jsx                 # React entry (BrowserRouter + App)
│   │   ├── App.jsx                  # Root component with routes
│   │   ├── index.css                # Tailwind + custom styles
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Top navigation
│   │   │   └── Footer.jsx           # Footer
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page with CTA
│   │   │   ├── CreateResume.jsx     # Form builder (dynamic sections)
│   │   │   ├── TemplateSelection.jsx # Template chooser (5 templates)
│   │   │   ├── Preview.jsx          # Live preview + PDF export
│   │   │   └── Dashboard.jsx        # Saved resumes list
│   │   └── templates/
│   │       └── ResumePreview.jsx    # Resume renderer for all templates
│   ├── node_modules/
│   └── dist/                        # Production build output
└── server/                          # Backend (optional, future)
    └── package.json                 # Express server scaffold

```

## 🎨 Features

### ✅ Completed
- **Dynamic Form Builder** — Add/remove multiple experiences, education entries, skills, languages, links
- **Autosave Draft** — Data saves to localStorage on every change
- **5 Professional Templates** — Classic, Modern, Two-Column, Blue Accent, Minimalist
- **Live Preview** — See resume as you type
- **PDF Export** — One-click download using html2pdf.js
- **Dashboard** — Save, load, delete resumes from localStorage
- **Responsive Design** — Mobile-friendly Tailwind CSS layout
- **Tailwind Styling** — Production-ready CSS utilities

### 🚧 Future Enhancements
- Backend API (Express + MongoDB)
- User authentication
- Cloud resume storage
- AI summary generation
- ATS score checker
- Cover letter builder
- Server-side PDF rendering (Puppeteer)
- Real-time collaboration

## 💾 Data Storage

All data is stored in the browser's **localStorage**:
- `resume:draft` — Current draft being edited
- `resume:saved` — Array of saved resumes
- `resume:template` — Currently selected template

No backend required to get started. When ready to scale:
1. Add an Express backend server
2. Connect to MongoDB for persistence
3. Add user authentication
4. Deploy client to Netlify/Vercel, server to Heroku/Railway/AWS

## 🔧 Configuration Files

### vite.config.js
- React plugin
- Dev server on port 5173

### tailwind.config.cjs
- Content scans `./src/**/*.{js,jsx}`
- Extends default theme

### postcss.config.cjs
- Tailwind CSS + Autoprefixer plugins

## 📦 Dependencies

### Runtime
- **react@18.2.0** — UI framework
- **react-dom@18.2.0** — React DOM renderer
- **react-router-dom@6.10.0** — Routing
- **html2pdf.js@0.10.1** — Client-side PDF export

### Dev
- **vite@4.3.9** — Build tool & dev server
- **@vitejs/plugin-react@3.1.0** — React Fast Refresh
- **tailwindcss@3.3.3** — Utility CSS framework
- **postcss@8.4.24** — CSS transformations
- **autoprefixer@10.4.14** — Vendor prefixes

## 🎯 Usage Walkthrough

1. **Home Page** — Overview & CTAs
2. **Create Resume** — Fill out personal info, add experiences/education
   - Autosaves after each change
   - Add/remove sections with dynamic buttons
   - Press Enter in skill/language fields to add tags
3. **Choose Template** — Pick from 5 designs, see preview
4. **Preview** — Live resume display + "Export as PDF" button
5. **Dashboard** — Manage saved resumes (load, delete)

## 🚀 Deployment

### Frontend Only (Recommended for quick start)

**Netlify:**
```bash
npm run build
# Drag dist/ folder to Netlify
```

**Vercel:**
```bash
npm run build
vercel --prod
```

**GitHub Pages:**
```bash
npm run build
# Push dist/ to gh-pages branch
```

### With Backend (Future)

Server scaffold exists at `server/package.json`. To enable:
1. Create `server/index.js` with Express + MongoDB routes
2. Update `client` to fetch from backend instead of localStorage
3. Deploy server separately (Heroku, Railway, AWS Lambda)

## 🛠️ Development

### Run dev server
```bash
cd client
npm run dev
```

### Format / Lint (optional, add later)
```bash
npm install -D prettier eslint
npx eslint src/
```

### Build for production
```bash
npm run build
npm run preview  # Test production build locally
```

## 📚 Next Steps

1. **Test the app** — Open http://localhost:5173, create a resume, try PDF export
2. **Customize templates** — Edit `src/templates/ResumePreview.jsx` to add template variants
3. **Add backend** — Create `server/index.js` with Express + MongoDB routes
4. **Deploy** — Push to Netlify, Vercel, or self-hosted VPS
5. **Scale features** — AI summary, ATS score, cover letters, auth

## 📄 License

MIT — Free to use and modify.

---

**Questions?** Check the client/README.md for frontend-specific details.
