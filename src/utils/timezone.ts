import { DateTime } from 'luxon';

export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/**
 * Common timezone options for quick selection
 */
export const COMMON_TIMEZONES = [
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Central Europe (CET)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT)' },
  { value: 'UTC', label: 'UTC' },
];

/**
 * Convert a date to a specific timezone
 */
export function convertToTimezone(date: Date | string | DateTime, timezone: string): DateTime {
  if (DateTime.isDateTime(date)) {
    return date.setZone(timezone);
  }
  
  if (typeof date === 'string') {
    return DateTime.fromISO(date, { zone: timezone });
  }
  
  return DateTime.fromJSDate(date, { zone: timezone });
}

/**
 * Get the current date/time in a specific timezone
 */
export function nowInTimezone(timezone: string): DateTime {
  return DateTime.now().setZone(timezone);
}

/**
 * Format timezone offset for display (e.g., "UTC+5:30")
 */
export function formatTimezoneOffset(timezone: string): string {
  const dt = DateTime.now().setZone(timezone);
  const offset = dt.offset;
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const sign = offset >= 0 ? '+' : '-';
  
  return `UTC${sign}${hours}${minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : ''}`;
}

/**
 * Validate if a timezone is valid
 */
export function isValidTimezone(timezone: string): boolean {
  try {
    DateTime.now().setZone(timezone);
    return true;
  } catch {
    return false;
  }
}
