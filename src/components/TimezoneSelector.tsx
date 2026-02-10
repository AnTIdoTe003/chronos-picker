import React, { useState } from 'react';
import { COMMON_TIMEZONES, formatTimezoneOffset } from '../utils/timezone';

interface TimezoneSelectorProps {
  value: string;
  onChange: (timezone: string) => void;
}

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
  value,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const currentTz = COMMON_TIMEZONES.find((tz) => tz.value === value) || {
    value,
    label: value,
  };
  
  const handleSelect = (timezone: string) => {
    onChange(timezone);
    setIsExpanded(false);
  };
  
  return (
    <div className="chronos-timezone-selector">
      <div className="chronos-timezone-header">
        <svg
          className="chronos-globe-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>Timezone</span>
      </div>
      
      <button
        type="button"
        className="chronos-timezone-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label="Select timezone"
      >
        <span className="chronos-timezone-label">{currentTz.label}</span>
        <span className="chronos-timezone-offset">
          {formatTimezoneOffset(value)}
        </span>
        <svg
          className={`chronos-chevron ${isExpanded ? 'expanded' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="chronos-timezone-list" role="listbox">
          {COMMON_TIMEZONES.map((tz) => (
            <button
              key={tz.value}
              type="button"
              className={`chronos-timezone-option ${
                tz.value === value ? 'selected' : ''
              }`}
              onClick={() => handleSelect(tz.value)}
              role="option"
              aria-selected={tz.value === value}
            >
              <span className="chronos-timezone-option-label">{tz.label}</span>
              <span className="chronos-timezone-option-offset">
                {formatTimezoneOffset(tz.value)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
