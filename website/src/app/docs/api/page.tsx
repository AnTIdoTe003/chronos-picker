import styles from "../docs.module.css";

const props = [
  { name: "value", type: "DateTimeValue | null", default: "null", description: "The current value of the picker." },
  { name: "onChange", type: "(value: DateTimeValue) => void", default: "-", description: "Callback fired when a date is selected." },
  { name: "timezone", type: "string", default: "Asia/Kolkata", description: "IANA timezone identifier (e.g., 'America/New_York')." },
  { name: "showTime", type: "boolean", default: "true", description: "Whether to show the time picker." },
  { name: "dateFormat", type: "string", default: "DD", description: "Luxon date format string." },
  { name: "timeFormat", type: "string", default: "HH:mm", description: "Luxon time format string." },
  { name: "minDate", type: "Date | string", default: "-", description: "Minimum selectable date." },
  { name: "maxDate", type: "Date | string", default: "-", description: "Maximum selectable date." },
  { name: "placeholder", type: "string", default: "Select...", description: "Input placeholder text." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the picker." },
  { name: "showTimezoneSelector", type: "boolean", default: "false", description: "Shows a dropdown to switch timezones." },
  { name: "theme", type: "'light' | 'dark'", default: "light", description: "Color theme of the picker." },
  { name: "orientation", type: "'portrait' | 'landscape'", default: "portrait", description: "Layout orientation." },
  { name: "selectionMode", type: "'single' | 'range'", default: "single", description: "Date selection mode." },
  { name: "rangeValue", type: "DateTimeRangeValue | null", default: "null", description: "The current range value (when selectionMode='range')." },
  { name: "onRangeChange", type: "(value: DateTimeRangeValue) => void", default: "-", description: "Callback fired when range changes." },
  { name: "use24Hour", type: "boolean", default: "false", description: "Use 24-hour format for time picker." },
  { name: "ariaLabel", type: "string", default: "-", description: "ARIA label for accessibility." },
  { name: "className", type: "string", default: "-", description: "Additional CSS class for the wrapper." },
];

export default function ApiReference() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>API Reference</h1>
      <p className={styles.description}>
        Detailed documentation for the <code>DateTimePicker</code> component props.
      </p>

      <section className={styles.section}>
        <h2>DateTimePicker</h2>
        <p>The main component for selecting dates and times.</p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: '#2563eb' }}>{prop.name}</td>
                  <td><span className={styles.codeType}>{prop.type}</span></td>
                  <td>{prop.default}</td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>DateTimeValue</h2>
        <p>The value object returned by the <code>onChange</code> callback.</p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>dateTime</td>
                <td><span className={styles.codeType}>DateTime</span></td>
                <td>The Luxon DateTime object.</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>iso</td>
                <td><span className={styles.codeType}>string</span></td>
                <td>ISO 8601 string representation.</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>formatted</td>
                <td><span className={styles.codeType}>string</span></td>
                <td>Formatted string based on dateFormat and timeFormat.</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>timestamp</td>
                <td><span className={styles.codeType}>number</span></td>
                <td>Unix timestamp in milliseconds.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>DateTimeRangeValue</h2>
        <p>The value object returned by the <code>onRangeChange</code> callback.</p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>start</td>
                <td><span className={styles.codeType}>DateTimeValue</span></td>
                <td>Start date of the range.</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>end</td>
                <td><span className={styles.codeType}>DateTimeValue</span></td>
                <td>End date of the range.</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>nights</td>
                <td><span className={styles.codeType}>number</span></td>
                <td>Number of nights in the range.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
