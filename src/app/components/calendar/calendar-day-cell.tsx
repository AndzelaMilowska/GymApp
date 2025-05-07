import React from "react";
export default function CalendarDayCell(props: any) {
  const { className, textContent } = props;
  return <p className={"border-1  rounded-full w-[2em] h-[2em] flex items-center justify-center " + className}>{textContent}</p>;
}
