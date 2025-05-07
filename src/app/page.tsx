import ExercisesIcon from "./assets/exercises-icon";
import TimerIcon from "./assets/timer-icon";
import WorkoutsIcon from "./assets/workouts-icon";
import SquareButton from "./components/square-button";
import { NavigationBar } from "./components/navigation-bar";
import StreakBar from "./components/streak-bar";
import Container from "./components/container";
import ProgressionBar from "./components/progression-bar";
import Calendar from "./components/calendar/calendar";
import { exampleGoalsArray } from "./constants";

export default function Home() {
  const squareButtonStyleClasses: string =
    "bg-primary-dark text-primary rounded-2xl p-2 border-primary-dark border-1 duration-200 hover:text-primary-dark hover:bg-secondary";

  return (
    <>
      <div className="container flex flex-col-reverse sm:flex-row pt-15  max-w-full md:max-w-8/10 lg:max-w-7/10 items-center ">
        <NavigationBar />
        <div className="container flex flex-col">
          <StreakBar />

          <div className="flex m-5 justify-center flex-col-reverse sm:flex-row space-x-6">
            <Calendar className=' w-full'/>

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
                        (goal.currentState / (goal.endValue - goal.startValue))*100
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
                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses}>
                  <ExercisesIcon width={"2rem"} />
                </SquareButton>

                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses + ' mx-2'}>
                  <WorkoutsIcon width={"2rem"} />
                </SquareButton>

                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses}>
                  <TimerIcon width={"2rem"} />
                </SquareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* colors palette */}
      <div>
        <div className="flex flex-row w-full space-x-4">
          <p className="flex bg-primary p-2 rounded-2xl text-primary-white">
            bg-primary
          </p>
          <p className="bg-secondary p-2 rounded-2xl">bg-secondary</p>
          <p className="flex bg-tertiary p-2 rounded-2xl">bg-tertiary</p>
          <p className="flex bg-primary-dark p-2 rounded-2xl">
            bg-primary-dark
          </p>
        </div>
      </div>
    </>
  );
}
