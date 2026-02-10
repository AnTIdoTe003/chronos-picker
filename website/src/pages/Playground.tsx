import React, { useState } from 'react';
import { DateTimePicker } from '@theengineerguy/chronos-picker';
import type { DateTimeValue } from '@theengineerguy/chronos-picker';
import { DateTime } from 'luxon';
import './Playground.css';

const Playground: React.FC = () => {
  const [value, setValue] = useState<DateTimeValue | null>(null);
  
  // Configuration state
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [showTime, setShowTime] = useState(true);
  const [use24Hour, setUse24Hour] = useState(true);
  const [showTimezoneSelector, setShowTimezoneSelector] = useState(false);
  const [dateFormat, setDateFormat] = useState('DD');
  const [timeFormat, setTimeFormat] = useState('HH:mm');
  const [minDateEnabled, setMinDateEnabled] = useState(false);
  const [maxDateEnabled, setMaxDateEnabled] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const today = DateTime.now().toJSDate();
  const futureDate = DateTime.now().plus({ days: 90 }).toJSDate();

  const generateCode = () => {
    const props = [];
    
    if (value) {
      props.push(`value={value?.dateTime}`);
    }
    props.push(`onChange={setValue}`);
    
    if (timezone !== 'Asia/Kolkata') {
      props.push(`timezone="${timezone}"`);
    }
    
    if (!showTime) {
      props.push(`showTime={false}`);
    }
    
    if (!use24Hour) {
      props.push(`use24Hour={false}`);
    }
    
    if (showTimezoneSelector) {
      props.push(`showTimezoneSelector`);
    }
    
    if (dateFormat !== 'DD') {
      props.push(`dateFormat="${dateFormat}"`);
    }
    
    if (timeFormat !== 'HH:mm') {
      props.push(`timeFormat="${timeFormat}"`);
    }
    
    if (minDateEnabled) {
      props.push(`minDate={new Date()}`);
    }
    
    if (maxDateEnabled) {
      props.push(`maxDate={futureDate}`);
    }
    
    if (disabled) {
      props.push(`disabled`);
    }
    
    return `<DateTimePicker\n  ${props.join('\n  ')}\n/>`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
  };

  return (
    <div className="playground">
      <div className="playground-hero">
        <div className="container">
          <h1>Playground</h1>
          <p>Experiment with Chronos Picker and see changes in real-time</p>
        </div>
      </div>

      <div className="container playground-container">
        <div className="playground-grid">
          {/* Configuration Panel */}
          <div className="playground-config">
            <h2>Configuration</h2>
            
            <div className="config-section">
              <h3>Basic Settings</h3>
              
              <div className="config-group">
                <label>
                  Timezone
                  <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                    <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                    <option value="America/New_York">America/New_York (ET)</option>
                    <option value="America/Chicago">America/Chicago (CT)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (PT)</option>
                    <option value="Europe/London">Europe/London (GMT)</option>
                    <option value="Europe/Paris">Europe/Paris (CET)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    <option value="Australia/Sydney">Australia/Sydney (AEDT)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </label>
              </div>
              
              <div className="config-group">
                <label>
                  Date Format
                  <select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)}>
                    <option value="DD">MM/DD/YYYY</option>
                    <option value="dd/MM/yyyy">DD/MM/YYYY</option>
                    <option value="yyyy-MM-dd">YYYY-MM-DD</option>
                    <option value="MMMM d, yyyy">Month D, YYYY</option>
                    <option value="d MMM yyyy">D Mon YYYY</option>
                  </select>
                </label>
              </div>
              
              <div className="config-group">
                <label>
                  Time Format
                  <select value={timeFormat} onChange={(e) => setTimeFormat(e.target.value)}>
                    <option value="HH:mm">HH:MM (24-hour)</option>
                    <option value="HH:mm:ss">HH:MM:SS (24-hour)</option>
                    <option value="hh:mm a">hh:mm AM/PM</option>
                    <option value="h:mm a">h:mm AM/PM</option>
                  </select>
                </label>
              </div>
            </div>
            
            <div className="config-section">
              <h3>Features</h3>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={showTime}
                    onChange={(e) => setShowTime(e.target.checked)}
                  />
                  <span>Show Time Picker</span>
                </label>
              </div>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={use24Hour}
                    onChange={(e) => setUse24Hour(e.target.checked)}
                  />
                  <span>Use 24-Hour Format</span>
                </label>
              </div>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={showTimezoneSelector}
                    onChange={(e) => setShowTimezoneSelector(e.target.checked)}
                  />
                  <span>Show Timezone Selector</span>
                </label>
              </div>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={minDateEnabled}
                    onChange={(e) => setMinDateEnabled(e.target.checked)}
                  />
                  <span>Set Minimum Date (Today)</span>
                </label>
              </div>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={maxDateEnabled}
                    onChange={(e) => setMaxDateEnabled(e.target.checked)}
                  />
                  <span>Set Maximum Date (+90 days)</span>
                </label>
              </div>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={disabled}
                    onChange={(e) => setDisabled(e.target.checked)}
                  />
                  <span>Disabled State</span>
                </label>
              </div>
            </div>
            
            <div className="config-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setTimezone('Asia/Kolkata');
                  setShowTime(true);
                  setUse24Hour(true);
                  setShowTimezoneSelector(false);
                  setDateFormat('DD');
                  setTimeFormat('HH:mm');
                  setMinDateEnabled(false);
                  setMaxDateEnabled(false);
                  setDisabled(false);
                  setValue(null);
                }}
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="playground-preview">
            <h2>Preview</h2>
            
            <div className="preview-demo">
              <DateTimePicker
                value={value?.dateTime}
                onChange={setValue}
                timezone={timezone}
                showTime={showTime}
                use24Hour={use24Hour}
                showTimezoneSelector={showTimezoneSelector}
                dateFormat={dateFormat}
                timeFormat={timeFormat}
                minDate={minDateEnabled ? today : undefined}
                maxDate={maxDateEnabled ? futureDate : undefined}
                disabled={disabled}
                placeholder="Select date and time"
              />
            </div>
            
            {value && (
              <div className="preview-output">
                <h3>Selected Value:</h3>
                <div className="output-grid">
                  <div className="output-field">
                    <span className="output-label">ISO String:</span>
                    <code className="output-value">{value.iso}</code>
                  </div>
                  <div className="output-field">
                    <span className="output-label">Formatted:</span>
                    <code className="output-value">{value.formatted}</code>
                  </div>
                  <div className="output-field">
                    <span className="output-label">Timestamp:</span>
                    <code className="output-value">{value.timestamp}</code>
                  </div>
                  <div className="output-field">
                    <span className="output-label">Timezone:</span>
                    <code className="output-value">{value.dateTime.zoneName}</code>
                  </div>
                  <div className="output-field">
                    <span className="output-label">Offset:</span>
                    <code className="output-value">
                      UTC{value.dateTime.offset >= 0 ? '+' : ''}{value.dateTime.offset / 60}
                    </code>
                  </div>
                  <div className="output-field">
                    <span className="output-label">Day of Week:</span>
                    <code className="output-value">{value.dateTime.weekdayLong}</code>
                  </div>
                </div>
              </div>
            )}
            
            <div className="preview-code">
              <div className="code-header">
                <h3>Generated Code:</h3>
                <button onClick={copyCode} className="copy-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </button>
              </div>
              <pre><code>{generateCode()}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
