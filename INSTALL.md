# Installation & Quick Setup

## For Package Users

### 1. Install the package

```bash
npm install @chronos/picker luxon
```

Or with yarn:
```bash
yarn add @chronos/picker luxon
```

Or with pnpm:
```bash
pnpm add @chronos/picker luxon
```

### 2. Import and use

```tsx
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';

function App() {
  const [value, setValue] = useState<DateTimeValue | null>(null);
  
  return (
    <DateTimePicker
      value={value?.dateTime}
      onChange={setValue}
      timezone="Asia/Kolkata"
      placeholder="Select date and time"
    />
  );
}
```

### 3. TypeScript (if needed)

Type definitions are included. If you need Luxon types:

```bash
npm install --save-dev @types/luxon
```

---

## For Contributors/Developers

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd chronos-picker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the demo

```bash
cd example
npm install
npm run dev
```

Open http://localhost:5173

### 4. Build the package

```bash
npm run build
```

### 5. Make changes

- Edit files in `src/`
- Rebuild with `npm run build`
- Test in the demo app

---

## Verification

### Check if installed correctly

```bash
npm list @chronos/picker luxon
```

### Test import

Create a test file:

```tsx
// test.tsx
import { DateTimePicker } from '@chronos/picker';
console.log('Import successful!');
```

---

## Troubleshooting

### Module not found

**Error**: `Cannot find module '@chronos/picker'`

**Fix**:
```bash
npm install @chronos/picker luxon
```

### TypeScript errors

**Error**: Type errors about Luxon

**Fix**:
```bash
npm install --save-dev @types/luxon
```

### Styles not loading

**Error**: Component renders but has no styles

**Fix**: Ensure you're importing the CSS (Vite does this automatically, but for other bundlers):
```tsx
import '@chronos/picker/dist/style.css';
```

### Peer dependency warnings

**Warning**: `ERESOLVE unable to resolve dependency tree`

**Fix**: Ensure React 18+ is installed:
```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

---

## Requirements

- Node.js >= 16.0.0
- React >= 18.0.0
- React DOM >= 18.0.0

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Next Steps

- Read the [Quick Start Guide](./docs/QUICK_START.md)
- Check out [Getting Started](./docs/GETTING_STARTED.md)
- View [API Reference](./docs/API.md)
- See the [Demo Examples](./example/README.md)
