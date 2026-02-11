import { DateTime } from 'luxon';
import { CalendarDate } from '../types';

/**
 * Generate calendar grid for a given month
 */
export function generateCalendarMonth(
  year: number,
  month: number,
  timezone: string,
  selectedDate?: DateTime,
  minDate?: DateTime,
  maxDate?: DateTime,
  selectedStart?: DateTime,
  selectedEnd?: DateTime
): CalendarDate[][] {
  const firstDayOfMonth = DateTime.fromObject(
    { year, month, day: 1 },
    { zone: timezone }
  );
  
  const startOfWeek = firstDayOfMonth.startOf('week');
  const endOfMonth = firstDayOfMonth.endOf('month');
  const endOfWeek = endOfMonth.endOf('week');
  
  const today = DateTime.now().setZone(timezone).startOf('day');
  const isRangeMode = selectedStart != null && selectedEnd != null;

  const startDay = selectedStart?.startOf('day');
  const endDay = selectedEnd?.endOf('day');
  
  const weeks: CalendarDate[][] = [];
  let currentWeek: CalendarDate[] = [];
  let currentDate = startOfWeek;
  
  while (currentDate <= endOfWeek) {
    const isCurrentMonth = currentDate.month === month;
    const isToday = currentDate.hasSame(today, 'day');
    const dayStart = currentDate.startOf('day');
    
    let isSelected = false;
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;

    if (isRangeMode && startDay && endDay) {
      isRangeStart = dayStart.hasSame(startDay, 'day');
      isRangeEnd = dayStart.hasSame(endDay, 'day');
      isInRange = (dayStart >= startDay && dayStart <= endDay) || isRangeStart || isRangeEnd;
      isSelected = isRangeStart || isRangeEnd;
    } else if (selectedDate) {
      isSelected = currentDate.hasSame(selectedDate, 'day');
    }
    
    let isDisabled = false;
    if (minDate && currentDate < minDate.startOf('day')) {
      isDisabled = true;
    }
    if (maxDate && currentDate > maxDate.endOf('day')) {
      isDisabled = true;
    }
    
    currentWeek.push({
      date: currentDate,
      isCurrentMonth,
      isToday,
      isSelected,
      isDisabled,
      isInRange,
      isRangeStart,
      isRangeEnd,
    });
    
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    
    currentDate = currentDate.plus({ days: 1 });
  }
  
  return weeks;
}

/**
 * Get weekday names
 */
export function getWeekdayNames(): string[] {
  const start = DateTime.now().startOf('week');
  const names: string[] = [];
  
  for (let i = 0; i < 7; i++) {
    const day = start.plus({ days: i });
    names.push(day.toFormat('ccc'));
  }
  
  return names;
}

/**
 * Get month names
 */
export function getMonthNames(): string[] {
  const names: string[] = [];
  
  for (let i = 1; i <= 12; i++) {
    const month = DateTime.fromObject({ month: i });
    names.push(month.toFormat('MMMM'));
  }
  
  return names;
}
