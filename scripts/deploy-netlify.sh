#!/bin/bash

# Netlify Deployment Script for InnofyAI
# This script automates the deployment process to Netlify

set -e

echo "🚀 Starting Netlify deployment for InnofyAI..."

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

# Build the client
print_status "Building client for production..."
npm run build:client

# Check if build was successful
if [ ! -d "dist" ]; then
    print_error "Build failed. dist directory not found."
    exit 1
fi

print_success "Build completed successfully!"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    print_warning "Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Deploy to Netlify
print_status "Deploying to Netlify..."
netlify deploy --prod --dir=dist

print_success "Deployment completed!"
print_status "Your site should be live in a few minutes."
print_status "Check your Netlify dashboard for the URL."

echo ""
echo "📋 Next steps:"
echo "1. Set up environment variables in Netlify dashboard"
echo "2. Configure custom domain (optional)"
echo "3. Set up backend deployment (Railway/Render/Vercel)"
echo "4. Update CORS settings in backend"
echo ""
echo "📚 For detailed instructions, see: NETLIFY_DEPLOYMENT.md" 