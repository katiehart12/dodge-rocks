#!/bin/bash

# Simple local server for Dodge Rocks Game
# Opens the game in your default browser

PORT=8000

echo "🚀 Starting local server..."
echo "📱 Game will open at: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    # Try to open browser automatically (macOS)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sleep 1 && open "http://localhost:$PORT" &
    fi
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    # Try to open browser automatically (macOS)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sleep 1 && open "http://localhost:$PORT" &
    fi
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Python not found. Please install Python or use one of these alternatives:"
    echo ""
    echo "Option 1: Install Python from https://www.python.org/"
    echo ""
    echo "Option 2: Use Node.js (if installed):"
    echo "   npx http-server -p $PORT"
    echo ""
    echo "Option 3: Just open index.html directly in your browser"
    exit 1
fi
