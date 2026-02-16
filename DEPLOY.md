# How to Deploy and View Your GitHub Pages Site

## Step 1: Create GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon → "New repository"
3. Name it (e.g., `dodge-rocks-game`)
4. Choose Public or Private
5. **Don't** check "Initialize with README"
6. Click "Create repository"

## Step 2: Push Your Code

Run these commands in your terminal (replace YOUR_USERNAME and YOUR_REPO_NAME):

```bash
cd "/Users/katiehart/Desktop/vibe class"

# Add all files
git add .

# Commit
git commit -m "Initial commit: Dodge Rocks game"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub (the one you just created)
2. Click **Settings** (top menu bar)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: View Your Live Site

After enabling Pages, wait 1-2 minutes for GitHub to build your site, then visit:

**https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/**

For example, if your username is `katiehart` and repo is `dodge-rocks-game`:
**https://katiehart.github.io/dodge-rocks-game/**

## Troubleshooting

- **Site not loading?** Wait a few minutes - GitHub Pages can take 1-5 minutes to deploy
- **404 error?** Make sure you enabled Pages in Settings and selected the `main` branch
- **Can't find Settings?** Make sure you're logged in and viewing your own repository
- **Want to update your site?** Just commit and push changes:
  ```bash
  git add .
  git commit -m "Update game"
  git push
  ```

Your site will automatically update after each push!
