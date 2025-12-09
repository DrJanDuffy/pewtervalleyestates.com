#!/usr/bin/env node
/**
 * Vercel Deployment Setup Checker
 * Verifies configuration for Git-based deployments
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🔍 Vercel Deployment Configuration Check\n');
console.log('=' .repeat(50));

// Check vercel.json
console.log('\n1. Checking vercel.json...');
try {
  const vercelJson = JSON.parse(readFileSync(join(projectRoot, 'vercel.json'), 'utf8'));
  
  const issues = [];
  const good = [];
  
  // Check framework
  if (vercelJson.framework === 'sveltekit') {
    good.push('✅ Framework is set to "sveltekit"');
  } else {
    issues.push('❌ Framework should be "sveltekit"');
  }
  
  // Check for outputDirectory (should NOT exist)
  if (vercelJson.outputDirectory) {
    issues.push(`❌ outputDirectory should be removed (found: ${vercelJson.outputDirectory})`);
  } else {
    good.push('✅ No outputDirectory (correct - adapter handles this)');
  }
  
  // Check package manager
  if (vercelJson.installCommand) {
    if (vercelJson.installCommand.includes('pnpm')) {
      good.push('✅ Install command uses pnpm');
    } else if (vercelJson.installCommand.includes('npm')) {
      issues.push('⚠️  Install command uses npm (project uses pnpm)');
    }
  } else {
    good.push('✅ No installCommand (will auto-detect pnpm from pnpm-lock.yaml)');
  }
  
  if (vercelJson.buildCommand) {
    if (vercelJson.buildCommand.includes('pnpm')) {
      good.push('✅ Build command uses pnpm');
    } else if (vercelJson.buildCommand.includes('npm')) {
      issues.push('⚠️  Build command uses npm (project uses pnpm)');
    }
  } else {
    good.push('✅ No buildCommand (will auto-detect)');
  }
  
  // Check for git.deploymentEnabled (should NOT be in vercel.json)
  if (vercelJson.git?.deploymentEnabled) {
    issues.push('⚠️  git.deploymentEnabled should be configured in Vercel Dashboard, not vercel.json');
  } else {
    good.push('✅ No git.deploymentEnabled in config (correct - managed in dashboard)');
  }
  
  // Check headers
  if (vercelJson.headers && vercelJson.headers.length > 0) {
    good.push('✅ Security headers configured');
  }
  
  good.forEach(msg => console.log(msg));
  issues.forEach(msg => console.log(msg));
  
} catch (error) {
  console.log('❌ Error reading vercel.json:', error.message);
}

// Check package.json
console.log('\n2. Checking package.json...');
try {
  const packageJson = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'));
  
  // Check build script
  if (packageJson.scripts?.build === 'vite build') {
    console.log('✅ Build script is correct (vite build)');
  } else {
    console.log('⚠️  Build script should be "vite build"');
  }
  
  // Check adapter
  const hasVercelAdapter = packageJson.devDependencies?.['@sveltejs/adapter-vercel'];
  if (hasVercelAdapter) {
    console.log(`✅ Vercel adapter installed (v${hasVercelAdapter})`);
  } else {
    console.log('❌ @sveltejs/adapter-vercel not found in devDependencies');
  }
  
  // Check package manager lock file
  const hasPnpmLock = existsSync(join(projectRoot, 'pnpm-lock.yaml'));
  const hasNpmLock = existsSync(join(projectRoot, 'package-lock.json'));
  const hasYarnLock = existsSync(join(projectRoot, 'yarn.lock'));
  
  if (hasPnpmLock) {
    console.log('✅ pnpm-lock.yaml found (project uses pnpm)');
  } else if (hasNpmLock) {
    console.log('⚠️  package-lock.json found (project uses npm)');
  } else if (hasYarnLock) {
    console.log('⚠️  yarn.lock found (project uses yarn)');
  } else {
    console.log('⚠️  No lock file found');
  }
  
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
}

// Check svelte.config.js
console.log('\n3. Checking svelte.config.js...');
try {
  const svelteConfig = readFileSync(join(projectRoot, 'svelte.config.js'), 'utf8');
  
  if (svelteConfig.includes('@sveltejs/adapter-vercel')) {
    console.log('✅ SvelteKit adapter configured for Vercel');
  } else {
    console.log('❌ Vercel adapter not found in svelte.config.js');
  }
  
  if (svelteConfig.includes('adapter-vercel')) {
    console.log('✅ Using adapter-vercel');
  }
  
} catch (error) {
  console.log('❌ Error reading svelte.config.js:', error.message);
}

// Check .gitignore
console.log('\n4. Checking .gitignore...');
try {
  const gitignore = readFileSync(join(projectRoot, '.gitignore'), 'utf8');
  
  if (gitignore.includes('.vercel')) {
    console.log('✅ .vercel is in .gitignore (correct)');
  } else {
    console.log('⚠️  .vercel should be in .gitignore');
  }
  
} catch (error) {
  console.log('⚠️  Could not read .gitignore');
}

console.log('\n' + '='.repeat(50));
console.log('\n📋 Next Steps:');
console.log('1. Verify Git repository is connected in Vercel Dashboard');
console.log('2. Check webhook is installed in GitHub/GitLab repository');
console.log('3. Verify production branch matches your current branch');
console.log('4. Test deployment by pushing a commit');
console.log('\nFor more details, see: VERCEL_DEPLOYMENT_ISSUES.md\n');
