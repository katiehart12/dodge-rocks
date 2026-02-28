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

Play the game at: [Your GitHub Pages URL will appear here after deployment]

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

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `dodge-rocks-game` or `vibe-class`

2. **Commit and push your code** (repo already has git; add the new Vite/JSX game):
   ```bash
   git add .
   git commit -m "Add Vite + React JSX game (npm start, App.jsx, components)"
   git push origin main
   ```
   If the repo is new and has no remote yet:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select `main` branch
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🛠️ Technologies

- **Vite** + **React 18** (JSX)
- HTML5 Canvas
- `src/App.jsx`, `src/components/DodgeRocksGame.jsx`

## 📝 License

Free to use and modify!
