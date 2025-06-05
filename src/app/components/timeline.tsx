import React from "react";
import { dateOptionsLong, GoalEvent } from "../constants";


function TimelineElement(props: any) {
  const { event, valueFormat } = props;
  return (
    <li className="mb-10  max-w-full flex flex-row content-between items-center">
      <i className="fa-regular fa-circle-dot bg-primary text-xl absolute flex justify-center align-center w-[1rem] left-[6.5rem] z-3" />
      <div className="flex flex-col min-w-fit pr-[3em] w-[6.5em] ">

        {/* date */}
        <p className="text-secondary-dark font-medium">
          {new Intl.DateTimeFormat("en-US", dateOptionsLong).format(event.date)}
        </p>

        {/* value */}
        {event.notes && <p className="text-sm ">{event.value + valueFormat}</p>}
      </div>
      <div className="max-w-[60%] w-[60%]">
        {event.notes && <p className="text-sm font-light">{event.notes}</p>}
        {!event.notes && <p className="text-sm ">{event.value + valueFormat}</p>}
      </div>
    </li>
  );
}

export default function Timeline(props: any) {
  const goal = props.goal;
  return (
    <ol className="m-3 mt-8 relative">
      <div className="w-[0.7rem] border-dotted border-r-2 border-primary-dark h-full absolute top-[-1em] left-[6.5rem] z-2" />
      {goal.events.map((event: GoalEvent, index: number) => (
        <TimelineElement
          valueFormat={goal.valueFormat ? goal.valueFormat : " "}
          key={index}
          event={event}
        />
      ))}
    </ol>
  );
}
