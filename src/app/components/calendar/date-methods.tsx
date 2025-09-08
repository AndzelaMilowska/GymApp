export function findFirstDayOfTheMonth(month: number, year: number) {
    return new Date(year, month, 1).getDay();
  }
  
 export function daysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }