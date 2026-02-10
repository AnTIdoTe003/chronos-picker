# Publishing Chronos Picker to npm

Complete guide to publish your package to npm registry.

## Prerequisites

### 1. Create an npm Account
If you don't have one already:
- Go to https://www.npmjs.com/signup
- Create an account
- Verify your email address

### 2. Enable 2FA (Recommended)
- Go to https://www.npmjs.com/settings/YOUR_USERNAME/twofa
- Enable two-factor authentication for better security

## Pre-Publishing Checklist

### ✅ Step 1: Update Package Information

Edit `package.json` with your details:

```json
{
  "name": "@your-npm-username/chronos-picker",
  "version": "1.0.0",
  "description": "A modern, accessible date & time picker with comprehensive timezone support",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/chronos-picker"
  },
  "homepage": "https://chronos-picker.your-domain.com",
  "bugs": {
    "url": "https://github.com/yourusername/chronos-picker/issues"
  }
}
```

**Important:** 
- If publishing as a scoped package (`@username/package`), it's free for public packages
- If publishing as an unscoped package (`chronos-picker`), check if the name is available

### ✅ Step 2: Check Package Name Availability

```bash
npm search chronos-picker
# or
npm view @your-username/chronos-picker
```

If the name is taken, choose a different name.

### ✅ Step 3: Build the Package

```bash
# From the project root
npm install
npm run build
```

Verify the `dist/` folder contains:
- `index.js` (UMD bundle)
- `index.esm.js` (ES module)
- `index.d.ts` (TypeScript definitions)
- `style.css` (if generated)

### ✅ Step 4: Test the Build

Check what will be published:

```bash
npm pack --dry-run
```

This shows you exactly what files will be included in the package.

### ✅ Step 5: Test Locally (Optional but Recommended)

Create a test project and link your package:

```bash
# In your package directory
npm link

# In a test project
npm link @your-username/chronos-picker
```

Or test the packed tarball:

```bash
npm pack
# This creates chronos-picker-1.0.0.tgz

# In a test project
npm install /path/to/chronos-picker-1.0.0.tgz
```

### ✅ Step 6: Update README and Documentation

Ensure your README.md includes:
- Installation instructions
- Quick start example
- Link to documentation
- License information
- GitHub repository link

### ✅ Step 7: Create Git Repository (if not done)

```bash
git init
git add .
git commit -m "Initial commit: v1.0.0"
git branch -M main
git remote add origin https://github.com/yourusername/chronos-picker.git
git push -u origin main
```

### ✅ Step 8: Create a Git Tag

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Publishing to npm

### Step 1: Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- 2FA code (if enabled)

Verify you're logged in:

```bash
npm whoami
```

### Step 2: Publish the Package

#### For Scoped Package (Recommended for First Time)

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages (@username/package) to be publicly available.

#### For Unscoped Package

```bash
npm publish
```

### Step 3: Verify Publication

Check your package on npm:
```bash
npm view @your-username/chronos-picker
```

Or visit: https://www.npmjs.com/package/@your-username/chronos-picker

## Post-Publishing

### 1. Test Installation

In a new directory:

```bash
npm install @your-username/chronos-picker luxon
```

Create a test file and verify it works:

```tsx
import { DateTimePicker } from '@your-username/chronos-picker';

console.log('Package imported successfully!');
```

### 2. Create GitHub Release

1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Add release notes from `CHANGELOG.md`
6. Publish release

### 3. Update Website

Update your documentation website with:
- Correct installation instructions
- Working npm package name
- GitHub repository links

### 4. Share Your Package

- Tweet about it
- Post on Reddit (r/reactjs)
- Share on LinkedIn
- Add to awesome-react lists
- Write a blog post

## Updating the Package (Future Versions)

### Semantic Versioning

Follow semver (https://semver.org/):
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

### Update Process

1. **Make your changes**

2. **Update version**:
   ```bash
   npm version patch  # for 1.0.0 → 1.0.1
   npm version minor  # for 1.0.0 → 1.1.0
   npm version major  # for 1.0.0 → 2.0.0
   ```

3. **Update CHANGELOG.md**:
   ```markdown
   ## [1.0.1] - 2024-01-20
   ### Fixed
   - Fixed timezone conversion bug
   - Improved accessibility labels
   ```

4. **Build and test**:
   ```bash
   npm run build
   npm pack --dry-run
   ```

5. **Commit and tag**:
   ```bash
   git add .
   git commit -m "chore: release v1.0.1"
   git push
   git push --tags
   ```

6. **Publish**:
   ```bash
   npm publish
   ```

## Common Issues and Solutions

### Issue: "You do not have permission to publish"

**Solution:** The package name is already taken. Change the package name in `package.json`.

### Issue: "Package name too similar to existing package"

**Solution:** Choose a more distinctive name or use a scoped package (@username/package).

### Issue: "No README data"

**Solution:** Ensure you have a `README.md` file in the root directory.

### Issue: "Failed to publish - 402 Payment Required"

**Solution:** If using a scoped package, add `--access public` flag.

### Issue: Build files not included

**Solution:** Check your `.npmignore` and ensure it doesn't exclude the `dist/` folder.

### Issue: TypeScript definitions not working

**Solution:** Ensure `types` field in `package.json` points to the correct `.d.ts` file:
```json
{
  "types": "dist/index.d.ts"
}
```

## Package Name Suggestions

If `@your-username/chronos-picker` is too long, consider:
- `@username/datetime-picker-tz`
- `@username/react-datetime-tz`
- `@username/picker-chronos`
- Or use an unscoped name if available

## Security Best Practices

1. **Enable 2FA** on your npm account
2. **Review package contents** before publishing (`npm pack --dry-run`)
3. **Don't include sensitive files** (check `.npmignore`)
4. **Keep dependencies updated** (`npm audit`)
5. **Use exact versions** for peer dependencies

## Monitoring Your Package

### npm Stats
- View downloads: https://npmjs.com/package/@your-username/chronos-picker
- npm trends: https://npmtrends.com/@your-username/chronos-picker

### GitHub
- Star count
- Issues and discussions
- Pull requests

### Set up CI/CD (Optional)

Create `.github/workflows/publish.yml` for automatic publishing:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Quick Reference Commands

```bash
# Check what will be published
npm pack --dry-run

# Build the package
npm run build

# Test locally
npm link

# Login to npm
npm login

# Publish (scoped)
npm publish --access public

# Publish (unscoped)
npm publish

# Update version
npm version patch|minor|major

# View package info
npm view @your-username/chronos-picker

# Check download stats
npm info @your-username/chronos-picker
```

## Support

If you encounter issues:
1. Check npm documentation: https://docs.npmjs.com/
2. npm support: https://npmjs.com/support
3. GitHub issues for package-specific problems

---

**Good luck with your npm package! 🚀**

Remember: Take your time, test thoroughly, and don't hesitate to start with a scoped package for your first publish.
