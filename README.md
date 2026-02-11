# 🕐 Chronos Picker

A modern, accessible, and fully-featured date & time picker for React with comprehensive timezone support.

[![npm version](https://img.shields.io/npm/v/@chronos/picker.svg)](https://www.npmjs.com/package/@chronos/picker)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌍 **Full Timezone Support** - IANA timezone database with automatic DST handling
- ♿ **Accessible** - WCAG 2.1 compliant with full keyboard navigation
- 🎨 **Modern UI** - Beautiful design with smooth animations
- 📱 **Responsive** - Works seamlessly on desktop and mobile
- 🌙 **Dark Mode** - Automatic dark mode support
- 📦 **Lightweight** - Minimal dependencies (only Luxon for date handling)
- 🎯 **Type-Safe** - Full TypeScript support
- ⚡ **Performance** - Optimized rendering with React best practices

## 📦 Installation

```bash
npm install @chronos/picker luxon
```

Or with yarn:

```bash
yarn add @chronos/picker luxon
```

## 🚀 Quick Start

```tsx
import React, { useState } from 'react';
import { DateTimePicker, DateTimeValue } from '@chronos/picker';

function App() {
  const [value, setValue] = useState<DateTimeValue | null>(null);

  const handleChange = (newValue: DateTimeValue) => {
    setValue(newValue);
    console.log('ISO:', newValue.iso);
    console.log('Formatted:', newValue.formatted);
    console.log('Timestamp:', newValue.timestamp);
  };

  return (
    <DateTimePicker
      value={value?.dateTime}
      onChange={handleChange}
      timezone="Asia/Kolkata"
      placeholder="Select date and time"
    />
  );
}
```

## 📖 API Reference

### DateTimePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| string \| DateTime` | `undefined` | Current selected value |
| `onChange` | `(value: DateTimeValue) => void` | `undefined` | Callback when value changes |
| `timezone` | `string` | `"Asia/Kolkata"` | IANA timezone identifier |
| `dateFormat` | `string` | `"DD"` | Date format (Luxon tokens) |
| `timeFormat` | `string` | `"HH:mm"` | Time format (Luxon tokens) |
| `minDate` | `Date \| string` | `undefined` | Minimum selectable date |
| `maxDate` | `Date \| string` | `undefined` | Maximum selectable date |
| `placeholder` | `string` | `"Select date and time"` | Input placeholder text |
| `disabled` | `boolean` | `false` | Disable the picker |
| `showTime` | `boolean` | `true` | Show time picker |
| `use24Hour` | `boolean` | `true` | Use 24-hour format |
| `className` | `string` | `""` | Custom CSS class |
| `ariaLabel` | `string` | `"Date and time picker"` | ARIA label for accessibility |
| `showTimezoneSelector` | `boolean` | `false` | Show timezone selector |

### DateTimeValue Type

```typescript
interface DateTimeValue {
  iso: string;              // ISO 8601 string
  formatted: string;        // Formatted display string
  timestamp: number;        // Unix timestamp (ms)
  dateTime: DateTime;       // Luxon DateTime object
}
```

## 🎯 Usage Examples

### Basic Usage with Default Timezone (IST)

```tsx
import { DateTimePicker } from '@chronos/picker';

function BasicExample() {
  return (
    <DateTimePicker
      onChange={(value) => console.log(value.iso)}
      placeholder="Pick a date and time"
    />
  );
}
```

### With Custom Timezone

```tsx
<DateTimePicker
  timezone="America/New_York"
  onChange={(value) => {
    console.log('Selected time in New York:', value.formatted);
  }}
/>
```

### With Timezone Selector

```tsx
<DateTimePicker
  showTimezoneSelector
  timezone="UTC"
  onChange={(value) => {
    console.log('Timezone:', value.dateTime.zoneName);
    console.log('Offset:', value.dateTime.offset);
  }}
/>
```

### Date Only (No Time)

```tsx
<DateTimePicker
  showTime={false}
  dateFormat="MMMM d, yyyy"
  onChange={(value) => console.log(value.formatted)}
/>
```

### 12-Hour Time Format

```tsx
<DateTimePicker
  use24Hour={false}
  timeFormat="hh:mm a"
  onChange={(value) => console.log(value.formatted)}
/>
```

### With Date Range Restrictions

```tsx
<DateTimePicker
  minDate="2024-01-01"
  maxDate="2024-12-31"
  onChange={(value) => console.log('Selected:', value.iso)}
/>
```

### Controlled Component

```tsx
function ControlledExample() {
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);

  return (
    <div>
      <DateTimePicker
        value={selectedDate}
        onChange={(value) => setSelectedDate(value.dateTime)}
      />

      <button onClick={() => setSelectedDate(DateTime.now())}>
        Set to Now
      </button>

      <button onClick={() => setSelectedDate(null)}>
        Clear
      </button>
    </div>
  );
}
```

### Custom Format and Styling

```tsx
<DateTimePicker
  dateFormat="dd/MM/yyyy"
  timeFormat="HH:mm:ss"
  className="my-custom-picker"
  ariaLabel="Event date and time"
  onChange={(value) => console.log(value)}
/>
```

### Multiple Timezones

```tsx
function MultiTimezoneExample() {
  const [indiaTime, setIndiaTime] = useState<DateTimeValue | null>(null);
  const [nyTime, setNYTime] = useState<DateTimeValue | null>(null);

  const handleIndiaChange = (value: DateTimeValue) => {
    setIndiaTime(value);
    // Convert to New York time
    const converted = value.dateTime.setZone('America/New_York');
    setNYTime({
      ...value,
      dateTime: converted,
      formatted: converted.toFormat('DD HH:mm'),
      iso: converted.toISO() || '',
    });
  };

  return (
    <div>
      <div>
        <label>India Time (IST)</label>
        <DateTimePicker
          timezone="Asia/Kolkata"
          value={indiaTime?.dateTime}
          onChange={handleIndiaChange}
        />
      </div>

      <div>
        <label>New York Time (EST/EDT)</label>
        <DateTimePicker
          timezone="America/New_York"
          value={nyTime?.dateTime}
          disabled
        />
      </div>
    </div>
  );
}
```

## 🌍 Supported Timezones

The component supports all IANA timezone identifiers. Common timezones are provided for quick selection:

- Asia/Kolkata (India - IST)
- America/New_York (Eastern Time)
- America/Chicago (Central Time)
- America/Denver (Mountain Time)
- America/Los_Angeles (Pacific Time)
- Europe/London (GMT/BST)
- Europe/Paris (CET)
- Asia/Dubai (GST)
- Asia/Singapore (SGT)
- Asia/Tokyo (JST)
- Australia/Sydney (AEDT)
- UTC

## ♿ Accessibility

Chronos Picker is built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Space, Arrow keys, Escape)
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Focus Management**: Proper focus indicators and logical tab order
- **Screen Reader Support**: Announced date selections and state changes
- **WCAG 2.1 Compliant**: Meets AA level accessibility standards

### Keyboard Shortcuts

- `Tab` / `Shift+Tab` - Navigate between elements
- `Enter` / `Space` - Select date/time or toggle dropdown
- `Arrow Keys` - Navigate calendar grid
- `Escape` - Close picker

## 🎨 Styling

The component comes with beautiful default styles, but you can customize it:

### Custom CSS

```css
/* Override default styles */
.my-custom-picker .chronos-input {
  border-color: #your-color;
  border-radius: 12px;
}

.my-custom-picker .chronos-day.selected {
  background-color: #your-brand-color;
}
```

### Tailwind CSS

```tsx
<DateTimePicker
  className="w-full max-w-md"
  onChange={handleChange}
/>
```

## 🔧 Advanced Usage

### Working with Luxon DateTime

```tsx
import { DateTime } from 'luxon';

function AdvancedExample() {
  const handleChange = (value: DateTimeValue) => {
    const dt = value.dateTime;

    // Access Luxon DateTime methods
    console.log('Day of week:', dt.weekdayLong);
    console.log('Week number:', dt.weekNumber);
    console.log('Is DST:', dt.isInDST);

    // Format in different ways
    console.log('ISO:', dt.toISO());
    console.log('SQL:', dt.toSQL());
    console.log('Relative:', dt.toRelative());

    // Convert to other timezones
    const tokyo = dt.setZone('Asia/Tokyo');
    console.log('Tokyo time:', tokyo.toFormat('HH:mm'));
  };

  return <DateTimePicker onChange={handleChange} />;
}
```

### Timezone Conversion Helper

```tsx
import { convertToTimezone } from '@chronos/picker';

// Convert a date to specific timezone
const indiaTime = new Date();
const tokyoTime = convertToTimezone(indiaTime, 'Asia/Tokyo');
console.log(tokyoTime.toISO());
```

## 🐛 Troubleshooting

### Date not updating

Make sure you're using a controlled component pattern:

```tsx
const [date, setDate] = useState<DateTime | null>(null);

<DateTimePicker
  value={date}
  onChange={(value) => setDate(value.dateTime)}
/>
```

### Timezone not changing

Ensure you're using valid IANA timezone identifiers. Check the [IANA timezone database](https://www.iana.org/time-zones).

### Styling issues

Import the CSS file in your component or main app file:

```tsx
import '@chronos/picker/dist/style.css';
```

## 📄 License

MIT © [Your Name]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Date handling by [Luxon](https://moment.github.io/luxon/)
- Inspired by modern design systems

---

Made with ❤️ by Debmalya, for developers
