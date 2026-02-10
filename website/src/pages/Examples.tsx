import React, { useState } from 'react';
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';
import { DateTime } from 'luxon';
import CodeBlock from '../components/CodeBlock';
import './Examples.css';

const Examples: React.FC = () => {
  const [basicValue, setBasicValue] = useState<DateTimeValue | null>(null);
  const [dateOnlyValue, setDateOnlyValue] = useState<DateTimeValue | null>(null);
  const [timezoneValue, setTimezoneValue] = useState<DateTimeValue | null>(null);
  const [restrictedValue, setRestrictedValue] = useState<DateTimeValue | null>(null);
  const [formatValue, setFormatValue] = useState<DateTimeValue | null>(null);
  const [meetingValue, setMeetingValue] = useState<DateTimeValue | null>(null);

  const today = DateTime.now().toJSDate();
  const maxDate = DateTime.now().plus({ days: 90 }).toJSDate();

  const timezones = ['Asia/Kolkata', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

  return (
    <div className="examples">
      <div className="examples-hero">
        <div className="container container-narrow">
          <h1>Examples</h1>
          <p>Real-world examples and use cases for Chronos Picker</p>
        </div>
      </div>

      <div className="container examples-container">
        {/* Basic Example */}
        <div className="example">
          <div className="example-content">
            <h2>Basic Usage</h2>
            <p>Simple date and time picker with default timezone (Asia/Kolkata).</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={basicValue?.dateTime}
                onChange={setBasicValue}
                placeholder="Select date and time"
              />
              
              {basicValue && (
                <div className="example-output">
                  <div className="output-item">
                    <span>ISO:</span>
                    <code>{basicValue.iso}</code>
                  </div>
                  <div className="output-item">
                    <span>Formatted:</span>
                    <code>{basicValue.formatted}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`const [value, setValue] = useState(null);

<DateTimePicker
  value={value?.dateTime}
  onChange={setValue}
  placeholder="Select date and time"
/>`}
            />
          </div>
        </div>

        {/* Date Only */}
        <div className="example">
          <div className="example-content">
            <h2>Date Only Picker</h2>
            <p>Perfect for birth dates, deadlines, or any date-only selection.</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={dateOnlyValue?.dateTime}
                onChange={setDateOnlyValue}
                showTime={false}
                dateFormat="MMMM d, yyyy"
                placeholder="Select date"
              />
              
              {dateOnlyValue && (
                <div className="example-output">
                  <div className="output-item">
                    <span>Selected:</span>
                    <code>{dateOnlyValue.dateTime.toFormat('MMMM d, yyyy')}</code>
                  </div>
                  <div className="output-item">
                    <span>Day:</span>
                    <code>{dateOnlyValue.dateTime.weekdayLong}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`<DateTimePicker
  showTime={false}
  dateFormat="MMMM d, yyyy"
  onChange={(value) => console.log(value)}
/>`}
            />
          </div>
        </div>

        {/* Timezone Selector */}
        <div className="example">
          <div className="example-content">
            <h2>With Timezone Selector</h2>
            <p>Let users select their timezone for international applications.</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={timezoneValue?.dateTime}
                onChange={setTimezoneValue}
                showTimezoneSelector
                timezone="UTC"
                placeholder="Select with timezone"
              />
              
              {timezoneValue && (
                <div className="example-output">
                  <div className="output-item">
                    <span>Timezone:</span>
                    <code>{timezoneValue.dateTime.zoneName}</code>
                  </div>
                  <div className="output-item">
                    <span>Offset:</span>
                    <code>UTC{timezoneValue.dateTime.offset >= 0 ? '+' : ''}{timezoneValue.dateTime.offset / 60}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`<DateTimePicker
  showTimezoneSelector
  timezone="UTC"
  onChange={(value) => console.log(value)}
/>`}
            />
          </div>
        </div>

        {/* Date Range Restrictions */}
        <div className="example">
          <div className="example-content">
            <h2>Date Range Restrictions</h2>
            <p>Limit selectable dates for booking systems or appointment scheduling.</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={restrictedValue?.dateTime}
                onChange={setRestrictedValue}
                minDate={today}
                maxDate={maxDate}
                placeholder="Select booking date"
              />
              
              {restrictedValue && (
                <div className="example-output">
                  <div className="output-item">
                    <span>Selected:</span>
                    <code>{restrictedValue.formatted}</code>
                  </div>
                  <div className="output-item">
                    <span>Days from now:</span>
                    <code>{Math.floor(restrictedValue.dateTime.diff(DateTime.now(), 'days').days)}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`const today = DateTime.now().toJSDate();
const maxDate = DateTime.now().plus({ days: 90 }).toJSDate();

<DateTimePicker
  minDate={today}
  maxDate={maxDate}
  onChange={(value) => console.log(value)}
/>`}
            />
          </div>
        </div>

        {/* Custom Format */}
        <div className="example">
          <div className="example-content">
            <h2>Custom Date & Time Format</h2>
            <p>Customize the display format to match your application's style.</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={formatValue?.dateTime}
                onChange={setFormatValue}
                dateFormat="dd/MM/yyyy"
                timeFormat="hh:mm a"
                use24Hour={false}
                placeholder="DD/MM/YYYY hh:mm AM/PM"
              />
              
              {formatValue && (
                <div className="example-output">
                  <div className="output-item">
                    <span>Display:</span>
                    <code>{formatValue.formatted}</code>
                  </div>
                  <div className="output-item">
                    <span>ISO:</span>
                    <code>{formatValue.iso}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`<DateTimePicker
  dateFormat="dd/MM/yyyy"
  timeFormat="hh:mm a"
  use24Hour={false}
  onChange={(value) => console.log(value)}
/>`}
            />
          </div>
        </div>

        {/* Multi-Timezone Display */}
        <div className="example">
          <div className="example-content">
            <h2>Multi-Timezone Meeting Scheduler</h2>
            <p>Schedule meetings across different timezones with real-time conversion.</p>
            
            <div className="example-demo">
              <DateTimePicker
                value={meetingValue?.dateTime}
                onChange={setMeetingValue}
                timezone="Asia/Kolkata"
                placeholder="Select meeting time"
              />
              
              {meetingValue && (
                <div className="timezone-display">
                  <h4>Meeting time in different locations:</h4>
                  {timezones.map((tz) => {
                    const converted = meetingValue.dateTime.setZone(tz);
                    return (
                      <div key={tz} className="timezone-item">
                        <span className="tz-name">{tz}</span>
                        <span className="tz-time">{converted.toFormat('DD HH:mm')}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          
          <div className="example-code">
            <CodeBlock 
              language="tsx"
              code={`const timezones = ['Asia/Kolkata', 'America/New_York', 'Europe/London'];

<DateTimePicker onChange={(value) => {
  timezones.forEach((tz) => {
    const converted = value.dateTime.setZone(tz);
    console.log(\`\${tz}: \${converted.toISO()}\`);
  });
}} />`}
            />
          </div>
        </div>

        {/* Integration Example */}
        <div className="example example-full">
          <div className="example-content">
            <h2>Form Integration (React Hook Form)</h2>
            <p>Integrate with popular form libraries like React Hook Form or Formik.</p>
          </div>
          
          <CodeBlock 
            language="tsx"
            code={`import { useForm, Controller } from 'react-hook-form';
import { DateTimePicker } from '@chronos/picker';

function BookingForm() {
  const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log('Booking:', data.appointmentDate.iso);
    // Send to API
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="appointmentDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateTimePicker
            value={field.value?.dateTime}
            onChange={(value) => field.onChange(value)}
            timezone="Asia/Kolkata"
            minDate={new Date()}
          />
        )}
      />
      
      <button type="submit">Book Appointment</button>
    </form>
  );
}`}
          />
        </div>

        {/* CTA */}
        <div className="examples-cta">
          <h2>Ready to try it yourself?</h2>
          <p>Jump into our interactive playground and experiment with all the features.</p>
          <a href="/playground" className="btn btn-primary btn-lg">
            Try in Playground
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Examples;
