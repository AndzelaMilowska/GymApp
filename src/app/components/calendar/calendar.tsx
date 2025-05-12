"use client";

import React, { useState } from "react";
import CalendarDayCell from "./calendar-day-cell";
import {
  exampleEventsObject,
  WEEK_DAYS_ENG_SHORT,
  MONTHS_ENG,
} from "@/app/constants";
import {
  checkIsEventForTheDay,
  createMonthCellsArray,
  dateCellStyleConditioner,
} from "./calendar-arrangements";
import { daysInMonth, findFirstDayOfTheMonth } from "./date-methods";

export default function Calendar(props: any) {
  const { className } = props;
  const date = new Date();

  const [month, setMoth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const [monthCellsArray, setMonthCellsArray] = useState(
    createMonthCellsArray(
      findFirstDayOfTheMonth(year, month),
      daysInMonth(year, month)
    )
  );

  const onNextMonth = () => {
    if (month === 11) {
      setMoth(0);
      setYear(year + 1);
    } else {
      setMoth(month + 1);
    }

    setMonthCellsArray(
      createMonthCellsArray(
        findFirstDayOfTheMonth(year, month),
        daysInMonth(year, month)
      )
    );
  };

  const onPreviousMonth = () => {
    if (month === 0) {
      setMoth(11);
      setYear(year - 1);
    } else {
      setMoth(month - 1);
    }

    setMonthCellsArray(
      createMonthCellsArray(
        findFirstDayOfTheMonth(year, month),
        daysInMonth(year, month)
      )
    );
  };

  return (
    <div
      className={
        className +
        " h-fit max-h-7/10 my-4 sm:my-0 bg-primary  w-full rounded-2xl flex justify-end flex-col relative w-full "
      }>
      <i className="fa-solid fa-pen text-tertiary hover:text-primary-dark hover:cursor-pointer w-[1em] absolute top-[1em] right-[1em]" />
      <div className="flex flex-col justify-center items-center pb-3 pt-4 ">
       
        <div className="flex flex-row text-primary-dark text-2xl align-center justify-center items-center ">
          <i
            onClick={onPreviousMonth}
            className="fa-solid fa-chevron-left px-3 text-base flex items-center hover:cursor-pointer"
          />
          <h2>{MONTHS_ENG[month]}</h2>
          <i
            onClick={onNextMonth}
            className="fa-solid fa-chevron-right px-3 text-base flex items-center hover:cursor-pointer"
          />
        </div>

        <p className="text-sm text-secondary-dark">{year}</p>

      </div>

      {/* month cells container */}
      <div className="daysContainer grid grid-cols-7 gap-2 text-primary-dark bg-primary-white w-full rounded-2xl p-3 ">
        {WEEK_DAYS_ENG_SHORT.map((weekName, index) => (
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
