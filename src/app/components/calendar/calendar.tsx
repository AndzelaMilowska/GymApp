import React from "react";
import CalendarDayCell from "./calendar-day-cell";
import { exampleEventsObject, weekDaysEngShort } from "@/app/constants";
import { checkIsEventForTheDay, createMonthCellsArray, dateCellStyleConditioner } from "./calendar-arrangements";
import { daysInMonth, findFirstDayOfTheMonth } from "./date-methods";



export default function Calendar(props: any) {
  const { className } = props;

  const date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthCellsArray = createMonthCellsArray(
    findFirstDayOfTheMonth(year, month),
    daysInMonth(year, month)
  );

  return (
    <div
      className={
        className +
        " h-fit max-h-7/10 my-4 sm:my-0 bg-primary  w-full rounded-2xl flex justify-end flex-col relative w-full "
      }>
      <i className="fa-solid fa-pen text-tertiary hover:text-primary-dark hover:cursor-pointer w-[1em] absolute top-[1em] right-[1em]" />

      <div className="flex flex-row text-primary-dark text-2xl align-center justify-center items-center p-3 py-5">
        <i className="fa-solid fa-chevron-left px-3 text-base flex items-center hover:cursor-pointer" />
        <h2>May</h2>
        <i className="fa-solid fa-chevron-right px-3 text-base flex items-center hover:cursor-pointer" />
      </div>

      {/* month cells container */}
      <div className="daysContainer grid grid-cols-7 gap-2 text-primary-dark bg-primary-white w-full rounded-2xl p-3 ">
        {weekDaysEngShort.map((weekName, index) => (
          <CalendarDayCell
            textContent={weekName}
            className="border-primary-white pb-3"
            key={index}
          />
        ))}

        {monthCellsArray.map((day, index) => (
          <CalendarDayCell
            textContent={day}
            className={
              typeof day === "string"
                ? " border-primary-white"
                : dateCellStyleConditioner(
                    new Date(year, month, day),
                    checkIsEventForTheDay(
                      day,
                      month + 1,
                      year,
                      exampleEventsObject
                    )
                  )
            }
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
