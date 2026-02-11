import { DateTime } from 'luxon';

export interface DateTimeValue {
  /** ISO 8601 string representation */
  iso: string;
  /** Formatted local string */
  formatted: string;
  /** Unix timestamp in milliseconds */
  timestamp: number;
  /** Luxon DateTime object */
  dateTime: DateTime;
}

export interface DateTimeRangeValue {
  /** Start of range */
  start: DateTimeValue;
  /** End of range */
  end: DateTimeValue;
  /** Number of nights/days in range (end - start in days) */
  nights: number;
}

export interface DateTimePickerProps {
  /** Selected date and time value */
  value?: Date | string | DateTime;
  
  /** Callback when date/time changes */
  onChange?: (value: DateTimeValue) => void;
  
  /** IANA timezone identifier (e.g., "Asia/Kolkata", "America/New_York") */
  timezone?: string;
  
  /** Custom date format for display (Luxon format tokens) */
  dateFormat?: string;
  
  /** Custom time format for display (Luxon format tokens) */
  timeFormat?: string;
  
  /** Minimum selectable date */
  minDate?: Date | string;
  
  /** Maximum selectable date */
  maxDate?: Date | string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Show time picker */
  showTime?: boolean;
  
  /** 12-hour or 24-hour format */
  use24Hour?: boolean;
  
  /** Custom CSS class */
  className?: string;
  
  /** ARIA label */
  ariaLabel?: string;
  
  /** Show timezone selector */
  showTimezoneSelector?: boolean;

  /** Theme: 'light' (default) or 'dark' */
  theme?: 'light' | 'dark';

  /** Orientation: 'portrait' (stacked, default) or 'landscape' (side-by-side) */
  orientation?: 'portrait' | 'landscape';

  /** Selection mode: 'single' (default) or 'range' for start/end date range */
  selectionMode?: 'single' | 'range';

  /** Range value when selectionMode is 'range' */
  rangeValue?: { start: Date | string | DateTime; end: Date | string | DateTime } | null;

  /** Callback when range changes (selectionMode is 'range') */
  onRangeChange?: (value: DateTimeRangeValue) => void;
}

export interface CalendarDate {
  date: DateTime;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  /** In range (between start and end, or start/end day) */
  isInRange?: boolean;
  /** Is the range start date */
  isRangeStart?: boolean;
  /** Is the range end date */
  isRangeEnd?: boolean;
}
