import React from 'react'

export interface GoalBarProps {
  goalData:any;
  isUpdateButton:boolean,
  className?:string
}
export default function GoalBar(props: GoalBarProps) {
const { goalData, isUpdateButton, className } = props;
      const progress =
    (goalData.events[goalData.length-1].value / (goalData.goalValue - goalData.events[0].value)) * 100;
  return (
         <div className={className + " flex flex-row w-full text-lg"}>
        
      { isUpdateButton && <button className="bg-primary-dark flex rounded-l-md h-[2rem]  w-[2.5rem]  mr-[2px] items-center justify-center hover:cursor-pointer  text-primary-white hover:text-secondary">
          <i className="fa-solid fa-angles-up "/>
        </button>}

        <div className={"progress_bar bg-secondary flex h-[2rem]  rounded-r-md overflow-hidden max-w-full w-full " + (isUpdateButton ? '' : ' rounded-l-md')}>
          <div
            className={` bg-primary-dark flex rounded-r-md `}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-primary-dark text-primary-white text-base flex rounded-r-md h-[2rem] w-[3.5em]  flex items-center justify-center relative -left-1 ">
          {progress + "%"}
        </div>
      </div>
  )
}
