import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

interface TimePickerProps {
  value: DateTime | null;
  onChange: (hour: number, minute: number) => void;
  use24Hour: boolean;
  timezone: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  use24Hour,
}) => {
  const [hour, setHour] = useState(value?.hour ?? 12);
  const [minute, setMinute] = useState(value?.minute ?? 0);
  const [period, setPeriod] = useState<'AM' | 'PM'>(
    value && value.hour >= 12 ? 'PM' : 'AM'
  );
  
  useEffect(() => {
    if (value) {
      setHour(value.hour);
      setMinute(value.minute);
      setPeriod(value.hour >= 12 ? 'PM' : 'AM');
    }
  }, [value]);
  
  const handleHourChange = (newHour: number) => {
    setHour(newHour);
    
    let hour24 = newHour;
    if (!use24Hour) {
      if (period === 'PM' && newHour !== 12) {
        hour24 = newHour + 12;
      } else if (period === 'AM' && newHour === 12) {
        hour24 = 0;
      }
    }
    
    onChange(hour24, minute);
  };
  
  const handleMinuteChange = (newMinute: number) => {
    setMinute(newMinute);
    onChange(hour, newMinute);
  };
  
  const handlePeriodToggle = () => {
    const newPeriod = period === 'AM' ? 'PM' : 'AM';
    setPeriod(newPeriod);
    
    let hour24 = hour;
    if (newPeriod === 'PM' && hour !== 12) {
      hour24 = hour + 12;
    } else if (newPeriod === 'AM' && hour === 12) {
      hour24 = 0;
    } else if (newPeriod === 'AM' && hour > 12) {
      hour24 = hour - 12;
    }
    
    onChange(hour24, minute);
  };
  
  const displayHour = use24Hour ? hour : (hour % 12 || 12);
  const maxHour = use24Hour ? 23 : 12;
  const minHour = use24Hour ? 0 : 1;
  
  const hours = Array.from({ length: maxHour - minHour + 1 }, (_, i) => minHour + i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  
  return (
    <div className="chronos-time-picker" role="group" aria-label="Time picker">
      <div className="chronos-time-header">
        <svg 
          className="chronos-clock-icon"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>Time</span>
      </div>
      
      <div className="chronos-time-controls">
        <div className="chronos-time-input-group">
          <label htmlFor="chronos-hour-select" className="chronos-time-label">
            Hour
          </label>
          <select
            id="chronos-hour-select"
            className="chronos-time-select"
            value={displayHour}
            onChange={(e) => handleHourChange(parseInt(e.target.value, 10))}
            aria-label="Select hour"
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h.toString().padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>
        
        <span className="chronos-time-separator">:</span>
        
        <div className="chronos-time-input-group">
          <label htmlFor="chronos-minute-select" className="chronos-time-label">
            Minute
          </label>
          <select
            id="chronos-minute-select"
            className="chronos-time-select"
            value={minute}
            onChange={(e) => handleMinuteChange(parseInt(e.target.value, 10))}
            aria-label="Select minute"
          >
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m.toString().padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>
        
        {!use24Hour && (
          <button
            type="button"
            className="chronos-period-toggle"
            onClick={handlePeriodToggle}
            aria-label={`Switch to ${period === 'AM' ? 'PM' : 'AM'}`}
          >
            {period}
          </button>
        )}
      </div>
    </div>
  );
};
