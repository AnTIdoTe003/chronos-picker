import { useState } from "react";
import { DateTimePicker } from "@theengineerguy/chronos-picker";
import type { DateTimeValue } from "@theengineerguy/chronos-picker";
import CodeBlock from "../components/CodeBlock";
import "./Documentation.css";

function Documentation() {
  const [exampleValue, setExampleValue] = useState<DateTimeValue | null>(null);

  return (
    <div className="documentation">
      <div className="doc-hero">
        <div className="container container-narrow">
          <h1>Documentation</h1>
          <p>
            Everything you need to know about using Chronos Picker in your React
            projects.
          </p>
        </div>
      </div>

      <div className="container doc-container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <a href="#installation" className="doc-nav-link">
              Installation
            </a>
            <a href="#quick-start" className="doc-nav-link">
              Quick Start
            </a>
            <a href="#props" className="doc-nav-link">
              Props
            </a>
            <a href="#types" className="doc-nav-link">
              Types
            </a>
            <a href="#utilities" className="doc-nav-link">
              Utility Functions
            </a>
            <a href="#timezones" className="doc-nav-link">
              Timezones
            </a>
            <a href="#styling" className="doc-nav-link">
              Styling
            </a>
            <a href="#accessibility" className="doc-nav-link">
              Accessibility
            </a>
            <a href="#examples" className="doc-nav-link">
              Examples
            </a>
          </nav>
        </aside>

        <main className="doc-content">
          <section id="installation" className="doc-section">
            <h2>Installation</h2>
            <p>
              Install Chronos Picker and its peer dependency Luxon via npm,
              yarn, or pnpm:
            </p>

            <CodeBlock
              language="bash"
              code="npm install @theengineerguy/chronos-picker luxon"
            />

            <p>Or with yarn:</p>
            <CodeBlock
              language="bash"
              code="yarn add @theengineerguy/chronos-picker luxon"
            />
          </section>

          <section id="quick-start" className="doc-section">
            <h2>Quick Start</h2>
            <p>
              Import the component and start using it in your React application:
            </p>

            <CodeBlock
              language="tsx"
              code={`import { DateTimePicker } from '@theengineerguy/chronos-picker';
import type { DateTimeValue } from '@theengineerguy/chronos-picker';

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
}`}
            />

            <div className="doc-demo">
              <h3>Try it:</h3>
              <DateTimePicker
                value={exampleValue?.dateTime}
                onChange={setExampleValue}
                placeholder="Select date and time"
              />
            </div>
          </section>

          <section id="props" className="doc-section">
            <h2>Props</h2>
            <p>
              Complete list of props accepted by the DateTimePicker component:
            </p>

            <div className="props-table">
              <table>
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>value</code>
                    </td>
                    <td>
                      <code>Date | string | DateTime</code>
                    </td>
                    <td>
                      <code>undefined</code>
                    </td>
                    <td>Current selected value</td>
                  </tr>
                  <tr>
                    <td>
                      <code>onChange</code>
                    </td>
                    <td>
                      <code>(value: DateTimeValue) =&gt; void</code>
                    </td>
                    <td>
                      <code>undefined</code>
                    </td>
                    <td>Callback when value changes</td>
                  </tr>
                  <tr>
                    <td>
                      <code>timezone</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>"Asia/Kolkata"</code>
                    </td>
                    <td>IANA timezone identifier</td>
                  </tr>
                  <tr>
                    <td>
                      <code>dateFormat</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>"DD"</code>
                    </td>
                    <td>Date format (Luxon tokens)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>timeFormat</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>"HH:mm"</code>
                    </td>
                    <td>Time format (Luxon tokens)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>minDate</code>
                    </td>
                    <td>
                      <code>Date | string</code>
                    </td>
                    <td>
                      <code>undefined</code>
                    </td>
                    <td>Minimum selectable date</td>
                  </tr>
                  <tr>
                    <td>
                      <code>maxDate</code>
                    </td>
                    <td>
                      <code>Date | string</code>
                    </td>
                    <td>
                      <code>undefined</code>
                    </td>
                    <td>Maximum selectable date</td>
                  </tr>
                  <tr>
                    <td>
                      <code>placeholder</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>"Select date and time"</code>
                    </td>
                    <td>Input placeholder text</td>
                  </tr>
                  <tr>
                    <td>
                      <code>disabled</code>
                    </td>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Disable the picker</td>
                  </tr>
                  <tr>
                    <td>
                      <code>showTime</code>
                    </td>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>
                      <code>true</code>
                    </td>
                    <td>Show time picker</td>
                  </tr>
                  <tr>
                    <td>
                      <code>use24Hour</code>
                    </td>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>
                      <code>true</code>
                    </td>
                    <td>Use 24-hour format</td>
                  </tr>
                  <tr>
                    <td>
                      <code>className</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>""</code>
                    </td>
                    <td>Custom CSS class</td>
                  </tr>
                  <tr>
                    <td>
                      <code>ariaLabel</code>
                    </td>
                    <td>
                      <code>string</code>
                    </td>
                    <td>
                      <code>"Date and time picker"</code>
                    </td>
                    <td>ARIA label</td>
                  </tr>
                  <tr>
                    <td>
                      <code>showTimezoneSelector</code>
                    </td>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Show timezone selector</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="types" className="doc-section">
            <h2>Types</h2>

            <h3>DateTimeValue</h3>
            <p>
              The value object returned by the <code>onChange</code> callback:
            </p>

            <CodeBlock
              language="typescript"
              code={`interface DateTimeValue {
  iso: string;              // ISO 8601 string
  formatted: string;        // Formatted display string
  timestamp: number;        // Unix timestamp (ms)
  dateTime: DateTime;       // Luxon DateTime object
}`}
            />

            <h3>DateTimePickerProps</h3>
            <p>Full interface for component props:</p>

            <CodeBlock
              language="typescript"
              code={`interface DateTimePickerProps {
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
}`}
            />
          </section>

          <section id="utilities" className="doc-section">
            <h2>Utility Functions</h2>

            <h3>convertToTimezone</h3>
            <p>Convert a date to a specific timezone:</p>

            <CodeBlock
              language="typescript"
              code={`import { convertToTimezone } from '@theengineerguy/chronos-picker';

const date = new Date();
const tokyo = convertToTimezone(date, 'Asia/Tokyo');
console.log(tokyo.toISO());`}
            />

            <h3>nowInTimezone</h3>
            <p>Get current date/time in a specific timezone:</p>

            <CodeBlock
              language="typescript"
              code={`import { nowInTimezone } from '@theengineerguy/chronos-picker';

const nowInIndia = nowInTimezone('Asia/Kolkata');
const nowInNY = nowInTimezone('America/New_York');`}
            />
          </section>

          <section id="timezones" className="doc-section">
            <h2>Supported Timezones</h2>
            <p>
              Chronos Picker supports all IANA timezone identifiers (400+).
              Common timezones include:
            </p>

            <ul className="timezone-list">
              <li>
                <code>Asia/Kolkata</code> - India (IST) - Default
              </li>
              <li>
                <code>America/New_York</code> - Eastern Time (ET)
              </li>
              <li>
                <code>America/Chicago</code> - Central Time (CT)
              </li>
              <li>
                <code>America/Los_Angeles</code> - Pacific Time (PT)
              </li>
              <li>
                <code>Europe/London</code> - London (GMT/BST)
              </li>
              <li>
                <code>Europe/Paris</code> - Central Europe (CET)
              </li>
              <li>
                <code>Asia/Tokyo</code> - Tokyo (JST)
              </li>
              <li>
                <code>Australia/Sydney</code> - Sydney (AEDT)
              </li>
              <li>
                <code>UTC</code> - Coordinated Universal Time
              </li>
            </ul>

            <p>
              View the complete list at{" "}
              <a
                href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
                target="_blank"
                rel="noopener noreferrer"
              >
                IANA timezone database
              </a>
              .
            </p>
          </section>

          <section id="styling" className="doc-section">
            <h2>Styling</h2>
            <p>Customize the appearance using CSS classes:</p>

            <CodeBlock
              language="css"
              code={`.my-picker .chronos-input {
  border: 2px solid #3b82f6;
  border-radius: 12px;
}

.my-picker .chronos-day.selected {
  background-color: #10b981;
}`}
            />

            <CodeBlock
              language="tsx"
              code={`<DateTimePicker
  className="my-picker"
  onChange={handleChange}
/>`}
            />
          </section>

          <section id="accessibility" className="doc-section">
            <h2>Accessibility</h2>
            <p>Chronos Picker is built with accessibility in mind:</p>

            <ul>
              <li>
                <strong>Keyboard Navigation:</strong> Full support for Tab,
                Enter, Space, Arrow keys, and Escape
              </li>
              <li>
                <strong>ARIA Labels:</strong> Comprehensive labels for screen
                readers
              </li>
              <li>
                <strong>Focus Management:</strong> Proper focus indicators and
                tab order
              </li>
              <li>
                <strong>WCAG 2.1:</strong> Meets AA level compliance
              </li>
            </ul>

            <h3>Keyboard Shortcuts</h3>
            <div className="keyboard-shortcuts">
              <div className="shortcut">
                <kbd>Tab</kbd>
                <span>Navigate forward</span>
              </div>
              <div className="shortcut">
                <kbd>Shift</kbd> + <kbd>Tab</kbd>
                <span>Navigate backward</span>
              </div>
              <div className="shortcut">
                <kbd>Enter</kbd> / <kbd>Space</kbd>
                <span>Select date or toggle</span>
              </div>
              <div className="shortcut">
                <kbd>Escape</kbd>
                <span>Close picker</span>
              </div>
              <div className="shortcut">
                <kbd>Arrow Keys</kbd>
                <span>Navigate calendar</span>
              </div>
            </div>
          </section>

          <section id="examples" className="doc-section">
            <h2>Examples</h2>
            <p>Common usage patterns and examples:</p>

            <h3>Date Only</h3>
            <CodeBlock
              language="tsx"
              code={`<DateTimePicker
  showTime={false}
  dateFormat="MMMM d, yyyy"
  onChange={(value) => console.log(value)}
/>`}
            />

            <h3>With Restrictions</h3>
            <CodeBlock
              language="tsx"
              code={`<DateTimePicker
  minDate={new Date()}
  maxDate={new Date('2024-12-31')}
  onChange={(value) => console.log(value)}
/>`}
            />

            <h3>12-Hour Format</h3>
            <CodeBlock
              language="tsx"
              code={`<DateTimePicker
  use24Hour={false}
  timeFormat="hh:mm a"
  onChange={(value) => console.log(value)}
/>`}
            />

            <div className="doc-cta">
              <h3>Want more examples?</h3>
              <p>
                Check out our comprehensive examples page with interactive
                demos.
              </p>
              <a href="/examples" className="btn btn-primary">
                View Examples
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Documentation;
