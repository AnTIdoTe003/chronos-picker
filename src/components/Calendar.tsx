import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { generateCalendarMonth, getWeekdayNames, getMonthNames } from '../utils/calendar';
import { Holiday } from '../types';

interface CalendarProps {
  viewDate: DateTime;
  selectedDate: DateTime | null;
  onDateSelect: (date: DateTime) => void;
  onViewDateChange: (date: DateTime) => void;
  timezone: string;
  minDate?: DateTime;
  maxDate?: DateTime;
  /** Range mode: start and end for range selection */
  selectedStart?: DateTime | null;
  selectedEnd?: DateTime | null;
  onRangeSelect?: (start: DateTime, end: DateTime) => void;
  holidays?: Holiday[];
}

export const Calendar: React.FC<CalendarProps> = ({
  viewDate,
  selectedDate,
  onDateSelect,
  onViewDateChange,
  timezone,
  minDate,
  maxDate,
  selectedStart,
  selectedEnd,
  onRangeSelect,
  holidays,
}) => {
  const isRangeMode = onRangeSelect != null;

  const weeks = useMemo(() => {
    return generateCalendarMonth(
      viewDate.year,
      viewDate.month,
      timezone,
      selectedDate ?? undefined,
      minDate,
      maxDate,
      selectedStart ?? undefined,
      selectedEnd ?? undefined,
      holidays
    );
  }, [viewDate, selectedDate, timezone, minDate, maxDate, selectedStart, selectedEnd, holidays]);

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
    if (isDisabled) return;
    if (isRangeMode && onRangeSelect) {
      const day = date.startOf('day');
      if (selectedStart == null) {
        onRangeSelect(date, date);
      } else if (selectedEnd != null && selectedStart.hasSame(selectedEnd, 'day')) {
        const start = selectedStart.startOf('day');
        if (day < start) {
          onRangeSelect(date, selectedStart);
        } else {
          onRangeSelect(selectedStart, date);
        }
      } else {
        onRangeSelect(date, date);
      }
    } else {
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
                className={`chronos-day ${day.isSelected ? 'selected' : ''
                  } ${day.isToday ? 'today' : ''} ${!day.isCurrentMonth ? 'other-month' : ''
                  } ${day.isDisabled ? 'disabled' : ''} ${day.isInRange ? 'in-range' : ''
                  } ${day.isRangeStart ? 'range-start' : ''} ${day.isRangeEnd ? 'range-end' : ''
                  } ${day.holiday ? `holiday ${day.holiday.type}` : ''}`}
                onClick={() => handleDateClick(day.date, day.isDisabled)}
                onKeyDown={(e) => handleKeyDown(e, day.date, day.isDisabled)}
                disabled={day.isDisabled}
                aria-label={`${day.date.toFormat('MMMM d, yyyy')}${day.holiday ? `, ${day.holiday.name}` : ''}`}
                aria-selected={day.isSelected}
                aria-current={day.isToday ? 'date' : undefined}
                title={day.holiday ? day.holiday.name : undefined}
              >
                {day.date.day}
                {day.holiday && <span className="chronos-holiday-dot" />}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
