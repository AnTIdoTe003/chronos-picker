# Getting Started with Chronos Picker

This guide will help you integrate Chronos Picker into your React application in minutes.

## Prerequisites

- React 18.0.0 or higher
- Node.js 16.0.0 or higher

## Installation

### Step 1: Install the package

```bash
npm install @chronos/picker luxon
```

### Step 2: Install type definitions (if using TypeScript)

Type definitions are included in the package, but you'll need Luxon types:

```bash
npm install --save-dev @types/luxon
```

## Basic Setup

### 1. Import the component and styles

```tsx
// App.tsx or your component file
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';
```

### 2. Add state management

```tsx
import { useState } from 'react';
import { DateTimePicker, DateTimeValue } from '@chronos/picker';

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState<DateTimeValue | null>(null);
  
  const handleDateChange = (value: DateTimeValue) => {
    setSelectedDate(value);
    
    // The value object contains multiple formats:
    console.log('ISO String:', value.iso);           // "2024-01-15T14:30:00+05:30"
    console.log('Formatted:', value.formatted);       // "01/15/2024 14:30"
    console.log('Timestamp:', value.timestamp);       // 1705315800000
    console.log('DateTime:', value.dateTime);         // Luxon DateTime object
  };
  
  return (
    <div>
      <DateTimePicker
        value={selectedDate?.dateTime}
        onChange={handleDateChange}
        placeholder="Select date and time"
      />
      
      {selectedDate && (
        <div>
          <p>Selected: {selectedDate.formatted}</p>
        </div>
      )}
    </div>
  );
}
```

## Common Use Cases

### 1. Event Scheduling with Timezone

```tsx
function EventScheduler() {
  const [eventTime, setEventTime] = useState<DateTimeValue | null>(null);
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  
  return (
    <div className="event-form">
      <h2>Schedule Event</h2>
      
      <DateTimePicker
        value={eventTime?.dateTime}
        onChange={setEventTime}
        timezone={timezone}
        showTimezoneSelector
        placeholder="When is your event?"
      />
      
      {eventTime && (
        <div className="event-details">
          <p>Event scheduled for:</p>
          <p><strong>{eventTime.formatted}</strong></p>
          <p>Timezone: {timezone}</p>
        </div>
      )}
    </div>
  );
}
```

### 2. Booking System with Date Restrictions

```tsx
import { DateTime } from 'luxon';

function BookingForm() {
  const [bookingDate, setBookingDate] = useState<DateTimeValue | null>(null);
  
  // Only allow bookings from today to 90 days in the future
  const today = DateTime.now().toJSDate();
  const maxDate = DateTime.now().plus({ days: 90 }).toJSDate();
  
  return (
    <div className="booking-form">
      <h2>Book Your Appointment</h2>
      
      <DateTimePicker
        value={bookingDate?.dateTime}
        onChange={setBookingDate}
        minDate={today}
        maxDate={maxDate}
        timezone="Asia/Kolkata"
        placeholder="Select appointment date"
      />
      
      <button 
        disabled={!bookingDate}
        onClick={() => {
          if (bookingDate) {
            console.log('Booking for:', bookingDate.iso);
            // Send to API
          }
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}
```

### 3. Date of Birth Picker (Date Only)

```tsx
function ProfileForm() {
  const [dob, setDob] = useState<DateTimeValue | null>(null);
  
  const today = DateTime.now().toJSDate();
  const minDate = DateTime.now().minus({ years: 100 }).toJSDate();
  
  return (
    <div className="profile-form">
      <label htmlFor="dob">Date of Birth</label>
      
      <DateTimePicker
        value={dob?.dateTime}
        onChange={setDob}
        showTime={false}
        dateFormat="MMMM d, yyyy"
        maxDate={today}
        minDate={minDate}
        placeholder="Select your date of birth"
      />
    </div>
  );
}
```

### 4. Meeting Time Across Timezones

```tsx
function MeetingScheduler() {
  const [meetingTime, setMeetingTime] = useState<DateTimeValue | null>(null);
  
  const timezones = [
    'Asia/Kolkata',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
  ];
  
  return (
    <div className="meeting-scheduler">
      <h2>Schedule Team Meeting</h2>
      
      <DateTimePicker
        value={meetingTime?.dateTime}
        onChange={setMeetingTime}
        timezone="Asia/Kolkata"
        placeholder="Select meeting time"
      />
      
      {meetingTime && (
        <div className="timezone-display">
          <h3>Meeting time in different timezones:</h3>
          {timezones.map((tz) => {
            const converted = meetingTime.dateTime.setZone(tz);
            return (
              <div key={tz}>
                <strong>{tz}:</strong> {converted.toFormat('DD HH:mm')}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

## Integration with Forms

### React Hook Form

```tsx
import { useForm, Controller } from 'react-hook-form';
import { DateTimePicker } from '@chronos/picker';

interface FormData {
  eventDate: DateTimeValue;
  name: string;
}

function EventForm() {
  const { control, handleSubmit } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', {
      name: data.name,
      eventDate: data.eventDate.iso,
    });
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Event name" />
      
      <Controller
        name="eventDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateTimePicker
            value={field.value?.dateTime}
            onChange={(value) => field.onChange(value)}
            placeholder="Event date and time"
          />
        )}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Formik

```tsx
import { Formik, Form, Field } from 'formik';
import { DateTimePicker } from '@chronos/picker';

function BookingForm() {
  return (
    <Formik
      initialValues={{ bookingDate: null }}
      onSubmit={(values) => {
        console.log('Booking:', values.bookingDate?.iso);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <DateTimePicker
            value={values.bookingDate?.dateTime}
            onChange={(value) => setFieldValue('bookingDate', value)}
            placeholder="Select booking date"
          />
          
          <button type="submit">Book Now</button>
        </Form>
      )}
    </Formik>
  );
}
```

## Styling Your Picker

### Basic Custom Styling

```css
/* custom-styles.css */
.my-picker .chronos-input {
  border: 2px solid #3b82f6;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
}

.my-picker .chronos-day.selected {
  background-color: #10b981;
}

.my-picker .chronos-dropdown {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
```

```tsx
import './custom-styles.css';

<DateTimePicker
  className="my-picker"
  onChange={handleChange}
/>
```

### With Tailwind CSS

```tsx
<div className="w-full max-w-md mx-auto">
  <DateTimePicker
    className="shadow-lg"
    onChange={handleChange}
  />
</div>
```

## API Integration

### Sending to Backend

```tsx
function SaveDateExample() {
  const [date, setDate] = useState<DateTimeValue | null>(null);
  
  const saveDateToAPI = async () => {
    if (!date) return;
    
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventDate: date.iso,           // Send ISO string
          timestamp: date.timestamp,      // Or timestamp
          timezone: date.dateTime.zoneName, // Include timezone
        }),
      });
      
      if (response.ok) {
        console.log('Date saved successfully!');
      }
    } catch (error) {
      console.error('Error saving date:', error);
    }
  };
  
  return (
    <div>
      <DateTimePicker
        value={date?.dateTime}
        onChange={setDate}
      />
      <button onClick={saveDateToAPI}>Save</button>
    </div>
  );
}
```

### Loading from Backend

```tsx
import { DateTime } from 'luxon';

function LoadDateExample() {
  const [date, setDate] = useState<DateTimeValue | null>(null);
  
  useEffect(() => {
    // Fetch date from API
    fetch('/api/event/123')
      .then((res) => res.json())
      .then((data) => {
        // Convert ISO string to DateTime
        const dt = DateTime.fromISO(data.eventDate);
        setDate({
          iso: dt.toISO() || '',
          formatted: dt.toFormat('DD HH:mm'),
          timestamp: dt.toMillis(),
          dateTime: dt,
        });
      });
  }, []);
  
  return (
    <DateTimePicker
      value={date?.dateTime}
      onChange={setDate}
    />
  );
}
```

## Next Steps

- Check out the [full API reference](../README.md#api-reference)
- Explore [advanced examples](../README.md#advanced-usage)
- Learn about [timezone handling](../README.md#supported-timezones)
- Review [accessibility features](../README.md#accessibility)

## Need Help?

- 📖 [Full Documentation](../README.md)
- 🐛 [Report Issues](https://github.com/yourusername/chronos-picker/issues)
- 💬 [Discussions](https://github.com/yourusername/chronos-picker/discussions)
