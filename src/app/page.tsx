import ExercisesIcon from "./assets/exercises-icon";
import TimerIcon from "./assets/timer-icon";
import WorkoutsIcon from "./assets/workouts-icon";
import SquareButton from "./components/square-button";
import { NavigationBar } from "./components/navigation-bar";
import StreakBar from "./components/streak-bar";
import Container from "./components/container";
import ProgressionBar from "./components/progression-bar";

export default function Home() {
  const squareButtonStyleClasses: string =
    "bg-primary-dark text-primary rounded-2xl p-2 border-primary-dark border-1 duration-200 hover:text-primary-dark hover:bg-tertiary";

  return (
    <>
      <div className="container flex flex-row pt-15">
        <NavigationBar />
        <div className="container flex flex-col ">
          <StreakBar />

          <div className="flex m-5 justify-center flex-row space-x-6">
            <Container className="h-50">Calendar HERE</Container>

            <div className="flex flex-col space-y-4">
              <Container className="max-h-[70%]">
                <div className="flex flex-row justify-between">
                  <h2 className="text-primary-dark text-2xl py-1">GOALS</h2>
                  <i className="fa-solid fa-pen text-tertiary hover:text-primary-dark p-2" />
                </div>

                {/* loop goals for each render progress bar */}
                <ProgressionBar progress={50} goalName={"Goal Name 200"} />
                <ProgressionBar progress={30} goalName={" Name Goal 400"} />
                <ProgressionBar progress={80} goalName={"Goal Name 300"} />
                <ProgressionBar progress={75} goalName={"Goal Goal 100"} />

                <i className="fa-solid fa-sort-down text-primary-dark p-2 flex w-full justify-center text-lg" />
              </Container>

              {/* quick buttons */}
              <div className="w-full flex flex-row space-x-6 justify-center">
                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses}>
                  <ExercisesIcon width={"2em"} />
                </SquareButton>

                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses}>
                  <WorkoutsIcon width={"2em"} />
                </SquareButton>

                <SquareButton
                  title="Exercises"
                  className={squareButtonStyleClasses}>
                  <TimerIcon width={"2em"} />
                </SquareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* colors palette */}
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
