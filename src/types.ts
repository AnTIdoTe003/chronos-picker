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
}

export interface CalendarDate {
  date: DateTime;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}
