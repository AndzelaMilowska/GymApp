import ExercisesIcon from "../assets/exercises-icon";
import CalendarIcon from "../assets/calendar-icon";
import GoalsIcon from "../assets/goals-icon";
import TimerIcon from "../assets/timer-icon";
import WorkoutsIcon from "../assets/workouts-icon";
import HomeIcon from "../assets/home-icon";
import StartWorkoutIcon from "../assets/start-workout-icon";
import SquareButton from "./square-button";
export function NavigationBar() {
  const iconsStyleClasses =
    "rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary px-3 sm:px-0 sm:py-3 m-2";
  return (
    <nav className="bg-primary w-auto sm:w-[75px] sm:py-4 rounded-2xl flex flex-row sm:flex-col my-5 mx-5 sm:mx-5 justify-center flex-wrap sm:flex-nowrap">
      <SquareButton className={iconsStyleClasses}>
        <HomeIcon className="col-primary-dark aspect-square" width={"1.75em"} />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        <ExercisesIcon
          alt="exercises icon"
          className="col-primary-dark aspect-square  max-h-[1em]"
          width={"1.75em"}
        />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        <WorkoutsIcon
          alt="workouts"
          className="col-primary-dark h-full"
          width={"1.75em"}
        />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        {" "}
        <CalendarIcon
          className="col-primary-dark aspect-square"
          width={"1.75em"}
        />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        {" "}
        <GoalsIcon
          className="col-primary-dark aspect-square"
          width={"1.75em"}
        />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        {" "}
        <StartWorkoutIcon
          className="col-primary-dark aspect-square"
          width={"1.75em"}
        />
      </SquareButton>

      <SquareButton className={iconsStyleClasses}>
        {" "}
        <TimerIcon
          className="col-primary-dark aspect-square"
          width={"1.75em"}
        />
      </SquareButton>
    </nav>
  );
}
