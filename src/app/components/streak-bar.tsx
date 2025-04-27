import React from "react";
import StreakIcon from "../assets/streak-icon";

export default function StreakBar() {
  const streakCounter = 48;
  const streakText = "It's the longest streak of all time! Keep going!";
  return (
    <div className="flex bg-primary rounded-2xl m-5 justify-between  ">
      <div className="flex justify-center items-center px-4 text-primary-dark">
        <StreakIcon width="2.5em" className="m-1" />
        <div className="my-2">
          <h1 className=" text-2xl font-extrabold leading-none flex items-end ">
            <span className="text-3xl leading-none flex">{streakCounter}</span>
            STREAK
          </h1>
          <p className="text-xs">{streakText}</p>
        </div>
      </div>

      <button className="bg-primary-dark text-primary rounded-full px-3 py-1 m-2 flex flex-row justify-items align-center items-center border-primary-dark border-1 duration-200 hover:text-primary-dark hover:bg-secondary hover:cursor-pointer">
        <i className="fa-solid fa-play text-2xl mx-1" ></i>
        <span className="px-1 flex items-center">START WORKOUT</span>
      </button>
    </div>
  );
}
