# Fix Git Email for Vercel Deployment

## ⚠️ Important: Use Your Actual Vercel Email

The command template uses `"your-vercel-email@example.com"` as a placeholder. **You MUST replace this with your actual Vercel account email address.**

## Steps to Fix

### Step 1: Check Your Current Git Email
```bash
git config user.email
```

### Step 2: Check Your Vercel Account Email
1. Go to: https://vercel.com/dashboard
2. Click on your profile/avatar (top right)
3. Go to: Settings → Profile
4. Note your email address

### Step 3: Set Git Email to Match Vercel Email
```bash
# Replace YOUR_ACTUAL_VERCEL_EMAIL with the email from Step 2
git config user.email "YOUR_ACTUAL_VERCEL_EMAIL"
```

**Example:**
```bash
git config user.email "drjanduffy@example.com"
```

### Step 4: Amend Last Commit with Correct Author
```bash
git commit --amend --reset-author --no-edit
```
This updates the last commit to use the correct email without changing the commit message.

### Step 5: Force Push (Safe)
```bash
git push --force-with-lease
```
This safely pushes the amended commit. `--force-with-lease` is safer than `--force` because it won't overwrite if someone else has pushed changes.

## Verify It Worked

After pushing:

1. **Check Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Navigate to: Deployments
   - Should see a new deployment within 30 seconds

2. **Check GitHub Webhook:**
   - Go to: https://github.com/DrJanDuffy/pewtervalleyestates.com/settings/hooks
   - Click on Vercel webhook
   - Check "Recent Deliveries"
   - Should show successful delivery

## Why This Matters

Vercel only triggers deployments when:
- ✅ The commit author email matches your Vercel account email
- ✅ The branch matches the production branch (or preview is enabled)
- ✅ The webhook is active and working

If the email doesn't match, Vercel will silently ignore the push.

## Alternative: Set Globally

If you want to set this email for all Git repositories:

```bash
git config --global user.email "YOUR_ACTUAL_VERCEL_EMAIL"
```

## Still Not Working?

After fixing the email:

1. Make a test commit and push
2. Check Vercel Dashboard for deployment
3. Check GitHub webhook deliveries
4. Verify branch matches Vercel production branch

See `QUICK_FIX_VERCEL_DEPLOYMENT.md` for complete troubleshooting guide.
