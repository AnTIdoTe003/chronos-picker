# 📋 Publishing Checklist

Use this checklist to ensure you don't miss any steps when publishing to npm.

## Pre-Publish Checklist

### Package Configuration
- [ ] Update `name` in package.json with your npm username
- [ ] Update `author` with your name and email
- [ ] Update `repository.url` with your GitHub repo
- [ ] Update `homepage` with your documentation URL
- [ ] Add `bugs.url` for issue tracking
- [ ] Verify `version` is correct (start with 1.0.0)
- [ ] Check `keywords` are relevant
- [ ] Verify `license` (MIT is set)

### Files and Content
- [ ] README.md is complete and accurate
- [ ] LICENSE file exists
- [ ] CHANGELOG.md has initial version entry
- [ ] All documentation is up to date
- [ ] Example code works
- [ ] All placeholder URLs are updated

### Build and Test
- [ ] `npm install` runs successfully
- [ ] `npm run build` creates dist folder
- [ ] `npm run lint` passes (or fix issues)
- [ ] Test the package locally with `npm link`
- [ ] Run `npm pack --dry-run` to verify contents
- [ ] TypeScript definitions (.d.ts files) are generated
- [ ] All required files are in dist/ folder

### Git and Version Control
- [ ] Git repository is initialized
- [ ] All files are committed
- [ ] Remote repository is added
- [ ] Code is pushed to GitHub
- [ ] Create git tag: `git tag v1.0.0`
- [ ] Push tag: `git push origin v1.0.0`

### npm Account
- [ ] npm account created at npmjs.com
- [ ] Email verified
- [ ] Two-factor authentication enabled (recommended)
- [ ] Logged in via `npm login`
- [ ] Verify with `npm whoami`

## Publishing

- [ ] Run `npm publish --access public`
- [ ] Verify on npmjs.com: https://npmjs.com/package/@YOUR-USERNAME/chronos-picker
- [ ] Test installation: `npm install @YOUR-USERNAME/chronos-picker`

## Post-Publish

### Verification
- [ ] Test the published package in a new project
- [ ] Verify all imports work correctly
- [ ] Check TypeScript types are working
- [ ] Test in both development and production builds

### Documentation
- [ ] Update website with correct package name
- [ ] Update installation instructions
- [ ] Update all example code with correct imports
- [ ] Add npm badge to README

### Repository
- [ ] Create GitHub release for v1.0.0
- [ ] Add release notes from CHANGELOG
- [ ] Update README badges with npm version
- [ ] Add topics/tags to GitHub repo

### Promotion
- [ ] Share on Twitter/X
- [ ] Post on Reddit (r/reactjs, r/javascript)
- [ ] Share on LinkedIn
- [ ] Post in relevant Discord servers
- [ ] Consider writing a blog post

## Future Updates Checklist

When releasing new versions:

- [ ] Update version: `npm version patch|minor|major`
- [ ] Update CHANGELOG.md with changes
- [ ] Build: `npm run build`
- [ ] Test changes thoroughly
- [ ] Commit and push
- [ ] Push tags: `git push --tags`
- [ ] Publish: `npm publish`
- [ ] Create GitHub release
- [ ] Update website documentation

---

## Quick Commands Reference

```bash
# Build
npm run build

# Test what will be published
npm pack --dry-run

# Login to npm
npm login

# Publish (for scoped packages)
npm publish --access public

# Check package info
npm view @YOUR-USERNAME/chronos-picker

# Version bump (for updates)
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0
```

## Package Name Options

If you want a shorter name:

- ✅ `@username/chronos-picker` (scoped, recommended)
- ✅ `@username/datetime-tz` (shorter)
- ✅ `@username/picker-tz` (shortest)
- ⚠️ `chronos-picker` (unscoped, check availability)

Check availability:
```bash
npm view @username/your-chosen-name
# If it shows "npm ERR! code E404", the name is available!
```

---

**Remember:** You can always unpublish within 72 hours if needed:
```bash
npm unpublish @username/package-name@1.0.0 --force
```

But it's better to test thoroughly before publishing! 🚀
