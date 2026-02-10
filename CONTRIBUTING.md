# Contributing to Chronos Picker

Thank you for considering contributing to Chronos Picker! This document outlines the process for contributing to the project.

## Development Setup

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/chronos-picker.git
cd chronos-picker
```

3. Install dependencies:
```bash
npm install
```

4. Start the demo in development mode:
```bash
cd example
npm install
npm run dev
```

## Project Structure

```
chronos-picker/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── styles/            # CSS styles
│   ├── utils/             # Utility functions
│   ├── types.ts           # TypeScript types
│   └── index.ts           # Main entry point
├── example/               # Demo application
├── docs/                  # Documentation
└── dist/                  # Build output (generated)
```

## Making Changes

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Test your changes in the demo app
4. Lint your code:
```bash
npm run lint
```

5. Build the package:
```bash
npm run build
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add support for custom date formats
fix: timezone conversion bug in Safari
docs: update API reference
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the CHANGELOG.md with your changes
3. Ensure all tests pass and the demo works correctly
4. Submit your pull request with a clear description of changes

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Add comments for complex logic
- Keep functions small and focused
- Write meaningful variable names

## Testing

Before submitting a PR, test your changes:

1. Run the demo app and verify all examples work
2. Test across different browsers (Chrome, Firefox, Safari)
3. Test keyboard navigation
4. Test with screen readers if possible

## Questions?

Feel free to open an issue for any questions or discussions!
