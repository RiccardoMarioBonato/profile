# Riccardo M. Bonato - Resume Website

A clean, minimal React-based resume website with no unnecessary colors or gradients.

## Setup Instructions

### 1. Create a React App

```bash
npx create-react-app my-resume
cd my-resume
```

### 2. Replace Files

Replace the following files in your new React app:

- `src/App.jsx` → Replace with `App.jsx`
- `src/App.css` → Replace with `App.css`
- `src/index.js` → Replace with `index.js`
- `public/index.html` → Replace with `public-index.html` (rename to `index.html`)

### 3. Install gh-pages (for GitHub Pages deployment)

```bash
npm install --save-dev gh-pages
```

### 4. Update package.json

Make sure your `package.json` has:

```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "deploy": "npm run build && gh-pages -d build"
}
```

Replace `yourusername` and `your-repo-name` with your actual GitHub username and repository name.

### 5. Run Locally

```bash
npm start
```

Visit `http://localhost:3000` to see your resume.

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

This will automatically build your React app and push it to the `gh-pages` branch.

Then enable GitHub Pages in your repo settings:
- Go to Settings → Pages
- Select `gh-pages` branch as source
- Your site will be live at `https://yourusername.github.io/your-repo-name`

## Design Features

- Clean, minimal design without gradients or excessive colors
- Collapsible sections for better organization
- Fully responsive for mobile and desktop
- Easy to customize with your own information
- Simple hover effects on skills

## Customization

Edit `src/App.jsx` to update:
- Your name, title, and contact information
- Work experience
- Education
- Projects
- Skills

Edit `src/App.css` if you want to change colors, fonts, or spacing.