import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { generateCalendarMonth, getWeekdayNames, getMonthNames } from '../utils/calendar';

interface CalendarProps {
  viewDate: DateTime;
  selectedDate: DateTime | null;
  onDateSelect: (date: DateTime) => void;
  onViewDateChange: (date: DateTime) => void;
  timezone: string;
  minDate?: DateTime;
  maxDate?: DateTime;
}

export const Calendar: React.FC<CalendarProps> = ({
  viewDate,
  selectedDate,
  onDateSelect,
  onViewDateChange,
  timezone,
  minDate,
  maxDate,
}) => {
  const weeks = useMemo(() => {
    return generateCalendarMonth(
      viewDate.year,
      viewDate.month,
      timezone,
      selectedDate ?? undefined,
      minDate,
      maxDate
    );
  }, [viewDate, selectedDate, timezone, minDate, maxDate]);
  
  const weekdayNames = useMemo(() => getWeekdayNames(), []);
  const monthNames = useMemo(() => getMonthNames(), []);
  
  const handlePrevMonth = () => {
    onViewDateChange(viewDate.minus({ months: 1 }));
  };
  
  const handleNextMonth = () => {
    onViewDateChange(viewDate.plus({ months: 1 }));
  };
  
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    onViewDateChange(viewDate.set({ month: newMonth }));
  };
  
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    onViewDateChange(viewDate.set({ year: newYear }));
  };
  
  const handleDateClick = (date: DateTime, isDisabled: boolean) => {
    if (!isDisabled) {
      onDateSelect(date);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, date: DateTime, isDisabled: boolean) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDateClick(date, isDisabled);
    }
  };
  
  const currentYear = viewDate.year;
  const yearOptions = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  
  return (
    <div className="chronos-calendar" role="region" aria-label="Calendar">
      <div className="chronos-calendar-header">
        <button
          type="button"
          className="chronos-nav-button"
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        
        <div className="chronos-month-year-selectors">
          <select
            className="chronos-month-select"
            value={viewDate.month}
            onChange={handleMonthChange}
            aria-label="Select month"
          >
            {monthNames.map((name, index) => (
              <option key={index} value={index + 1}>
                {name}
              </option>
            ))}
          </select>
          
          <select
            className="chronos-year-select"
            value={viewDate.year}
            onChange={handleYearChange}
            aria-label="Select year"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="button"
          className="chronos-nav-button"
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
      
      <div className="chronos-calendar-grid">
        <div className="chronos-weekday-row">
          {weekdayNames.map((name) => (
            <div key={name} className="chronos-weekday">
              {name}
            </div>
          ))}
        </div>
        
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="chronos-week-row">
            {week.map((day, dayIndex) => (
              <button
                key={dayIndex}
                type="button"
                className={`chronos-day ${
                  day.isSelected ? 'selected' : ''
                } ${day.isToday ? 'today' : ''} ${
                  !day.isCurrentMonth ? 'other-month' : ''
                } ${day.isDisabled ? 'disabled' : ''}`}
                onClick={() => handleDateClick(day.date, day.isDisabled)}
                onKeyDown={(e) => handleKeyDown(e, day.date, day.isDisabled)}
                disabled={day.isDisabled}
                aria-label={day.date.toFormat('MMMM d, yyyy')}
                aria-selected={day.isSelected}
                aria-current={day.isToday ? 'date' : undefined}
              >
                {day.date.day}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
