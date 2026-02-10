# Quick Start

Get up and running with Chronos Picker in under 5 minutes!

## Installation

```bash
npm install @chronos/picker luxon
```

## Minimal Example

```tsx
import { DateTimePicker } from '@chronos/picker';

function App() {
  return (
    <DateTimePicker
      onChange={(value) => console.log(value.iso)}
    />
  );
}
```

That's it! You now have a fully functional date and time picker with timezone support.

## Common Patterns

### Controlled Component

```tsx
import { useState } from 'react';
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';

function MyForm() {
  const [date, setDate] = useState<DateTimeValue | null>(null);
  
  return (
    <DateTimePicker
      value={date?.dateTime}
      onChange={setDate}
    />
  );
}
```

### With Submit Button

```tsx
function BookingForm() {
  const [date, setDate] = useState(null);
  
  const handleSubmit = () => {
    if (date) {
      fetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify({ date: date.iso }),
      });
    }
  };
  
  return (
    <>
      <DateTimePicker onChange={setDate} />
      <button onClick={handleSubmit}>Book Now</button>
    </>
  );
}
```

### Different Timezone

```tsx
<DateTimePicker
  timezone="America/New_York"
  onChange={(value) => console.log(value)}
/>
```

### Date Only

```tsx
<DateTimePicker
  showTime={false}
  onChange={(value) => console.log(value)}
/>
```

### With Restrictions

```tsx
<DateTimePicker
  minDate={new Date()}
  maxDate={new Date('2024-12-31')}
  onChange={(value) => console.log(value)}
/>
```

## What's Next?

- [Full API Reference](./API.md)
- [Complete Examples](./GETTING_STARTED.md)
- [Styling Guide](../README.md#styling)
