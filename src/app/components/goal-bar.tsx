import React from "react";

export default function GoalBar(props: any) {
  const { goalData } = props;
  const dateOptions: any = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const progress =
    (goalData.currentState / (goalData.endValue - goalData.startValue)) * 100;
  return (
    <div className="py-1 cursor-default">

        <div className="text-primary-dark text-md mx-5  max-w-[70%] truncate whitespace-nowrap flex flex-row items-center">
          <h3>
          {goalData.name}
          </h3>
          <button className="pl-2 text-tertiary hover:cursor-pointer hover:text-primary-dark">
          <i className="fa-solid fa-circle-info "></i>
            </button>
        
        </div>


      <div className="flex flex-row w-full text-lg">
        
        <button className="bg-primary-dark flex rounded-l-md h-[2rem]  w-[2.5rem]  mr-[2px] items-center justify-center hover:cursor-pointer  text-primary-white hover:text-secondary">
          <i className="fa-solid fa-angles-up "/>
        </button>

        <div className="progress_bar bg-secondary flex h-[2rem]  rounded-r-md overflow-hidden max-w-full w-full ">
          <div
            className={` bg-primary-dark flex rounded-r-md `}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-primary-dark text-primary-white text-base flex rounded-r-md h-[2rem] w-[3.5em]  flex items-center justify-center relative -left-1 ">
          {" "}
          {progress + "%"}
        </div>
      </div>

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
