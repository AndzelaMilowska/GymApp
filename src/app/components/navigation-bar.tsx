import ExercisesIcon from "../assets/exercises-icon";
import CalendarIcon from "../assets/calendar-icon";
import GoalsIcon from "../assets/goals-icon";
import TimerIcon from "../assets/timer-icon";
import WorkoutsIcon from "../assets/workouts-icon";
import HomeIcon from "../assets/home-icon";
import StartWorkoutIcon from "../assets/start-workout-icon";
import SquareButton from "./square-button";
export function NavigationBar() {

  return (
    <nav className="bg-primary w-[75px] py-4 rounded-2xl flex flex-col m-5 justify-center">
      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2 ">
      <HomeIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2 ">
        <ExercisesIcon alt="exercises icon" className='col-primary-dark aspect-square  max-h-[1em]' width={'1.75em'}/>
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2 ">
      <WorkoutsIcon alt="workouts" className='col-primary-dark h-full' width={'1.75em'} />
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2">
      <CalendarIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2 ">
        <GoalsIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2  ">
        <StartWorkoutIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </SquareButton>

      <SquareButton className=" rounded-lg hover:bg-primary-dark overflow-auto text-primary-dark hover:text-primary py-3 m-2 ">
        <TimerIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </SquareButton>
    </nav>
  );
}
