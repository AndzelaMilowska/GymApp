import React from "react";
import GoalBar from "../goal-bar";
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
        <button className="flex flex-row items-center bg-primary text-tertiary rounded-2xl py-2 px-3 w-max ml-auto hover:bg-primary-dark hover:text-secondary hover:cursor-pointer duration-300">
          <i className="fa-solid fa-circle-plus pr-1 "/>
          ADD NEW
        </button>
        {exampleGoalsArray.map((goal, index) => (
          <GoalBar goalData={goal} key={index} />
        ))}
      </div>
    </div>
  );
}
