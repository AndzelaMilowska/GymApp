import React from "react";
import GoalBar from "../goal-bar";
import { exampleGoalsArray } from "@/app/constants"; //temp
import Timeline from "../timeline";

export default function GoalDetails(props: any) {
  // const {goalData} = props
  const goal = exampleGoalsArray[2]; //temp

  /*zmień goal object to contain goalEvents 
   start date === array[0]


  timeline przyjmuje goalData (bo nie wystarczą tlyko evety, value format i planed end date also)
*/
  return (
    <>
      <div className="flex items-center justify-center w-full h-full absolute">
        <div className="bg-primary rounded-2xl text-primary-dark z-2 flex flex-col w-lg p-3 m-3 max-h-[90%] overflow-hidden shadow-[5px_5px_3px_0px_#bdc1ba] ">
          {/* <div> here progression bar </div> */}
          <div className="flex flex-col max-w-40% w-full pl-3">
            {/* header */}
            <h2 className="text-2xl font-medium ">{goal.name}</h2>

            {/* description */}
            <p>
              Reach {goal.goalValue} from {goal.events[0].value}
            </p>
          </div>

          <div className="overflow-scroll">
            <Timeline goal={goal} />
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-secondary absolute opacity-75 z-1"></div>
    </>
  );
}
