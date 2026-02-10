# Setup Guide

Complete guide to set up, develop, and publish Chronos Picker.

## Prerequisites

- Node.js 16.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm)
- Git

## Initial Setup

### 1. Clone and Install

```bash
cd chronos-picker
npm install
```

### 2. Development Workflow

#### Build the package

```bash
npm run build
```

This creates the distribution files in the `dist/` directory.

#### Run the demo

```bash
cd example
npm install
npm run dev
```

Open http://localhost:5173 to see the demo.

#### Lint the code

```bash
npm run lint
```

## Project Structure

```
chronos-picker/
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── DateTimePicker.tsx   # Main component
│   │   ├── Calendar.tsx         # Calendar view
│   │   ├── TimePicker.tsx       # Time selection
│   │   └── TimezoneSelector.tsx # Timezone dropdown
│   │
│   ├── utils/                    # Utility functions
│   │   ├── timezone.ts          # Timezone helpers
│   │   └── calendar.ts          # Calendar generation
│   │
│   ├── styles/                   # CSS styles
│   │   └── DateTimePicker.css   # Component styles
│   │
│   ├── types.ts                  # TypeScript types
│   └── index.ts                  # Main entry point
│
├── example/                      # Demo application
│   ├── src/
│   │   ├── App.tsx              # Demo examples
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Demo styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── docs/                         # Documentation
│   ├── API.md                   # API reference
│   ├── GETTING_STARTED.md       # Getting started guide
│   └── QUICK_START.md           # Quick start guide
│
├── dist/                         # Build output (generated)
│   ├── index.js                 # UMD bundle
│   ├── index.esm.js             # ES module bundle
│   ├── index.d.ts               # TypeScript definitions
│   └── style.css                # Bundled styles
│
├── package.json                  # Package metadata
├── tsconfig.json                 # TypeScript config
├── vite.config.ts               # Build configuration
├── .eslintrc.json               # ESLint config
├── README.md                     # Main documentation
├── LICENSE                       # MIT license
├── CHANGELOG.md                  # Version history
├── CONTRIBUTING.md               # Contributing guide
└── SETUP.md                      # This file
```

## Development

### Making Changes

1. **Edit source files** in `src/`
2. **Build** with `npm run build`
3. **Test in demo** by running the example app
4. **Verify** the changes work as expected

### Testing Workflow

1. Start the demo in one terminal:
```bash
cd example
npm run dev
```

2. Make changes to source code in `src/`

3. Rebuild the package:
```bash
npm run build
```

4. Refresh the browser to see changes

### Hot Reload (Recommended)

For faster development, you can link the package:

```bash
# In the root directory
npm link

# In the example directory
cd example
npm link @chronos/picker
```

Then use a file watcher to rebuild on changes:

```bash
npm run build -- --watch
```

## Building for Production

### Build the Package

```bash
npm run build
```

This creates:
- `dist/index.js` - UMD bundle
- `dist/index.esm.js` - ES module bundle
- `dist/index.d.ts` - TypeScript definitions
- `dist/style.css` - Bundled styles

### Build the Demo

```bash
cd example
npm run build
```

Demo will be built to `example/dist/`.

## Publishing

### Pre-publish Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with changes
- [ ] Run tests and ensure demo works
- [ ] Build the package (`npm run build`)
- [ ] Review files that will be published (`npm pack --dry-run`)

### Publish to npm

1. Login to npm:
```bash
npm login
```

2. Publish:
```bash
npm publish --access public
```

### Post-publish

- Create a git tag for the version
- Push to GitHub
- Create a GitHub release with changelog

## Troubleshooting

### Build Errors

**Problem**: TypeScript errors during build

**Solution**: 
```bash
# Check types without building
npx tsc --noEmit

# Fix any type errors in the source code
```

**Problem**: Vite build fails

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Demo Not Working

**Problem**: Changes not reflected in demo

**Solution**:
```bash
# Rebuild the package
npm run build

# Clear demo cache
cd example
rm -rf node_modules/.vite
npm run dev
```

**Problem**: Module not found errors

**Solution**:
```bash
cd example
npm install
```

### Import Errors in Projects

**Problem**: `Cannot find module '@chronos/picker'`

**Solution**: Ensure the package is properly installed:
```bash
npm install @chronos/picker luxon
```

**Problem**: CSS not loading

**Solution**: Import the CSS in your app:
```tsx
import '@chronos/picker/dist/style.css';
```

## Code Quality

### Linting

```bash
npm run lint
```

Fix auto-fixable issues:
```bash
npm run lint -- --fix
```

### TypeScript Checking

```bash
npx tsc --noEmit
```

## Documentation

### Update Documentation

When adding new features:

1. Update `README.md` with new examples
2. Update `docs/API.md` with new props/types
3. Update `docs/GETTING_STARTED.md` if workflow changes
4. Add entry to `CHANGELOG.md`

### Generate Documentation

Consider using tools like:
- [TypeDoc](https://typedoc.org/) for API docs
- [Storybook](https://storybook.js.org/) for component showcase

## Maintenance

### Dependencies

Update dependencies regularly:

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update to latest (use with caution)
npx npm-check-updates -u
npm install
```

### Security

Check for security vulnerabilities:

```bash
npm audit

# Fix automatically if possible
npm audit fix
```

## Getting Help

- Read the [full documentation](./README.md)
- Check [existing issues](https://github.com/yourusername/chronos-picker/issues)
- Open a [new issue](https://github.com/yourusername/chronos-picker/issues/new)
- Join [discussions](https://github.com/yourusername/chronos-picker/discussions)
