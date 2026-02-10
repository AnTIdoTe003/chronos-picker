# Quick Publish Guide - TL;DR

Fast track guide to publish Chronos Picker to npm.

## Prerequisites

```bash
# 1. Create npm account at https://www.npmjs.com/signup
# 2. Verify your email
```

## Publish in 5 Minutes

### Step 1: Update package.json

```bash
# Open package.json and update:
```

```json
{
  "name": "@YOUR-NPM-USERNAME/chronos-picker",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR-USERNAME/chronos-picker"
  }
}
```

### Step 2: Build

```bash
cd /Users/debmalyabiswas/Desktop/chronos-picker
npm install
npm run build
```

### Step 3: Test (Optional)

```bash
npm pack --dry-run
```

### Step 4: Login to npm

```bash
npm login
# Enter username, password, email, and 2FA code if enabled
```

### Step 5: Publish

```bash
npm publish --access public
```

### Step 6: Verify

```bash
npm view @YOUR-USERNAME/chronos-picker
```

Visit: https://www.npmjs.com/package/@YOUR-USERNAME/chronos-picker

## Done! 🎉

Your package is now live on npm!

## Install Your Published Package

```bash
npm install @YOUR-USERNAME/chronos-picker luxon
```

## Update Later

```bash
# Make changes
npm version patch  # or minor/major
npm run build
npm publish
```

---

For detailed guide, see [PUBLISHING_GUIDE.md](./PUBLISHING_GUIDE.md)
