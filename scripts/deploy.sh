#!/bin/bash

# Production Deployment Script for InnofyAI
set -e

echo "🚀 Starting production deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18 or higher is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js version check passed: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run type checking
echo "🔍 Running type checking..."
npm run type-check

# Build the application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ ! -f "dist/index.js" ]; then
    echo "❌ Error: Build failed. dist/index.js not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Create logs directory if it doesn't exist
mkdir -p logs

# Set environment variables for production
export NODE_ENV=production
export PORT=${PORT:-5000}

echo "🌐 Starting production server on port $PORT..."

# Start the application
exec node dist/index.js 