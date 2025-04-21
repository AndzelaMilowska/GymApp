import ExercisesIcon from "./assets/exercises-icon";
import TimerIcon from "./assets/timer-icon";
import WorkoutsIcon from "./assets/workouts-icon";
import SquareButton from "./components/square-button";
import { NavigationBar } from "./components/navigation-bar";
import StreakBar from "./components/streak-bar";

export default function Home() {
  return (
    <>
      <div className="container flex flex-row pt-15">
        <NavigationBar />
        <div className="container flex flex-col ">
          <StreakBar />
          <div className="flex m-5 justify-center flex-row space-x-6">
            <div className="bg-primary p-3  w-full rounded-2xl h-50">
              Calendar HERE
            </div>
            <div className="flex flex-col w-full h-50 space-y-4">
              <div className="bg-primary p-3  w-full rounded-2xl h-70">
                Goals
              </div>
              <div className="w-full flex flex-row space-x-6 justify-center">
                <SquareButton title="Exercises" className="bg-primary-dark text-primary rounded-2xl p-2 hover:text-tertiary">
                  <ExercisesIcon width={"2em"} />
                </SquareButton>

                <SquareButton title="Workouts" className="bg-primary-dark text-primary rounded-2xl p-2 hover:text-tertiary">
                  <WorkoutsIcon width={"2em"} />
                </SquareButton>

                <SquareButton title="Timer" className="bg-primary-dark text-primary rounded-2xl p-2 hover:text-tertiary">
                  <TimerIcon width={"2em"} />
                </SquareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row w-full space-x-4">
          <p className="flex bg-primary p-2 rounded-2xl">bg-primary</p>
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
