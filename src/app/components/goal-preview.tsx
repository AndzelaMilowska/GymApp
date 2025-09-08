import React from "react";
import GoalBar from "./goal-bar";
import { dateOptions } from "../constants";

export default function GoalPreview(props: any) {
  const { goalData, isUpdateButton } = props;


  return (
    <div className="py-1 cursor-default">
      <div className="text-primary-dark text-md mx-5  max-w-[70%] truncate whitespace-nowrap flex flex-row items-center">
        <h3>{goalData.name}</h3>
        <button className="pl-2 text-tertiary hover:cursor-pointer hover:text-primary-dark">
          <i className="fa-solid fa-circle-info "></i>
        </button>
      </div>
      <GoalBar isUpdateButton={isUpdateButton} goalData={goalData} />
      <div className="flex flex-row justify-end w-full">
        <div className="text-xs text-secondary-dark flex justify-between w-8/10 pr-[5rem]">
          <p>
            {"start: " +
              new Intl.DateTimeFormat("en-US", dateOptions).format(
                goalData.startDate
              )}
          </p>
          <p>
            {"last: " +
              new Intl.DateTimeFormat("en-US", dateOptions).format(
                goalData.lastUpdate
              )}
          </p>
          {goalData.endDate && (
            <p>
              {"end: " +
                new Intl.DateTimeFormat("en-US", dateOptions).format(
                  goalData.endDate
                )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
