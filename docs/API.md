# API Reference

Complete API documentation for Chronos Picker.

## Components

### DateTimePicker

The main component for date and time selection.

```tsx
import { DateTimePicker } from '@chronos/picker';
```

#### Props

##### value
- Type: `Date | string | DateTime | undefined`
- Default: `undefined`

The currently selected date and time value. Can be a JavaScript Date object, ISO string, or Luxon DateTime object.

```tsx
<DateTimePicker value={new Date()} />
<DateTimePicker value="2024-01-15T10:30:00" />
<DateTimePicker value={DateTime.now()} />
```

##### onChange
- Type: `(value: DateTimeValue) => void | undefined`
- Default: `undefined`

Callback function called when the date/time value changes. Receives a `DateTimeValue` object containing multiple representations of the selected value.

```tsx
<DateTimePicker
  onChange={(value) => {
    console.log(value.iso);        // ISO string
    console.log(value.formatted);  // Formatted string
    console.log(value.timestamp);  // Unix timestamp
    console.log(value.dateTime);   // Luxon DateTime
  }}
/>
```

##### timezone
- Type: `string`
- Default: `"Asia/Kolkata"`

IANA timezone identifier for the picker. All dates will be displayed and returned in this timezone.

```tsx
<DateTimePicker timezone="America/New_York" />
<DateTimePicker timezone="Europe/London" />
<DateTimePicker timezone="UTC" />
```

##### dateFormat
- Type: `string`
- Default: `"DD"`

Date format using Luxon format tokens. See [Luxon formatting](https://moment.github.io/luxon/#/formatting).

Common formats:
- `"DD"` → `01/15/2024`
- `"MMMM d, yyyy"` → `January 15, 2024`
- `"dd/MM/yyyy"` → `15/01/2024`
- `"yyyy-MM-dd"` → `2024-01-15`

```tsx
<DateTimePicker dateFormat="MMMM d, yyyy" />
```

##### timeFormat
- Type: `string`
- Default: `"HH:mm"`

Time format using Luxon format tokens.

Common formats:
- `"HH:mm"` → `14:30` (24-hour)
- `"HH:mm:ss"` → `14:30:00` (24-hour with seconds)
- `"hh:mm a"` → `02:30 PM` (12-hour)
- `"h:mm a"` → `2:30 PM` (12-hour, no leading zero)

```tsx
<DateTimePicker timeFormat="hh:mm a" use24Hour={false} />
```

##### minDate
- Type: `Date | string | undefined`
- Default: `undefined`

Minimum selectable date. Dates before this will be disabled.

```tsx
<DateTimePicker minDate={new Date()} />
<DateTimePicker minDate="2024-01-01" />
```

##### maxDate
- Type: `Date | string | undefined`
- Default: `undefined`

Maximum selectable date. Dates after this will be disabled.

```tsx
<DateTimePicker maxDate={new Date('2024-12-31')} />
```

##### placeholder
- Type: `string`
- Default: `"Select date and time"`

Placeholder text shown in the input field when no value is selected.

```tsx
<DateTimePicker placeholder="Choose your appointment time" />
```

##### disabled
- Type: `boolean`
- Default: `false`

Whether the picker is disabled.

```tsx
<DateTimePicker disabled={true} />
```

##### showTime
- Type: `boolean`
- Default: `true`

Whether to show the time picker. Set to `false` for date-only selection.

```tsx
<DateTimePicker showTime={false} />
```

##### use24Hour
- Type: `boolean`
- Default: `true`

Whether to use 24-hour time format. When `false`, shows AM/PM selector.

```tsx
<DateTimePicker use24Hour={false} />
```

##### className
- Type: `string`
- Default: `""`

Custom CSS class to apply to the picker container.

```tsx
<DateTimePicker className="my-custom-picker" />
```

##### ariaLabel
- Type: `string`
- Default: `"Date and time picker"`

ARIA label for accessibility.

```tsx
<DateTimePicker ariaLabel="Event date and time" />
```

##### showTimezoneSelector
- Type: `boolean`
- Default: `false`

Whether to show the timezone selector dropdown.

```tsx
<DateTimePicker showTimezoneSelector={true} />
```

## Types

### DateTimeValue

The object returned by the `onChange` callback.

```typescript
interface DateTimeValue {
  iso: string;              // ISO 8601 string
  formatted: string;        // Formatted display string
  timestamp: number;        // Unix timestamp in milliseconds
  dateTime: DateTime;       // Luxon DateTime object
}
```

Example:
```typescript
{
  iso: "2024-01-15T14:30:00.000+05:30",
  formatted: "01/15/2024 14:30",
  timestamp: 1705315800000,
  dateTime: DateTime { ... }
}
```

### DateTimePickerProps

All props accepted by the DateTimePicker component.

```typescript
interface DateTimePickerProps {
  value?: Date | string | DateTime;
  onChange?: (value: DateTimeValue) => void;
  timezone?: string;
  dateFormat?: string;
  timeFormat?: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  placeholder?: string;
  disabled?: boolean;
  showTime?: boolean;
  use24Hour?: boolean;
  className?: string;
  ariaLabel?: string;
  showTimezoneSelector?: boolean;
}
```

## Utility Functions

### convertToTimezone

Convert a date to a specific timezone.

```typescript
import { convertToTimezone } from '@chronos/picker';

const date = new Date();
const tokyo = convertToTimezone(date, 'Asia/Tokyo');
```

#### Parameters
- `date`: `Date | string | DateTime` - The date to convert
- `timezone`: `string` - Target IANA timezone

#### Returns
- `DateTime` - Luxon DateTime object in the target timezone

### nowInTimezone

Get the current date/time in a specific timezone.

```typescript
import { nowInTimezone } from '@chronos/picker';

const nowInIndia = nowInTimezone('Asia/Kolkata');
const nowInNY = nowInTimezone('America/New_York');
```

#### Parameters
- `timezone`: `string` - IANA timezone identifier

#### Returns
- `DateTime` - Current date/time in the specified timezone

## Constants

### DEFAULT_TIMEZONE

The default timezone used when none is specified.

```typescript
import { DEFAULT_TIMEZONE } from '@chronos/picker';

console.log(DEFAULT_TIMEZONE); // "Asia/Kolkata"
```

### COMMON_TIMEZONES

Array of commonly used timezones with labels.

```typescript
import { COMMON_TIMEZONES } from '@chronos/picker';

console.log(COMMON_TIMEZONES);
// [
//   { value: 'Asia/Kolkata', label: 'India (IST)' },
//   { value: 'America/New_York', label: 'Eastern Time (ET)' },
//   ...
// ]
```

## Events

### Focus Events

The picker handles focus events internally for accessibility. The input field can receive focus and trigger keyboard navigation.

### Keyboard Events

Supported keyboard shortcuts:
- `Tab` / `Shift+Tab` - Navigate between focusable elements
- `Enter` / `Space` - Select date or toggle picker
- `Escape` - Close picker
- Arrow keys - Navigate calendar grid

### Click Events

- Click input to open picker
- Click outside picker to close
- Click dates/times to select
