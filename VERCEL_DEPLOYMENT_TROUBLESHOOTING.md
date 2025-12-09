# Vercel Deployment Troubleshooting - Git Push Not Triggering

## 🚨 Issue: Git Push Not Triggering Vercel Deployment

This guide will help you systematically diagnose and fix why `git push` isn't triggering deployments.

---

## ✅ Quick Diagnostic Steps

### Step 1: Check Your Current Branch
```bash
git branch --show-current
```
**Action Required:**
- Note your current branch name (e.g., `main`, `master`, `claude/google-search-console-2025-01A9Fttc8TgxGQqFUZ9GpN2z`)
- This branch name must match what Vercel is watching

### Step 2: Check Git Remote
```bash
git remote -v
```
**Action Required:**
- Verify remote URL points to your GitHub/GitLab repository
- Should look like: `https://github.com/DrJanDuffy/pewtervalleyestates.com.git`

### Step 3: Check Git Commit Email
```bash
git config user.email
```
**CRITICAL:** This email MUST match your Vercel account email!
- If it doesn't match, Vercel won't trigger deployments
- Set it with: `git config user.email "your-vercel-email@example.com"`

---

## 🔧 Vercel Dashboard Checks

### 1. **Git Integration** (CRITICAL)

**Go to:** https://vercel.com/dashboard → Your Project → Settings → Git

**Verify:**
- ✅ **Repository Connected**: Should show your GitHub/GitLab URL
- ✅ **Production Branch**: Must match your default branch (usually `main`)
- ✅ **Webhook Status**: Should show "Active" with green checkmark
- ✅ **Ignored Build Step**: Should be empty

**If repository is NOT connected:**
1. Click "Connect Git Repository"
2. Select your repository: `DrJanDuffy/pewtervalleyestates.com`
3. Choose production branch (usually `main`)
4. This will automatically install the webhook

**If repository IS connected but webhook is inactive:**
1. Click "Disconnect" (don't worry, you'll reconnect)
2. Wait 10 seconds
3. Click "Connect Git Repository" again
4. Select same repository and branch
5. This will reinstall the webhook

---

### 2. **Build Settings**

**Go to:** Settings → General

**Verify:**
- ✅ **Framework Preset**: Should be "SvelteKit"
- ✅ **Build Command**: Should be EMPTY (let auto-detect) OR `pnpm run build`
- ✅ **Output Directory**: Should be EMPTY (SvelteKit adapter handles this)
- ✅ **Install Command**: Should be EMPTY OR `pnpm install`
- ✅ **Root Directory**: Should be EMPTY (unless project is in subfolder)

**If Build Command or Output Directory are filled:**
- Clear them to let Vercel auto-detect from `vercel.json` and SvelteKit adapter
- Save settings

---

### 3. **Branch Configuration**

**Go to:** Settings → Git → Production Branch

**Verify:**
- Production branch matches your default branch exactly (case-sensitive)
- If you're pushing to `main` but Vercel is watching `master` (or vice versa), deployments won't trigger

**For Preview Branches:**
- Should include all branches you want preview deployments for
- Or set to "*" for all branches

---

## 🔗 GitHub/GitLab Webhook Verification

### Check Webhook Status

**For GitHub:**
1. Go to: `https://github.com/DrJanDuffy/pewtervalleyestates.com/settings/hooks`
2. Look for Vercel webhook
3. URL should be: `https://api.vercel.com/v1/integrations/deploy/*`
4. Check "Recent Deliveries" tab
5. Should show recent push events

**For GitLab:**
1. Go to: Repository → Settings → Webhooks
2. Look for Vercel webhook
3. Check recent deliveries

**If webhook is missing:**
- Git integration isn't set up
- Go back to Vercel Dashboard → Settings → Git
- Disconnect and reconnect repository

**If webhook shows failures:**
- Check delivery logs for error messages
- Common issues: authentication, permissions, branch mismatch

---

## 🐛 Common Issues & Fixes

### Issue 1: Commit Email Mismatch

**Symptom:** Pushes don't trigger deployments

**Fix:**
```bash
# Check current email
git config user.email

# If wrong, set correct email (must match Vercel account)
git config user.email "your-vercel-email@example.com"

# Set globally (for all repos)
git config --global user.email "your-vercel-email@example.com"

# For existing commit, amend it
git commit --amend --author="Your Name <your-email@example.com>"
git push --force-with-lease
```

---

### Issue 2: Wrong Branch Name

**Symptom:** Only specific branches trigger deployments

**Fix:**
1. Check current branch: `git branch --show-current`
2. Go to Vercel Dashboard → Settings → Git
3. Update "Production Branch" to match
4. If you're on a feature branch, check "Preview Branches" settings

---

### Issue 3: Repository Not Connected

**Symptom:** No deployments ever triggered

**Fix:**
1. Vercel Dashboard → Settings → Git
2. Click "Connect Git Repository"
3. Authenticate with GitHub/GitLab if needed
4. Select repository and branch
5. Webhook will be installed automatically

---

### Issue 4: Webhook Delivery Failures

**Symptom:** Webhook exists but shows failures in GitHub/GitLab

**Fix:**
1. Check webhook delivery logs for error messages
2. Common causes:
   - Authentication expired: Reconnect repository in Vercel
   - Repository permissions changed: Re-authenticate
   - Branch doesn't exist: Verify branch name
3. Try "Redeliver" for failed events

---

### Issue 5: Build Settings Override

**Symptom:** Build fails or uses wrong settings

**Fix:**
1. Clear all build settings in Vercel Dashboard → Settings → General
2. Let Vercel auto-detect from:
   - `vercel.json` (already configured)
   - `svelte.config.js` (Vercel adapter)
   - `package.json` (build scripts)
   - `pnpm-lock.yaml` (package manager detection)

---

## 🧪 Testing & Verification

### Test 1: Manual Deployment (Verify Build Works)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project (if not already linked)
vercel link

# Deploy to production
vercel --prod
```

**If this works:** Build configuration is correct, issue is with Git integration.

**If this fails:** Check build logs in Vercel Dashboard for errors.

---

### Test 2: Create Test Commit

```bash
# Make a small change
echo "# Test" >> test-deploy.md

# Commit with correct email
git add test-deploy.md
git commit -m "Test: Verify Vercel deployment trigger"

# Push
git push
```

**Expected Result:**
- Deployment should appear in Vercel Dashboard within 30 seconds
- Check Vercel Dashboard → Deployments tab

**If deployment doesn't appear:**
- Check webhook deliveries in GitHub/GitLab
- Verify commit email matches Vercel account
- Check Vercel Dashboard → Settings → Git for errors

---

### Test 3: Verify Webhook Delivery

1. Make a small commit and push
2. Immediately go to GitHub/GitLab → Settings → Webhooks
3. Click on Vercel webhook
4. Check "Recent Deliveries"
5. Should show a new delivery within seconds
6. Click on delivery to see request/response

**If no delivery appears:**
- Webhook is not installed or inactive
- Reconnect repository in Vercel Dashboard

**If delivery shows error:**
- Check response body for error message
- Common: 401 (auth), 404 (project not found), 400 (bad request)

---

## 📋 Complete Checklist

Use this checklist to verify everything:

### Code Configuration
- [ ] `vercel.json` exists and is valid
- [ ] `svelte.config.js` uses `@sveltejs/adapter-vercel`
- [ ] `package.json` has build script
- [ ] `pnpm-lock.yaml` exists (or npm equivalent)

### Git Configuration
- [ ] Git remote is configured: `git remote -v`
- [ ] Current branch name is known: `git branch --show-current`
- [ ] Git email matches Vercel account: `git config user.email`

### Vercel Dashboard
- [ ] Repository is connected (Settings → Git)
- [ ] Production branch matches your branch name
- [ ] Webhook status is "Active"
- [ ] Framework preset is "SvelteKit"
- [ ] Build command is empty (or correct)
- [ ] Output directory is empty

### GitHub/GitLab
- [ ] Vercel webhook exists (Settings → Webhooks)
- [ ] Webhook URL is correct: `https://api.vercel.com/v1/integrations/deploy/*`
- [ ] Recent deliveries show successful requests
- [ ] Repository permissions allow Vercel access

### Testing
- [ ] Manual deployment works: `vercel --prod`
- [ ] Test commit triggers deployment
- [ ] Webhook delivery appears in GitHub/GitLab

---

## 🆘 Still Not Working?

If you've checked everything above and it's still not working:

1. **Check Vercel Status**: https://www.vercel-status.com
2. **Check Vercel Logs**: Dashboard → Deployments → View Build Logs
3. **Contact Support**: Include:
   - Your project URL
   - Branch name
   - Webhook delivery logs
   - Build logs (if any deployments exist)

---

## 📝 Quick Reference

```bash
# Check branch
git branch --show-current

# Check remote
git remote -v

# Check git email (MUST match Vercel account)
git config user.email

# Set git email
git config user.email "your-email@example.com"

# Install Vercel CLI
npm i -g vercel

# Manual deployment
vercel --prod
```

---

**Last Updated:** January 2025
**Project:** pewtervalleyestates.com
