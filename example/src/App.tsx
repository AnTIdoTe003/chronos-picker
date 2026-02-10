import React, { useState } from 'react';
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';
import { DateTime } from 'luxon';

function App() {
  const [basicValue, setBasicValue] = useState<DateTimeValue | null>(null);
  const [dateOnlyValue, setDateOnlyValue] = useState<DateTimeValue | null>(null);
  const [timezoneValue, setTimezoneValue] = useState<DateTimeValue | null>(null);
  const [restrictedValue, setRestrictedValue] = useState<DateTimeValue | null>(null);
  const [twelveHourValue, setTwelveHourValue] = useState<DateTimeValue | null>(null);
  const [multiTimezoneValue, setMultiTimezoneValue] = useState<DateTimeValue | null>(null);

  const timezones = [
    'Asia/Kolkata',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  const today = DateTime.now().toJSDate();
  const maxDate = DateTime.now().plus({ days: 90 }).toJSDate();

  return (
    <div className="app">
      <div className="header">
        <h1>🕐 Chronos Picker</h1>
        <p>Modern Date & Time Picker with Timezone Support</p>
      </div>

      <div className="examples-grid">
        {/* Basic Example */}
        <div className="example-card">
          <h2>Basic Usage</h2>
          <p className="description">
            Simple date and time picker with default timezone (Asia/Kolkata)
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={basicValue?.dateTime}
              onChange={setBasicValue}
              placeholder="Select date and time"
            />
          </div>
          {basicValue && (
            <div className="output">
              <h3>Selected Value</h3>
              <div className="output-item">
                <span className="output-label">ISO:</span>
                <span className="output-value">{basicValue.iso}</span>
              </div>
              <div className="output-item">
                <span className="output-label">Formatted:</span>
                <span className="output-value">{basicValue.formatted}</span>
              </div>
              <div className="output-item">
                <span className="output-label">Timestamp:</span>
                <span className="output-value">{basicValue.timestamp}</span>
              </div>
            </div>
          )}
        </div>

        {/* Date Only */}
        <div className="example-card">
          <h2>Date Only</h2>
          <p className="description">
            Pick only the date without time selection
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={dateOnlyValue?.dateTime}
              onChange={setDateOnlyValue}
              showTime={false}
              dateFormat="MMMM d, yyyy"
              placeholder="Select date"
            />
          </div>
          {dateOnlyValue && (
            <div className="output">
              <h3>Selected Date</h3>
              <div className="output-item">
                <span className="output-label">Formatted:</span>
                <span className="output-value">{dateOnlyValue.formatted}</span>
              </div>
              <div className="output-item">
                <span className="output-label">Day of Week:</span>
                <span className="output-value">
                  {dateOnlyValue.dateTime.weekdayLong}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Timezone Selector */}
        <div className="example-card">
          <h2>With Timezone Selector</h2>
          <p className="description">
            Select date, time, and timezone from a dropdown
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={timezoneValue?.dateTime}
              onChange={setTimezoneValue}
              showTimezoneSelector
              timezone="UTC"
              placeholder="Select with timezone"
            />
          </div>
          {timezoneValue && (
            <div className="output">
              <h3>Selected Value</h3>
              <div className="output-item">
                <span className="output-label">Time:</span>
                <span className="output-value">{timezoneValue.formatted}</span>
              </div>
              <div className="output-item">
                <span className="output-label">Timezone:</span>
                <span className="output-value">
                  {timezoneValue.dateTime.zoneName}
                </span>
              </div>
              <div className="output-item">
                <span className="output-label">Offset:</span>
                <span className="output-value">
                  UTC{timezoneValue.dateTime.offset >= 0 ? '+' : ''}
                  {timezoneValue.dateTime.offset / 60}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Date Range Restrictions */}
        <div className="example-card">
          <h2>Date Range Restrictions</h2>
          <p className="description">
            Limited to dates from today to 90 days in the future
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={restrictedValue?.dateTime}
              onChange={setRestrictedValue}
              minDate={today}
              maxDate={maxDate}
              placeholder="Select booking date"
            />
          </div>
          {restrictedValue && (
            <div className="output">
              <h3>Booking Details</h3>
              <div className="output-item">
                <span className="output-label">Date:</span>
                <span className="output-value">{restrictedValue.formatted}</span>
              </div>
              <div className="output-item">
                <span className="output-label">Days from now:</span>
                <span className="output-value">
                  {Math.floor(
                    restrictedValue.dateTime.diff(DateTime.now(), 'days').days
                  )}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 12-Hour Format */}
        <div className="example-card">
          <h2>12-Hour Format</h2>
          <p className="description">
            Time picker with AM/PM selector
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={twelveHourValue?.dateTime}
              onChange={setTwelveHourValue}
              use24Hour={false}
              timeFormat="hh:mm a"
              placeholder="Select time (12-hour)"
            />
          </div>
          {twelveHourValue && (
            <div className="output">
              <h3>Selected Time</h3>
              <div className="output-item">
                <span className="output-label">12-Hour:</span>
                <span className="output-value">
                  {twelveHourValue.dateTime.toFormat('hh:mm a')}
                </span>
              </div>
              <div className="output-item">
                <span className="output-label">24-Hour:</span>
                <span className="output-value">
                  {twelveHourValue.dateTime.toFormat('HH:mm')}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Multiple Timezones */}
        <div className="example-card">
          <h2>Multiple Timezones</h2>
          <p className="description">
            See your selected time across different timezones
          </p>
          <div className="picker-wrapper">
            <DateTimePicker
              value={multiTimezoneValue?.dateTime}
              onChange={setMultiTimezoneValue}
              timezone="Asia/Kolkata"
              placeholder="Select meeting time"
            />
          </div>
          {multiTimezoneValue && (
            <div className="output">
              <h3>Global Meeting Times</h3>
              <div className="timezone-grid">
                {timezones.map((tz) => {
                  const converted = multiTimezoneValue.dateTime.setZone(tz);
                  return (
                    <div key={tz} className="timezone-item">
                      <span className="timezone-name">{tz}</span>
                      <span className="timezone-time">
                        {converted.toFormat('DD HH:mm')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">🌍</span>
            <div className="feature-content">
              <h3>Timezone Support</h3>
              <p>Full IANA timezone database with automatic DST handling</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">♿</span>
            <div className="feature-content">
              <h3>Accessible</h3>
              <p>WCAG 2.1 compliant with full keyboard navigation</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎨</span>
            <div className="feature-content">
              <h3>Modern Design</h3>
              <p>Beautiful UI with smooth animations and transitions</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <div className="feature-content">
              <h3>Responsive</h3>
              <p>Works seamlessly on desktop and mobile devices</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌙</span>
            <div className="feature-content">
              <h3>Dark Mode</h3>
              <p>Automatic dark mode support based on system preferences</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <div className="feature-content">
              <h3>Lightweight</h3>
              <p>Minimal dependencies with optimized bundle size</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
