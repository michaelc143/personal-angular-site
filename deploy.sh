#!/bin/bash
# Local verification script to mirror CI build/test steps

set -e

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Running E2E tests..."
npx playwright test

echo "Building project..."
npm run build

echo "Verification complete. Push to 'main' to trigger automated deployment."