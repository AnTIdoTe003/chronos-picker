import { Holiday } from '../types';

/** IANA timezone for which built-in 2026 holidays are provided */
export const DEFAULT_HOLIDAYS_TIMEZONE = 'Asia/Kolkata';

export const INDIAN_HOLIDAYS_2026: Holiday[] = [
  // --- 2026 National Holidays (India) ---
  { date: '2026-01-26', name: 'Republic Day', type: 'national' },
  { date: '2026-03-19', name: 'Holi', type: 'national' }, // Tentative
  { date: '2026-04-14', name: 'Dr. Ambedkar Jayanti', type: 'national' },
  { date: '2026-08-15', name: 'Independence Day', type: 'national' },
  { date: '2026-10-02', name: 'Gandhi Jayanti', type: 'national' },
  { date: '2026-10-20', name: 'Dussehra', type: 'national' }, // Tentative
  { date: '2026-11-08', name: 'Diwali', type: 'national' }, // Tentative
  { date: '2026-12-25', name: 'Christmas', type: 'national' },
];

export const LONG_WEEKENDS_2026: Holiday[] = [
  // Republic Day Weekend (Jan 24-26)
  { date: '2026-01-24', name: 'Long Weekend: Trip to Jaipur?', type: 'long-weekend' },
  { date: '2026-01-25', name: 'Long Weekend: Fort Visit', type: 'long-weekend' },
  { date: '2026-01-26', name: 'Republic Day', type: 'long-weekend' },

  // Holi Weekend (Mar 19-22 - Take Friday off)
  { date: '2026-03-19', name: 'Holi Celebration', type: 'long-weekend' },
  { date: '2026-03-20', name: 'Take a leave! Beach time?', type: 'long-weekend' },
  { date: '2026-03-21', name: 'Relaxing Saturday', type: 'long-weekend' },
  { date: '2026-03-22', name: 'Lazy Sunday', type: 'long-weekend' },

  // Independence Day Weekend (Aug 15-17)
  { date: '2026-08-15', name: 'Independence Day', type: 'long-weekend' },
  { date: '2026-08-16', name: 'Sunday Brunch', type: 'long-weekend' },
  { date: '2026-08-17', name: 'Take a leave? Hills calling!', type: 'long-weekend' }, // Monday leave suggestion

  // Diwali Weekend (Nov 7-9)
  { date: '2026-11-07', name: 'Choti Diwali', type: 'long-weekend' },
  { date: '2026-11-08', name: 'Diwali', type: 'long-weekend' },
  { date: '2026-11-09', name: 'Govardhan Puja (Take leave)', type: 'long-weekend' },
];

/**
 * Returns default national holidays and long weekend suggestions for the given timezone.
 * Built-in data is provided for Asia/Kolkata (India) for 2026; other timezones get an empty array.
 * Use with customHolidays prop to add your own dates on top of these.
 */
export function getDefaultHolidaysForTimezone(timezone: string): Holiday[] {
  if (timezone === DEFAULT_HOLIDAYS_TIMEZONE) {
    return [...INDIAN_HOLIDAYS_2026, ...LONG_WEEKENDS_2026];
  }
  return [];
}
