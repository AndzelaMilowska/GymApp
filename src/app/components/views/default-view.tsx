import ExercisesIcon from "@/app/assets/exercises-icon";
import TimerIcon from "@/app/assets/timer-icon";
import WorkoutsIcon from "@/app/assets/workouts-icon";
import { exampleGoalsArray } from "@/app/constants";
import Calendar from "../calendar/calendar";
import Container from "../container";
import ProgressionBar from "../progression-bar";
import SquareButton from "../square-button";

export default function DefaultView() {
  const squareButtonStyleClasses: string =
    "bg-primary-dark text-primary rounded-2xl p-2 border-primary-dark border-1 duration-200 hover:translate-y-[-2px] hover:shadow-[5px_5px_3px_0px_#bdc1ba]";

  return (
    <div className="flex m-5 justify-center flex-col-reverse sm:flex-row space-x-6">
      <Calendar className=" w-full" />

      <div className="flex flex-col space-y-4 w-full sm:max-w-45/100">
        <Container className=" max-h-[70%] flex flex-col relative">
          <div className="flex flex-row justify-between">
            <h2 className="text-primary-dark text-2xl py-1">GOALS</h2>
            <i className="fa-solid fa-pen text-tertiary hover:text-primary-dark hover:cursor-pointer absolute top-[1em] right-[1em]" />
          </div>

          <div className=" flex flex-col pb-3 overflow-scroll">
            {exampleGoalsArray.map((goal, index) => (
              <ProgressionBar
                progress={
                  (goal.currentState / (goal.endValue - goal.startValue)) * 100
                }
                goalName={goal.name}
                key={index}
              />
            ))}
          </div>

          {/* <div className="text-primary-dark pb-2 flex w-full justify-center text-lg">
                    <i className="fa-solid fa-sort-down" />
                  </div> */}
        </Container>

        {/* quick menu buttons */}
        <div className=" flex flex-row justify-center sm:justify-between">
          <SquareButton title="Exercises" className={squareButtonStyleClasses}>
            <ExercisesIcon width={"2rem"} />
          </SquareButton>

          <SquareButton
            title="Exercises"
            className={squareButtonStyleClasses + " mx-2"}>
            <WorkoutsIcon width={"2rem"} />
          </SquareButton>

          <SquareButton title="Exercises" className={squareButtonStyleClasses}>
            <TimerIcon width={"2rem"} />
          </SquareButton>
        </div>
      </div>
    </div>
  );
}
