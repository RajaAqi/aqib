# Frontend — Resume Builder (React + Vite + Tailwind)

Production-ready Resume Builder frontend. Built with **React 18**, **Vite**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Scripts

```bash
npm run dev       # Start dev server (port 5173)
npm run build     # Build for production → dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Root component with React Router
├── index.css             # Tailwind + custom styles
├── components/
│   ├── Navbar.jsx        # Navigation bar
│   └── Footer.jsx        # Footer
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── CreateResume.jsx  # Form builder
│   ├── TemplateSelection.jsx
│   ├── Preview.jsx       # Live preview + PDF export
│   └── Dashboard.jsx     # Saved resumes
└── templates/
    └── ResumePreview.jsx # Resume display renderer
```

## Key Features

### 1. Dynamic Form Builder (CreateResume.jsx)
- Add/remove multiple experiences with auto-save
- Multiple education entries
- Add skill & language tags (Enter to add, x to remove)
- Auto-saves to `localStorage:resume:draft`

### 2. Template System
- 5 templates: Classic, Modern, Two-Column, Blue, Minimalist
- Stored in `localStorage:resume:template`
- Easy to extend — add new template in `TemplateSelection.jsx`

### 3. PDF Export (Preview.jsx)
- Uses `html2pdf.js` library
- One-click download
- Responsive layout preserved in PDF

### 4. Local Storage Dashboard
- Save resumes to `localStorage:resume:saved`
- Load, edit, delete saved resumes
- No backend required

## Styling

### Tailwind CSS
- Configured in `tailwind.config.cjs`
- Scans `src/**/*.{js,jsx}`
- Custom styles in `src/index.css`
- Helper classes:
  - `.input` — Form field styling
  - `.resume-container` — PDF export wrapper
  - `.template-*` — Template-specific styles

## Adding New Features

### Add a new page
1. Create `src/pages/MyPage.jsx`
2. Import in `App.jsx` and add route:
   ```jsx
   <Route path="/mypage" element={<MyPage/>} />
   ```
3. Add nav link in `Navbar.jsx`

### Customize a template
Edit `src/templates/ResumePreview.jsx` — adjust className, add conditional sections, etc.

### Add more dependencies
```bash
npm install <package>
```

## Deployment

### Netlify
```bash
npm run build
# Drag dist/ to Netlify
```

### Vercel
```bash
vercel
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Troubleshooting

**"Missing script: dev"** → Check `package.json` has `"dev": "vite"`  
**"Module not found"** → Run `npm install` and restart dev server  
**Tailwind not working** → Ensure `tailwind.config.cjs` content includes correct paths  
**PDF export fails** → Check browser console; html2pdf.js may have CORS issues on hosted content

## Future Improvements

- [ ] Add more template variants
- [ ] Unit tests (Vitest + React Testing Library)
- [ ] Dark mode toggle
- [ ] AI summary generator (call backend API)
- [ ] Real-time collaboration (WebSocket)
- [ ] User accounts (add backend auth)

---

See root `README.md` for full project docs.
