# Dodge Falling Rocks Game

A React-based browser game where you dodge falling rocks. Use arrow keys or A/D to move left and right.

## 🎮 How to Play

- **Move Left**: `←` Arrow or `A` key
- **Move Right**: `→` Arrow or `D` key
- **Goal**: Avoid the falling rocks for as long as possible
- **Game Over**: One hit ends your run

## 🚀 Live Demo

Play the game at: [Your GitHub Pages URL will appear here after deployment]

## 📦 Setup

No installation required! This project uses React via CDN, so you can simply open `index.html` in your browser.

## 🏃 Running Locally

You have several options to run the game locally:

### Option 1: Simple Python Server (Recommended)
```bash
# Make the script executable (first time only)
chmod +x start.sh

# Run the server
./start.sh
```
The game will automatically open in your browser at `http://localhost:8000`

### Option 2: Node.js Server
```bash
# Run with Node.js
node start.js
```
Then open `http://localhost:8000` in your browser.

### Option 3: Python Manual
```bash
# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

### Option 4: Just Open the File
Since the project uses CDN links, you can also simply:
- Double-click `index.html` to open it in your default browser
- Or right-click → "Open with" → choose your browser

**Note**: Using a local server (Options 1-3) is recommended to avoid potential CORS issues.

## 🚢 Deployment to GitHub Pages

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `dodge-rocks-game` or `vibe-class`

2. **Initialize git and push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dodge Rocks game"
   git branch -M main
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

- React 18 (via CDN)
- HTML5 Canvas
- Vanilla JavaScript
- Babel Standalone (for JSX transformation)

## 📝 License

Free to use and modify!
