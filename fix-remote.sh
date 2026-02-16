#!/bin/bash

echo "🔧 Fixing GitHub remote URL..."
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name: " REPO_NAME

echo ""
echo "Updating remote URL..."
git remote set-url origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

echo "✅ Remote updated!"
echo ""
echo "Now you can push with:"
echo "  git push --set-upstream origin main"
echo ""
echo "You'll be prompted for your GitHub username and password."
echo "Note: Use a Personal Access Token instead of your password."
echo ""
echo "Create a token at: https://github.com/settings/tokens"
echo "Select 'repo' scope when creating the token."
