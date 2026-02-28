# Dodge Falling Rocks Game

A React + JSX browser game where you dodge falling rocks. Use arrow keys or A/D to move left and right. Score = seconds survived.

## ✔ Checklist (Local JSX Game)

- ✔ **Project runs locally**: `npm start` or `npm run dev`
- ✔ **Visible interaction**: movement (←/→ or A/D), score (seconds), win/lose (game over + restart)
- ✔ **JSX files**: `src/App.jsx`, `src/main.jsx`, `src/components/DodgeRocksGame.jsx`
- ✔ **Git**: Code is in a Git repo (commit and push to GitHub when ready)

## 🎮 How to Play

- **Move Left**: `←` Arrow or `A` key
- **Move Right**: `→` Arrow or `D` key
- **Goal**: Avoid the falling rocks for as long as possible. Score = seconds survived.
- **Game Over**: One hit ends your run; click **Play again** or **Restart run** to retry.

## 🚀 Live Demo

**Play the game:** https://katiehart12.github.io/dodge-rocks/

## 🏃 Running Locally (Vite + React)

```bash
# Install dependencies (first time only)
npm install

# Start the dev server
npm start
# or
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## 🚢 Deployment to GitHub Pages

The workflow builds the app and pushes it to the `gh-pages` branch. You then tell GitHub to serve that branch.

**One-time setup:**

1. **Push the latest code** (including this workflow) so the “Deploy to GitHub Pages” workflow runs and creates the `gh-pages` branch:
   ```bash
   git add . && git commit -m "Deploy to gh-pages branch" && git push origin main
   ```
2. On GitHub: repo → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose **Branch:** `gh-pages`, **Folder:** `/ (root)`. Click **Save**.
5. Wait a minute; your site will be at **https://katiehart12.github.io/dodge-rocks/**

After that, every push to `main` will rebuild and update the live site.

## 🛠️ Technologies

- **Vite** + **React 18** (JSX)
- HTML5 Canvas
- `src/App.jsx`, `src/components/DodgeRocksGame.jsx`

## 📝 License

Free to use and modify!
