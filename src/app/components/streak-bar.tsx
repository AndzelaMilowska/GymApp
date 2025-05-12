import React from "react";
import StreakIcon from "../assets/streak-icon";

export default function StreakBar() {
  const streakCounter = 48;
  const streakText = "It's the longest streak of all time! Keep going!";
  return (
    <div className="flex bg-primary-dark rounded-2xl m-5 justify-between flex-col sm:flex-row items-center">
      <div className="flex justify-center items-center px-4 text-primary">
        <StreakIcon width="2.5em" className="m-1" />
        <div className="my-2">
          <h1 className=" text-2xl font-extrabold leading-none flex items-end ">
            <span className="text-3xl leading-none flex">{streakCounter}</span>
            STREAK
          </h1>
          <p className="text-xs">{streakText}</p>
        </div>
      </div>

      <button className={
        ` 
        hover:text-primary text-primary-dark 
        flex flex-row justify-items align-center items-center
        hover:bg-secondary-dark bg-secondary
        rounded-full border-1 hover:border-primary-white
        px-3 py-2 sm:py-1 m-2 mx-4
        sm:max-w-[12em]     duration-200   hover:cursor-pointer`}>
        <i className="fa-solid fa-play text-2xl ml-2" ></i>
        <span className="flex items-center ">START WORKOUT</span>
      </button>
    </div>
  );
}
