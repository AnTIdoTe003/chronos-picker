# Chronos Picker Website

Beautiful documentation website for Chronos Picker - A modern, accessible date & time picker for React.

## 🚀 Running Locally

### Prerequisites
- Node.js 16.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to [http://localhost:5173](http://localhost:5173)

## 📦 Building for Production

Build the website for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The built files will be in the `dist` directory.

## 🎨 Website Structure

```
website/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx        # Main navigation bar
│   │   ├── Footer.tsx            # Site footer
│   │   └── CodeBlock.tsx         # Syntax-highlighted code blocks
│   │
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── Documentation.tsx     # Full documentation
│   │   ├── Examples.tsx          # Usage examples
│   │   └── Playground.tsx        # Interactive playground
│   │
│   ├── styles/
│   │   └── global.css            # Global styles and variables
│   │
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # Entry point
│
├── index.html                     # HTML template
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 📄 Pages

### Home (`/`)
- Hero section with live demo
- Feature highlights
- Quick start guide
- Call-to-action sections

### Documentation (`/docs`)
- Installation instructions
- Complete API reference
- Props documentation
- Types and interfaces
- Utility functions
- Accessibility guide
- Styling guide

### Examples (`/examples`)
- Basic usage
- Date-only picker
- Timezone selector
- Date range restrictions
- Custom formatting
- Multi-timezone display
- Form integration examples

### Playground (`/playground`)
- Interactive configuration panel
- Live preview
- Real-time code generation
- Copy-to-clipboard functionality

## 🎨 Features

- **Modern Design** - Beautiful gradient-based UI with smooth animations
- **Responsive** - Works perfectly on mobile, tablet, and desktop
- **Dark Mode** - Automatic dark mode support based on system preferences
- **Fast** - Built with Vite for lightning-fast development and builds
- **Type-Safe** - Full TypeScript support
- **Accessible** - WCAG 2.1 compliant with keyboard navigation
- **SEO-Friendly** - Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Luxon** - Date/time handling
- **CSS3** - Modern styling with custom properties

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... more colors */
}
```

### Fonts
Update the Google Fonts import in `index.html` and font variables in `global.css`:

```css
:root {
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The website can be deployed to any static hosting service:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 🔗 Links

- [Main Package Documentation](../README.md)
- [GitHub Repository](https://github.com/yourusername/chronos-picker)
- [npm Package](https://www.npmjs.com/package/@theengineerguy/chronos-picker)

## 📄 License

MIT © [Your Name]

---

Built with ❤️ for the React community
