#!/bin/bash

# Script to push your code to GitHub
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values

echo "🚀 Pushing code to GitHub..."
echo ""
echo "⚠️  Make sure you've created a repository on GitHub first!"
echo "   Go to: https://github.com/new"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name: " REPO_NAME

echo ""
echo "Adding remote and pushing..."
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git
git branch -M main
git push -u origin main

echo ""
echo "✅ Done! Now go to your repository and enable GitHub Pages:"
echo "   1. Go to: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo "   2. Click Settings → Pages"
echo "   3. Select 'main' branch"
echo "   4. Click Save"
echo ""
echo "Your site will be at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
