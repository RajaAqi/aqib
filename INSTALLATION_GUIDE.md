# 📦 Resume Builder — Installation & Setup Guide

## 🎯 Quick Start (3 Steps)

### Step 1: Extract the ZIP
```bash
unzip resume-builder.zip
cd resume-builder/client
```

### Step 2: Install Dependencies
```bash
npm install
```
(This takes 2-3 minutes first time)

### Step 3: Start Dev Server
```bash
npm run dev
```

**Open in browser:** http://localhost:5173

---

## ✅ What You Received

```
resume-builder.zip (44 KB)
├── README.md                    # Full documentation
├── QUICK_START.md               # How to use the app
├── PROJECT_SUMMARY.md           # Project overview
├── FILES_CREATED.md             # File inventory
├── INSTALLATION_GUIDE.md         # This file
└── client/                      # React + Vite + Tailwind app
    ├── package.json             # Dependencies
    ├── src/                     # React source code
    │   ├── pages/               # 5 pages
    │   ├── components/          # Navbar, Footer
    │   ├── templates/           # Resume renderer
    │   └── App.jsx              # Router
    ├── index.html               # Entry HTML
    ├── vite.config.js           # Build config
    ├── tailwind.config.cjs       # Tailwind config
    └── postcss.config.cjs        # PostCSS config
```

## 🛠️ System Requirements

- **Node.js:** v16.x or higher
- **npm:** v8.x or higher
- **Browser:** Chrome, Firefox, Safari, or Edge (latest version)
- **Disk Space:** 500 MB (for node_modules after install)

**Check your versions:**
```bash
node --version
npm --version
```

If you don't have Node.js installed:
- **Windows:** https://nodejs.org/en/download
- **macOS:** `brew install node`
- **Linux:** `sudo apt install nodejs npm`

## 📥 Installation Steps

### 1. Extract the ZIP File
```bash
# Using terminal
unzip resume-builder.zip

# Or use your file manager (Windows/Mac)
# Right-click → Extract All
```

### 2. Navigate to Project
```bash
cd resume-builder/client
```

### 3. Install Dependencies
```bash
npm install
```

**What this does:**
- Downloads 151 npm packages
- Creates `node_modules/` folder (~500 MB)
- Generates `package-lock.json`

**If you get errors:**
```bash
# Try clearing npm cache
npm cache clean --force
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

**Expected output:**
```
➜  Local:   http://localhost:5173/
➜  press h to show help
```

### 5. Open in Browser
- Click the link or paste: **http://localhost:5173**

---

## 🎮 Using the Application

### Create a Resume
1. Click **"Create Resume"** button
2. Fill in your details:
   - Personal Info (name, email, phone)
   - Work Experience (add multiple jobs)
   - Education (add degrees)
   - Skills (type + Enter)
   - Languages (type + Enter)
3. Click **"Preview"**
4. Click **"Export as PDF"** to download
5. Click **"Save to Dashboard"** to save locally

### Manage Resumes
- Go to **"Dashboard"** to see all saved resumes
- Click **"Load"** to edit a saved resume
- Click **"Delete"** to remove a resume

### Change Templates
- Click **"Templates"** to choose a different design
- 5 templates available:
  1. Classic Simple
  2. Modern Clean
  3. Two-Column Professional
  4. Creative Blue Accent
  5. Minimalist

---

## 📊 Available npm Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production (creates dist/ folder)
npm run build

# Preview production build locally
npm run preview

# List all available scripts
npm run
```

---

## 📂 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              (Landing page)
│   │   ├── CreateResume.jsx      (Form builder)
│   │   ├── TemplateSelection.jsx (Choose template)
│   │   ├── Preview.jsx           (Preview + PDF export)
│   │   └── Dashboard.jsx         (Saved resumes)
│   ├── components/
│   │   ├── Navbar.jsx            (Navigation)
│   │   └── Footer.jsx            (Footer)
│   ├── templates/
│   │   └── ResumePreview.jsx     (Resume display)
│   ├── App.jsx                   (Router)
│   ├── main.jsx                  (Entry point)
│   └── index.css                 (Styles)
├── index.html                    (HTML template)
├── package.json                  (Dependencies)
├── vite.config.js                (Build config)
├── tailwind.config.cjs            (Tailwind config)
└── postcss.config.cjs             (PostCSS config)
```

---

## 🐛 Troubleshooting

### "npm: command not found"
→ Node.js is not installed. Download from https://nodejs.org

### "Port 5173 already in use"
→ Another app is using the port. Either:
```bash
# Kill the process using port 5173
# Windows: netstat -ano | findstr :5173
# Mac/Linux: lsof -i :5173

# Or use a different port
npm run dev -- --port 3000
```

### "node_modules not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### "Tailwind CSS not working"
```bash
npm run dev
# Then refresh browser (Ctrl+R)
```

### "PDF export not working"
1. Check browser console (F12 → Console)
2. Make sure you have data filled in
3. Try a different browser
4. Check that html2pdf.js loaded (Network tab in DevTools)

### "Cannot find module 'react'"
```bash
npm install
npm run dev
```

### "EACCES permission errors on Mac/Linux"
```bash
sudo npm install -g npm
npm install
npm run dev
```

---

## 🚀 Production Build

When ready to deploy:

```bash
# Build production files
npm run build

# This creates dist/ folder with:
# - index.html (minified)
# - assets/index-XXXX.js (minified bundle)
# - assets/index-XXXX.css (minified Tailwind)
```

### Deploy to Netlify (Easiest)
1. Go to https://netlify.com
2. Sign up (free)
3. Drag & drop the `dist/` folder
4. Done! Your app is live 🎉

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 💾 Data Storage

All your resume data is stored locally in your browser:
- **Location:** Browser localStorage
- **Keys:** `resume:draft`, `resume:saved`, `resume:template`
- **Persists:** Across browser refresh
- **Safe:** Private to your browser (not sent anywhere)

To clear all data:
```javascript
// Open browser console (F12) and paste:
localStorage.clear()
```

---

## 📚 Learn More

See the following files in the project:
- **README.md** — Technical documentation
- **QUICK_START.md** — How to use the app
- **PROJECT_SUMMARY.md** — Project overview
- **client/README.md** — Frontend development guide

---

## ✨ Features

✅ Dynamic form builder
✅ 5 professional templates
✅ Live preview
✅ PDF export
✅ Save multiple resumes
✅ Mobile responsive
✅ Auto-save drafts
✅ No backend required
✅ Works offline
✅ Production-ready

---

## 🎉 You're Ready!

1. Extract the ZIP
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173
5. Start creating resumes!

---

## 🆘 Still Need Help?

1. **Check browser console** (F12) for error messages
2. **Read README.md** for technical details
3. **Check QUICK_START.md** for usage guide
4. **Try a different browser** to rule out browser issues
5. **Reinstall:** `rm -rf node_modules && npm install`

---

**Enjoy building resumes!** 🚀
