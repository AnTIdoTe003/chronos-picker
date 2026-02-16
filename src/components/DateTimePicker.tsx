import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DateTime } from 'luxon';
import { DateTimePickerProps, DateTimeValue } from '../types';
import { DEFAULT_TIMEZONE, convertToTimezone, nowInTimezone } from '../utils/timezone';
import { Calendar } from './Calendar';
import { TimePicker } from './TimePicker';
import { TimezoneSelector } from './TimezoneSelector';
import '../styles/DateTimePicker.css';

function toDateTimeValue(dt: DateTime, dateFormat: string, timeFormat: string): DateTimeValue {
  return {
    iso: dt.toISO() || '',
    formatted: dt.toFormat(`${dateFormat} ${timeFormat}`),
    timestamp: dt.toMillis(),
    dateTime: dt,
  };
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  timezone = DEFAULT_TIMEZONE,
  dateFormat = 'DD',
  timeFormat = 'HH:mm',
  minDate,
  maxDate,
  placeholder = 'Select date and time',
  disabled = false,
  showTime = true,
  use24Hour = true,
  className = '',
  ariaLabel = 'Date and time picker',
  showTimezoneSelector = false,
  theme = 'light',
  orientation = 'portrait',
  selectionMode = 'single',
  rangeValue,
  onRangeChange,
  holidays,
}) => {
  const isRangeMode = selectionMode === 'range';
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime | null>(() => {
    if (!isRangeMode && value) {
      return convertToTimezone(value, timezone);
    }
    return null;
  });
  const [rangeStart, setRangeStart] = useState<DateTime | null>(() => {
    if (isRangeMode && rangeValue?.start) {
      return convertToTimezone(rangeValue.start, timezone);
    }
    return null;
  });
  const [rangeEnd, setRangeEnd] = useState<DateTime | null>(() => {
    if (isRangeMode && rangeValue?.end) {
      return convertToTimezone(rangeValue.end, timezone);
    }
    return null;
  });
  const [currentTimezone, setCurrentTimezone] = useState(timezone);
  const [viewDate, setViewDate] = useState<DateTime>(() => {
    return selectedDateTime || rangeStart || rangeEnd || nowInTimezone(timezone);
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update selected date when value prop changes
  useEffect(() => {
    if (!isRangeMode && value) {
      setSelectedDateTime(convertToTimezone(value, currentTimezone));
    }
  }, [value, currentTimezone, isRangeMode]);

  // Sync range from prop when in range mode
  useEffect(() => {
    if (isRangeMode && rangeValue?.start != null && rangeValue?.end != null) {
      setRangeStart(convertToTimezone(rangeValue.start, currentTimezone));
      setRangeEnd(convertToTimezone(rangeValue.end, currentTimezone));
    }
  }, [isRangeMode, rangeValue, currentTimezone]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleDateSelect = useCallback((date: DateTime) => {
    let newDateTime = date;

    // Preserve time if already selected
    if (selectedDateTime) {
      newDateTime = date.set({
        hour: selectedDateTime.hour,
        minute: selectedDateTime.minute,
        second: selectedDateTime.second,
      });
    }

    setSelectedDateTime(newDateTime);
    setViewDate(newDateTime);

    if (!showTime) {
      setIsOpen(false);
    }

    if (onChange) {
      const value: DateTimeValue = {
        iso: newDateTime.toISO() || '',
        formatted: newDateTime.toFormat(`${dateFormat} ${timeFormat}`),
        timestamp: newDateTime.toMillis(),
        dateTime: newDateTime,
      };
      onChange(value);
    }
  }, [selectedDateTime, showTime, onChange, dateFormat, timeFormat]);

  const handleTimeChange = useCallback((hour: number, minute: number) => {
    const baseDate = selectedDateTime || nowInTimezone(currentTimezone);
    const newDateTime = baseDate.set({ hour, minute, second: 0 });

    setSelectedDateTime(newDateTime);

    if (onChange) {
      const value: DateTimeValue = {
        iso: newDateTime.toISO() || '',
        formatted: newDateTime.toFormat(`${dateFormat} ${timeFormat}`),
        timestamp: newDateTime.toMillis(),
        dateTime: newDateTime,
      };
      onChange(value);
    }
  }, [selectedDateTime, currentTimezone, onChange, dateFormat, timeFormat]);

  const handleRangeSelect = useCallback((start: DateTime, end: DateTime) => {
    const s = start.startOf('day');
    const e = end.startOf('day');
    const [actualStart, actualEnd] = s <= e ? [s, e] : [e, s];
    setRangeStart(actualStart);
    setRangeEnd(actualEnd);
    setViewDate(actualStart);
    if (onRangeChange) {
      const startVal = toDateTimeValue(actualStart, dateFormat, timeFormat);
      const endVal = toDateTimeValue(actualEnd, dateFormat, timeFormat);
      const nights = Math.max(0, Math.ceil(actualEnd.diff(actualStart, 'days').days));
      onRangeChange({ start: startVal, end: endVal, nights });
    }
  }, [onRangeChange, dateFormat, timeFormat]);

  const handleTimezoneChange = useCallback((newTimezone: string) => {
    setCurrentTimezone(newTimezone);

    if (selectedDateTime) {
      const converted = selectedDateTime.setZone(newTimezone);
      setSelectedDateTime(converted);
      setViewDate(converted);

      if (onChange) {
        const value: DateTimeValue = {
          iso: converted.toISO() || '',
          formatted: converted.toFormat(`${dateFormat} ${timeFormat}`),
          timestamp: converted.toMillis(),
          dateTime: converted,
        };
        onChange(value);
      }
    } else {
      setViewDate(nowInTimezone(newTimezone));
    }
  }, [selectedDateTime, onChange, dateFormat, timeFormat]);

  const togglePicker = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePicker();
    }
  };

  const displayValue = isRangeMode
    ? (rangeStart && rangeEnd
      ? `${rangeStart.toFormat('d MMM yyyy')} – ${rangeEnd.toFormat('d MMM yyyy')}`
      : '')
    : (selectedDateTime
      ? selectedDateTime.toFormat(`${dateFormat} ${showTime ? timeFormat : ''}`)
      : '');

  const minDateTime = minDate ? convertToTimezone(minDate, currentTimezone) : undefined;
  const maxDateTime = maxDate ? convertToTimezone(maxDate, currentTimezone) : undefined;

  return (
    <div
      ref={containerRef}
      className={`chronos-picker ${className}`}
      data-disabled={disabled}
      data-theme={theme}
    >
      <div
        className="chronos-input-wrapper"
        onClick={togglePicker}
      >
        <input
          ref={inputRef}
          type="text"
          className="chronos-input"
          value={displayValue}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          onKeyDown={handleInputKeyDown}
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          role="combobox"
        />
        <svg
          className="chronos-calendar-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {isOpen && (
        <div
          className="chronos-dropdown"
          data-orientation={orientation}
          data-range-mode={isRangeMode}
          role="dialog"
          aria-label="Date and time picker dialog"
        >
          <div className="chronos-dropdown-content">
            {isRangeMode && rangeStart && rangeEnd && (
              <div className="chronos-range-summary">
                <div className="chronos-range-nights">
                  {Math.max(0, Math.ceil(rangeEnd.diff(rangeStart, 'days').days))} nights
                </div>
                <div className="chronos-range-dates">
                  {rangeStart.toFormat('d MMM yyyy')} – {rangeEnd.toFormat('d MMM yyyy')}
                </div>
              </div>
            )}
            <Calendar
              viewDate={viewDate}
              selectedDate={isRangeMode ? null : selectedDateTime}
              onDateSelect={handleDateSelect}
              onViewDateChange={setViewDate}
              timezone={currentTimezone}
              minDate={minDateTime}
              maxDate={maxDateTime}
              selectedStart={isRangeMode ? rangeStart : undefined}
              selectedEnd={isRangeMode ? rangeEnd : undefined}
              onRangeSelect={isRangeMode ? handleRangeSelect : undefined}
              holidays={holidays}
            />

            {!isRangeMode && (showTime || showTimezoneSelector) && (
              <div className="chronos-sidebar">
                {showTime && (
                  <TimePicker
                    value={selectedDateTime}
                    onChange={handleTimeChange}
                    use24Hour={use24Hour}
                    timezone={currentTimezone}
                  />
                )}

                {showTimezoneSelector && (
                  <TimezoneSelector
                    value={currentTimezone}
                    onChange={handleTimezoneChange}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
