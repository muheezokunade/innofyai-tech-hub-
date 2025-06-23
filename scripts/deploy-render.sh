#!/bin/bash

# Render Backend Deployment Script for InnofyAI
# This script helps prepare and deploy the backend to Render

set -e

echo "🚀 Preparing Render backend deployment for InnofyAI..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if render.yaml exists
if [ ! -f "render.yaml" ]; then
    print_error "render.yaml not found. Please ensure the Render configuration file exists."
    exit 1
fi

# Check if git is clean
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes. Please commit them before deploying."
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Test the server build
print_status "Testing server build..."
npm run build:server

# Check if build was successful
if [ ! -f "dist/index.js" ]; then
    print_error "Server build failed. dist/index.js not found."
    exit 1
fi

print_success "Server build completed successfully!"

# Commit and push changes
print_status "Committing and pushing changes to GitHub..."
git add .
git commit -m "Prepare for Render deployment" || true
git push origin main

print_success "Changes pushed to GitHub!"

echo ""
echo "📋 Next Steps for Render Deployment:"
echo ""
echo "1. Go to https://render.com and sign up/login"
echo "2. Click 'New +' and select 'Web Service'"
echo "3. Connect your GitHub account"
echo "4. Select repository: muheezokunade/innofyai-tech-hub-"
echo "5. Configure the service:"
echo "   - Name: innofyai-backend"
echo "   - Environment: Node"
echo "   - Build Command: npm run build:server"
echo "   - Start Command: npm start"
echo "   - Plan: Free"
echo ""
echo "6. Set Environment Variables:"
echo "   - NODE_ENV=production"
echo "   - PORT=10000"
echo "   - CORS_ORIGIN=https://your-netlify-app.netlify.app"
echo "   - RATE_LIMIT_WINDOW_MS=900000"
echo "   - RATE_LIMIT_MAX_REQUESTS=100"
echo ""
echo "7. Click 'Create Web Service'"
echo ""
echo "8. After deployment, update your Netlify environment variables:"
echo "   - VITE_API_URL=https://your-render-app.onrender.com"
echo ""
echo "📚 For detailed instructions, see: RENDER_DEPLOYMENT.md"
echo ""
echo "🔗 Test your deployment:"
echo "   curl https://your-app.onrender.com/api/health" 