# 🚀 Resume Builder — Quick Start Guide

Your production-ready Resume Builder is ready to use!

## ✅ What's Included

- ✅ Full React + Vite + Tailwind frontend
- ✅ Dynamic form builder with autosave
- ✅ 5 professional templates
- ✅ Live preview + PDF export
- ✅ Dashboard with local storage
- ✅ Fully responsive (mobile-friendly)

## 🎯 Start Using It Now

### 1. Navigate to the project
```bash
cd ~/projects/resume-builder/client
```

### 2. Start the dev server
```bash
npm run dev
```

You should see:
```
➜  Local:   http://localhost:5173/
```

### 3. Open in browser
Open http://localhost:5173 in your web browser.

## 📋 How to Use

1. **Home Page** — Click "Create Resume" or "Choose Template"
2. **Create Resume Page** — Fill in your details:
   - Personal Info (name, email, phone, etc.)
   - Work Experience (add multiple jobs with bullet points)
   - Education (add degrees)
   - Skills (type + Enter to add)
   - Languages (type + Enter to add)
   - Links (portfolio, LinkedIn, GitHub)
3. **Preview** — Click "Preview" to see your resume
4. **Download PDF** — Click "Export as PDF" to download
5. **Save** — Click "Save to Dashboard" to store resume locally
6. **Dashboard** — View all your saved resumes, load or delete them

## 🎨 Features

- **Autosave** — Your draft saves automatically as you type
- **Multiple Templates** — Choose from 5 different designs
- **PDF Export** — One-click download
- **Local Storage** — All data saved in your browser (no account needed)
- **Responsive** — Works on desktop, tablet, mobile

## 🛠️ Next Steps

### Option 1: Customize
- Edit templates in `src/templates/ResumePreview.jsx`
- Add colors, fonts, or new sections
- Modify form fields in `src/pages/CreateResume.jsx`

### Option 2: Deploy
```bash
npm run build
```
Then deploy the `dist/` folder to:
- Netlify (drag & drop)
- Vercel (vercel deploy)
- GitHub Pages
- Any static host

### Option 3: Add Backend (Future)
1. Create Express server in `server/`
2. Connect to MongoDB
3. Add user authentication
4. Change localStorage to API calls

## 📂 File Locations

- **Source:** `~/projects/resume-builder/client/src/`
- **Dev Server:** http://localhost:5173
- **Production Build:** `client/dist/` (after `npm run build`)

## 🐛 Troubleshooting

**Dev server won't start?**
```bash
cd ~/projects/resume-builder/client
npm install
npm run dev
```

**Changes not showing?**
- Refresh browser (Ctrl+R or Cmd+R)
- Check browser console for errors (F12)

**PDF export not working?**
- Check browser console for errors
- Try a different browser
- Make sure you have data filled in

## 📚 Learn More

- **Frontend Guide:** `client/README.md`
- **Full Docs:** `README.md`

## 🎉 You're All Set!

Your Resume Builder is ready to use. Start creating resumes at http://localhost:5173!

---

**Questions or issues?** Check the README files or customize the code to fit your needs.
