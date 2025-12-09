#!/bin/bash
# Script to fix Git email for Vercel deployments
# Usage: Replace YOUR_VERCEL_EMAIL with your actual Vercel account email

echo "🔧 Fixing Git Email for Vercel Deployment"
echo "=========================================="
echo ""
echo "⚠️  IMPORTANT: Replace 'YOUR_VERCEL_EMAIL@example.com' with your actual Vercel account email!"
echo ""
echo "Current Git email:"
git config user.email
echo ""
echo "To fix, run these commands with YOUR actual Vercel email:"
echo ""
echo "1. Set Git email (replace with your Vercel email):"
echo "   git config user.email \"your-vercel-email@example.com\""
echo ""
echo "2. Amend last commit with correct author:"
echo "   git commit --amend --reset-author --no-edit"
echo ""
echo "3. Force push (safe):"
echo "   git push --force-with-lease"
echo ""
echo "⚠️  Make sure the email matches exactly with your Vercel account email!"
