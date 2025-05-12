export function checkIsEventForTheDay(
  day: number,
  month: number,
  year: number,
  eventsObject: any
) {
  if (!eventsObject[year]) return false;
  if (!eventsObject[year][month]) return false;
  if (!eventsObject[year][month][day]) return false;
  return eventsObject[year][month][day];
}

//if day is empty string dont even run function
export function dateCellStyleConditioner(
  date: Date,
  eventForTheDay: boolean | any
) {
  //second argument is checkIsEventForTheDay result

  let dateCellStyles: string = " hover:cursor-pointer hover:text-secondary-dark";
  const today = new Date();
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    dateCellStyles += " border-primary-dark";
  } else {
    dateCellStyles += " border-primary-white";
  }

  if (eventForTheDay === false) return dateCellStyles;
  if (eventForTheDay.done === true) {
    dateCellStyles += " bg-primary-dark text-primary";
  } else if (eventForTheDay.done === false) {
    dateCellStyles += " bg-primary";
  }
  return dateCellStyles;
}

export function createMonthCellsArray(firstDay: number, lastDay: number) {
  let monthCellsArray: (string | number)[] = [];

  //if first day of the month is a sunday, add empty cells for previous cells
  if (firstDay === 0) {
    monthCellsArray = ["", "", "", "", "", ""];
  } else {
    //fill cells with empty string for all days before 1st day of the month
    for (let i = 0; i < firstDay - 1; i++) {
      monthCellsArray.push("");
    }
  }

  //fill all day cells with day numbers
  for (let i = 0; i < lastDay; i++) {
    monthCellsArray.push(i + 1);
  }

  const currentMonthLength: number = monthCellsArray.length;
  //fill remaining grid cells with empty string
  if (currentMonthLength < 35) {
    let cellsLeft = 35 - currentMonthLength;
    for (let i = 0; i < cellsLeft; i++) {
      monthCellsArray.push("");
    }
  } else if (monthCellsArray.length > 35) {
    let cellsLeft = 42 - currentMonthLength;
    for (let i = 0; i < cellsLeft; i++) {
      monthCellsArray.push("");
    }
  }

  return monthCellsArray;
}
