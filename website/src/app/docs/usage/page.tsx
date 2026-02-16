"use client";

import CodeBlock from "@/components/CodeBlock";
import styles from "../docs.module.css";
import { DateTimePicker, DateTimeValue } from "@theengineerguy/chronos-picker";
import { useState } from "react";
import "@theengineerguy/chronos-picker/dist/style.css";

/** Range value type (exported as DateTimeRangeValue in the package) */
type DateTimeRangeValue = { start: DateTimeValue; end: DateTimeValue; nights: number };

/** Picker with range props (available in package 1.0.3+) */
const DateTimePickerWithRange = DateTimePicker as React.ComponentType<
  React.ComponentProps<typeof DateTimePicker> & {
    selectionMode?: "single" | "range";
    rangeValue?: { start: unknown; end: unknown } | null;
    onRangeChange?: (value: DateTimeRangeValue) => void;
  }
>;

export default function Usage() {
  const [basicVal, setBasicVal] = useState<DateTimeValue | null>(null);
  const [tzVal, setTzVal] = useState<DateTimeValue | null>(null);
  const [dateRangeVal, setDateRangeVal] = useState<DateTimeValue | null>(null);
  const [customMinDate, setCustomMinDate] = useState<Date>(() => new Date());
  const [format12Val, setFormat12Val] = useState<DateTimeValue | null>(null);
  const [disabledVal, setDisabledVal] = useState<DateTimeValue | null>(null);
  const [dateOnlyVal, setDateOnlyVal] = useState<DateTimeValue | null>(null);
  const [orientationVal, setOrientationVal] = useState<DateTimeValue | null>(null);
  const [rangeSelection, setRangeSelection] = useState<DateTimeRangeValue | null>(null);
  const customMaxDate = new Date(customMinDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Usage</h1>
      <p className={styles.description}>
        Common patterns and examples for using Chronos Picker.
      </p>

      <section className={styles.section}>
        <h2>Controlled Component</h2>
        <p>
          The most common way to use the picker is as a controlled component,
          managing the state in your parent component.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePicker
            value={basicVal?.dateTime}
            onChange={setBasicVal}
            placeholder="Select date..."
            showTime={false}
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            Formatted: {basicVal?.formatted || 'None'}
          </div>
        </div>

        <CodeBlock
          code={`import { useState } from "react";
import { DateTimePicker, DateTimeValue } from "@theengineerguy/chronos-picker";

export default function App() {
  const [value, setValue] = useState<DateTimeValue | null>(null);

  return (
    <DateTimePicker
      value={value?.dateTime}
      onChange={setValue}
      showTime={false}
    />
  );
}`}
        />
      </section>

      <section className={styles.section}>
        <h2>Timezone Selection</h2>
        <p>
          You can preset a timezone or allow the user to select one.
          When a timezone is set, all dates displayed and selected will be in that timezone.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePicker
            value={tzVal?.dateTime}
            onChange={setTzVal}
            timezone="America/New_York"
            showTimezoneSelector
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            Selection: {tzVal?.iso || 'None'} <br />
            Zone: {tzVal?.dateTime.zoneName}
          </div>
        </div>

        <CodeBlock
          code={`<DateTimePicker
  timezone="America/New_York"
  showTimezoneSelector
  onChange={(val) => console.log(val.iso)}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>Date-Only Picker</h2>
        <p>
          Hide the time picker and only show the calendar. Perfect for birthdays,
          deadlines, and date selection without time requirements.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePicker
            value={dateOnlyVal?.dateTime}
            onChange={setDateOnlyVal}
            showTime={false}
            placeholder="Select date..."
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            Date: {dateOnlyVal?.dateTime ? dateOnlyVal.dateTime.toFormat('MMMM dd, yyyy') : 'None'}
          </div>
        </div>

        <CodeBlock
          code={`<DateTimePicker
  showTime={false}
  placeholder="Select date..."
  onChange={(val) => console.log(val.dateTime.toFormat('yyyy-MM-dd'))}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>Date Range Restrictions</h2>
        <p>
          Limit the selectable date range with <code>minDate</code> and <code>maxDate</code> props.
          Useful for booking systems, event scheduling, and date validation. Only dates within the
          allowed range can be selected; dates outside are disabled in the calendar.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Custom min date (allowed range start)
            </label>
            <DateTimePicker
              value={customMinDate}
              onChange={(val) => val?.dateTime && setCustomMinDate(val.dateTime.toJSDate())}
              placeholder="Set minimum selectable date..."
              showTime={false}
            />
          </div>
          <div style={{
            marginBottom: '1rem',
            padding: '0.75rem 1rem',
            background: 'var(--muted)',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
          }}>
            <strong>Selectable range:</strong> {customMinDate.toLocaleDateString()} – {customMaxDate.toLocaleDateString()} (30 days from min)
          </div>
          <DateTimePicker
            value={dateRangeVal?.dateTime}
            onChange={setDateRangeVal}
            minDate={customMinDate}
            maxDate={customMaxDate}
            placeholder="Select within allowed range..."
            showTime={false}
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            Selected: {dateRangeVal?.formatted || 'None'}
          </div>
        </div>

        <CodeBlock
          code={`const [minDate, setMinDate] = useState(new Date());
const maxDate = new Date(minDate.getTime() + 30 * 24 * 60 * 60 * 1000);

// Optional: let user pick custom min date
<DateTimePicker value={minDate} onChange={(v) => setMinDate(v.dateTime.toJSDate())} showTime={false} />

{/* Show allowed range so users understand the constraint */}
<p>Selectable: {minDate.toLocaleDateString()} – {maxDate.toLocaleDateString()}</p>

<DateTimePicker
  minDate={minDate}
  maxDate={maxDate}
  placeholder="Pick a date in range"
  onChange={setValue}
  showTime={false}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>Date Range Picker (Start & End)</h2>
        <p>
          Use <code>selectionMode="range"</code> to select a start and end date. The calendar shows
          the selected range with a bar between dates and circles on start/end. A summary header
          displays the number of nights and the date range (e.g. &quot;3 nights&quot;, &quot;11 Feb 2026 – 14 Feb 2026&quot;).
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePickerWithRange
            selectionMode="range"
            rangeValue={rangeSelection ? { start: rangeSelection.start.dateTime, end: rangeSelection.end.dateTime } : null}
            onRangeChange={setRangeSelection}
            placeholder="Select check-in and check-out..."
            showTime={false}
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            {rangeSelection ? (
              <>Start: {rangeSelection.start.formatted} · End: {rangeSelection.end.formatted} · {rangeSelection.nights} nights</>
            ) : (
              'Select a start date, then an end date.'
            )}
          </div>
        </div>

        <CodeBlock
          code={`import { DateTimePicker, DateTimeRangeValue } from "@theengineerguy/chronos-picker";

const [range, setRange] = useState<DateTimeRangeValue | null>(null);

<DateTimePicker
  selectionMode="range"
  rangeValue={range ? { start: range.start.dateTime, end: range.end.dateTime } : null}
  onRangeChange={setRange}
  placeholder="Select check-in and check-out"
  showTime={false}
/>

{/* range.start, range.end (DateTimeValue), range.nights */}
`}
        />
      </section>

      <section className={styles.section}>
        <h2>12-Hour Format</h2>
        <p>
          Display time in 12-hour format with AM/PM. Great for user-facing applications
          where 12-hour format is preferred.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePicker
            value={format12Val?.dateTime}
            onChange={setFormat12Val}
            showTime={true}
            use24Hour={false}
            placeholder="Select date and time..."
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            12-hour format: {format12Val?.dateTime ? format12Val.dateTime.toFormat('MMM dd, yyyy hh:mm a') : 'None'}
          </div>
        </div>

        <CodeBlock
          code={`<DateTimePicker
  showTime={true}
  use24Hour={false}
  onChange={(val) => {
    // Format with AM/PM
    console.log(val.dateTime.toFormat('hh:mm a'));
  }}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>Orientation</h2>
        <p>
          Control  the layout of the calendar and time panel with the <code>orientation</code> prop.
          Use <code>portrait</code> (default) for a stacked layout, or <code>landscape</code> for
          calendar and time side-by-side—handy on wider screens.
        </p>

        <div style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>portrait (default)</div>
            <DateTimePicker
              value={orientationVal?.dateTime}
              onChange={setOrientationVal}
              orientation="portrait"
              placeholder="Portrait layout..."
              showTime={true}
            />
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>landscape</div>
            <DateTimePicker
              value={orientationVal?.dateTime}
              onChange={setOrientationVal}
              orientation="landscape"
              placeholder="Landscape layout..."
              showTime={true}
            />
          </div>
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
          Selected: {orientationVal?.formatted || 'None'} (shared between both pickers)
        </div>

        <CodeBlock
          code={`{/* Stacked: calendar above, time below */}
<DateTimePicker orientation="portrait" showTime={true} onChange={setValue} />

{/* Side-by-side: calendar left, time right */}
<DateTimePicker orientation="landscape" showTime={true} onChange={setValue} />`}
        />
      </section>

      <section className={styles.section}>
        <h2>Disabled State</h2>
        <p>
          Disable the picker when interaction should be prevented, such as during
          form submission or when conditions aren't met.
        </p>

        <div style={{ margin: '2rem 0', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
          <DateTimePicker
            value={disabledVal?.dateTime}
            onChange={setDisabledVal}
            disabled={true}
            placeholder="This picker is disabled"
            showTime={false}
          />
        </div>

        <CodeBlock
          code={`const [isSubmitting, setIsSubmitting] = useState(false);

<DateTimePicker
  disabled={isSubmitting}
  onChange={setValue}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>With Default Value</h2>
        <p>
          Set an initial value when the component mounts. Useful for edit forms
          or when you want to show a pre-selected date.
        </p>

        <CodeBlock
          code={`import { DateTime } from "luxon";
import { useState } from "react";

export default function App() {
  // Initialize with current date/time
  const [value, setValue] = useState<DateTimeValue>({
    dateTime: DateTime.now(),
    formatted: DateTime.now().toFormat('MMM dd, yyyy HH:mm'),
    iso: DateTime.now().toISO(),
  });

  return <DateTimePicker value={value.dateTime} onChange={setValue} />;
}`}
        />
      </section>

      <section className={styles.section}>
        <h2>Form Integration</h2>
        <p>
          Integrate with popular form libraries like React Hook Form or Formik.
          The picker works seamlessly with controlled form state.
        </p>

        <CodeBlock
          code={`import { useForm, Controller } from "react-hook-form";
import { DateTimePicker } from "@theengineerguy/chronos-picker";

export default function MyForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Selected date:", data.appointmentDate?.iso);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="appointmentDate"
        control={control}
        rules={{ required: "Date is required" }}
        render={({ field }) => (
          <DateTimePicker
            value={field.value?.dateTime}
            onChange={field.onChange}
            placeholder="Select appointment date"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
      </section>

      <section className={styles.section}>
        <h2>Custom Date Format</h2>
        <p>
          Format the output using Luxon's powerful formatting options. Access the
          DateTime object directly for complete control.
        </p>

        <CodeBlock
          code={`<DateTimePicker
  onChange={(val) => {
    // Different format options
    console.log(val.iso);  // ISO 8601: "2024-03-15T14:30:00.000-04:00"
    console.log(val.formatted);  // Default format

    // Custom formats using Luxon
    const dt = val.dateTime;
    console.log(dt.toFormat('yyyy-MM-dd'));  // "2024-03-15"
    console.log(dt.toFormat('MMMM dd, yyyy'));  // "March 15, 2024"
    console.log(dt.toFormat('EEE, MMM d'));  // "Fri, Mar 15"
    console.log(dt.toLocaleString());  // Locale-aware format

    // For API calls
    console.log(dt.toISO());  // Full ISO string
    console.log(dt.toMillis());  // Unix timestamp (ms)
    console.log(dt.toSeconds());  // Unix timestamp (seconds)
  }}
/>`}
        />
      </section>

      <section className={styles.section}>
        <h2>Working with Timezones</h2>
        <p>
          Handle timezone conversions and work with dates across different timezones.
          Perfect for global applications and scheduling systems.
        </p>

        <CodeBlock
          code={`import { DateTime } from "luxon";

<DateTimePicker
  timezone="America/Los_Angeles"
  showTimezoneSelector
  onChange={(val) => {
    const pst = val.dateTime;  // In Pacific time

    // Convert to other timezones
    const est = pst.setZone('America/New_York');
    const utc = pst.setZone('UTC');
    const tokyo = pst.setZone('Asia/Tokyo');

    console.log('PST:', pst.toFormat('HH:mm'));
    console.log('EST:', est.toFormat('HH:mm'));
    console.log('UTC:', utc.toFormat('HH:mm'));
    console.log('Tokyo:', tokyo.toFormat('HH:mm'));

    // Store in database (always use ISO or UTC)
    saveToDatabase(val.iso);
  }}
/>

      <section className={styles.section}>
        <h2>Holidays & Long Weekends</h2>
        <div className={styles.note}>
          <strong>
            <span style={{ fontSize: '1.5em' }}>🏖️</span>
            Plan Your 2026 Vacations
          </strong>
          <p>
            The picker supports highlighting holidays and long weekends.
            Hover over dates to see details. Red dots indicate national holidays,
            while green highlights suggest long weekends.
          </p>
        </div>

        <DateTimePicker
          showTime={false}
          timezone="Asia/Kolkata"
          dateFormat="EEE, MMM d"
          placeholder="Check 2026 Holidays..."
          className={styles.picker}
          holidays={[
            // --- 2026 National Holidays (India) ---
            { date: '2026-01-26', name: 'Republic Day', type: 'national' },
            { date: '2026-03-19', name: 'Holi', type: 'national' }, // Tentative
            { date: '2026-04-14', name: 'Dr. Ambedkar Jayanti', type: 'national' },
            { date: '2026-08-15', name: 'Independence Day', type: 'national' },
            { date: '2026-10-02', name: 'Gandhi Jayanti', type: 'national' },
            { date: '2026-10-20', name: 'Dussehra', type: 'national' }, // Tentative
            { date: '2026-11-08', name: 'Diwali', type: 'national' }, // Tentative
            { date: '2026-12-25', name: 'Christmas', type: 'national' },

            // --- 2026 Long Weekend Suggestions ---

            // Republic Day Weekend (Jan 24-26)
            { date: '2026-01-24', name: 'Long Weekend: Trip to Jaipur?', type: 'long-weekend' },
            { date: '2026-01-25', name: 'Long Weekend: Fort Visit', type: 'long-weekend' },
            { date: '2026-01-26', name: 'Republic Day', type: 'long-weekend' },

            // Holi Weekend (Mar 19-22 - Take Friday off)
            { date: '2026-03-19', name: 'Holi Celebration', type: 'long-weekend' },
            { date: '2026-03-20', name: 'Take a leave! Beach time?', type: 'long-weekend' },
            { date: '2026-03-21', name: 'Relaxing Saturday', type: 'long-weekend' },
            { date: '2026-03-22', name: 'Lazy Sunday', type: 'long-weekend' },

            // Independence Day Weekend (Aug 15-17)
            { date: '2026-08-15', name: 'Independence Day', type: 'long-weekend' },
            { date: '2026-08-16', name: 'Sunday Brunch', type: 'long-weekend' },
            { date: '2026-08-17', name: 'Take a leave? Hills calling!', type: 'long-weekend' }, // Monday leave suggestion

            // Diwali Weekend (Nov 7-9)
            { date: '2026-11-07', name: 'Choti Diwali', type: 'long-weekend' },
            { date: '2026-11-08', name: 'Diwali', type: 'long-weekend' },
            { date: '2026-11-09', name: 'Govardhan Puja (Take leave)', type: 'long-weekend' },
          ]}
        />
      </section>`}
        />
      </section>
    </div>
  );
}
