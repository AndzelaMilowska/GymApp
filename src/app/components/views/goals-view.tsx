import React from "react";
import GoalPreview from "../goal-preview";
import { exampleGoalsArray } from "@/app/constants";

export default function GoalsView(props: any) {
  const { className } = props;

  return (
    <div
      className={
        className +
        " bg-primary w-full rounded-2xl flex justify-end flex-col relative text-primary-dark cursor-default "
      }>
      <i className="fa-solid fa-pen text-tertiary hover:text-primary-dark hover:cursor-pointer w-[1em] absolute top-[1em] right-[1em]" />

      <div className="flex flex-row text-3xl align-center justify-start items-center m-5 w-full mb-1 ">
        <h2>GOALS</h2>
      </div>

      <div className=" flex flex-col overflow-scroll p-3 bg-primary-white w-full rounded-2xl ">
        <button className="flex flex-row items-center rounded-2xl py-2 px-3 w-max ml-auto bg-primary-dark text-primary-white hover:cursor-pointer duration-200 hover:translate-y-[-2px] hover:shadow-[5px_5px_3px_0px_#bdc1ba]">
          <i className="fa-solid fa-circle-plus pr-1 "/>
          ADD NEW
        </button>
        {exampleGoalsArray.map((goal, index) => (
          <GoalPreview goalData={goal} key={index} isUpdateButton={true}/>
        ))}
      </div>
    </div>
  );
}
