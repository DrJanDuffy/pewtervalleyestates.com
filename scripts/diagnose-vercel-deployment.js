#!/usr/bin/env node
/**
 * Vercel Deployment Diagnostic Script
 * Checks common issues preventing git push from triggering deployments
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🔍 Vercel Deployment Diagnostic\n');
console.log('=' .repeat(60));

// 1. Check current branch
console.log('\n1️⃣  Checking Git Branch...');
try {
  const branch = execSync('git branch --show-current', { 
    encoding: 'utf-8', 
    cwd: projectRoot,
    stdio: 'pipe'
  }).trim();
  console.log(`   ✅ Current branch: ${branch || '(not detected)'}`);
} catch (error) {
  console.log('   ❌ Could not determine branch');
}

// 2. Check git remote
console.log('\n2️⃣  Checking Git Remote...');
try {
  const remote = execSync('git remote -v', { 
    encoding: 'utf-8', 
    cwd: projectRoot,
    stdio: 'pipe'
  }).trim();
  if (remote) {
    console.log(`   ✅ Remote configured:`);
    remote.split('\n').forEach(line => {
      console.log(`      ${line}`);
    });
  } else {
    console.log('   ❌ No remote configured');
  }
} catch (error) {
  console.log('   ❌ Could not check remote');
}

// 3. Check git user email
console.log('\n3️⃣  Checking Git Commit Author...');
try {
  const email = execSync('git config user.email', { 
    encoding: 'utf-8', 
    cwd: projectRoot,
    stdio: 'pipe'
  }).trim();
  const name = execSync('git config user.name', { 
    encoding: 'utf-8', 
    cwd: projectRoot,
    stdio: 'pipe'
  }).trim();
  console.log(`   ✅ Git user: ${name || '(not set)'}`);
  console.log(`   ✅ Git email: ${email || '(not set)'}`);
  console.log(`   ⚠️  Make sure this email matches your Vercel account email!`);
} catch (error) {
  console.log('   ❌ Could not check git user config');
}

// 4. Check recent commits
console.log('\n4️⃣  Checking Recent Commits...');
try {
  const commits = execSync('git log --oneline -5 --pretty=format:"%h - %an <%ae> - %s"', { 
    encoding: 'utf-8', 
    cwd: projectRoot,
    stdio: 'pipe'
  }).trim();
  if (commits) {
    console.log(`   ✅ Recent commits:`);
    commits.split('\n').slice(0, 3).forEach(line => {
      console.log(`      ${line}`);
    });
  }
} catch (error) {
  console.log('   ❌ Could not check commits');
}

// 5. Check vercel.json
console.log('\n5️⃣  Checking vercel.json...');
try {
  const vercelConfig = JSON.parse(readFileSync(join(projectRoot, 'vercel.json'), 'utf-8'));
  console.log(`   ✅ vercel.json exists`);
  console.log(`   ✅ Framework: ${vercelConfig.framework || '(not set)'}`);
  if (vercelConfig.buildCommand) {
    console.log(`   ⚠️  Build command is set: ${vercelConfig.buildCommand}`);
    console.log(`      Consider removing it to let Vercel auto-detect`);
  }
  if (vercelConfig.outputDirectory) {
    console.log(`   ⚠️  Output directory is set: ${vercelConfig.outputDirectory}`);
    console.log(`      Consider removing it for SvelteKit (adapter handles this)`);
  }
} catch (error) {
  console.log('   ❌ vercel.json not found or invalid');
}

// 6. Check svelte.config.js
console.log('\n6️⃣  Checking SvelteKit Configuration...');
try {
  const svelteConfig = readFileSync(join(projectRoot, 'svelte.config.js'), 'utf-8');
  if (svelteConfig.includes('@sveltejs/adapter-vercel')) {
    console.log('   ✅ Vercel adapter is configured');
  } else {
    console.log('   ❌ Vercel adapter not found in svelte.config.js');
  }
} catch (error) {
  console.log('   ❌ Could not check svelte.config.js');
}

// 7. Check package.json
console.log('\n7️⃣  Checking Package Configuration...');
try {
  const packageJson = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf-8'));
  if (packageJson.scripts?.build) {
    console.log(`   ✅ Build script: ${packageJson.scripts.build}`);
  }
  if (packageJson.dependencies?.['@sveltejs/adapter-vercel'] || 
      packageJson.devDependencies?.['@sveltejs/adapter-vercel']) {
    console.log('   ✅ @sveltejs/adapter-vercel is installed');
  }
  if (packageJson.sideEffects) {
    console.log(`   ✅ Side effects configured: ${JSON.stringify(packageJson.sideEffects)}`);
  }
} catch (error) {
  console.log('   ❌ Could not check package.json');
}

console.log('\n' + '='.repeat(60));
console.log('\n📋 ACTION ITEMS:\n');
console.log('1. ✅ Check Vercel Dashboard → Settings → Git:');
console.log('   - Verify repository is connected');
console.log('   - Check production branch matches your current branch');
console.log('   - Verify webhook status is active');
console.log('\n2. ✅ Check GitHub/GitLab → Settings → Webhooks:');
console.log('   - Look for Vercel webhook');
console.log('   - Check recent deliveries for your pushes');
console.log('\n3. ✅ Verify Git commit email matches Vercel account:');
console.log('   - Git email shown above must match Vercel account');
console.log('   - If not, run: git config user.email "your-vercel-email@example.com"');
console.log('\n4. ✅ Check Vercel Dashboard → Settings → General:');
console.log('   - Framework Preset should be "SvelteKit"');
console.log('   - Build Command should be empty (or match package.json)');
console.log('   - Output Directory should be empty');
console.log('\n5. ✅ If all above are correct, try manual deployment:');
console.log('   - Install Vercel CLI: npm i -g vercel');
console.log('   - Run: vercel --prod');
console.log('\n');
