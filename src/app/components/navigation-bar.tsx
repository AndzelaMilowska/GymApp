import ExercisesIcon from "../assets/exercises-icon";
import CalendarIcon from "../assets/calendar-icon";
import GoalsIcon from "../assets/goals-icon";
import TimerIcon from "../assets/timer-icon";
import WorkoutsIcon from "../assets/workouts-icon";
import NavigationButton from "./navigation-button";
import HomeIcon from "../assets/home-icon";
import StartWorkoutIcon from "../assets/start-workout-icon";
export function NavigationBar() {
  return (
    <nav className="bg-primary w-[75px] h-[550px] rounded-lg flex flex-col m-5 justify-center">
      <NavigationButton>
      <HomeIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </NavigationButton>

      <NavigationButton title="exercises">
        <ExercisesIcon alt="exercises icon" className='col-primary-dark aspect-square  max-h-[1em]' width={'1.5em'}/>
      </NavigationButton>

      <NavigationButton>
      <WorkoutsIcon alt="workouts" className='col-primary-dark aspect-square' width={'1.5em'} />
      </NavigationButton>

      <NavigationButton>
      <CalendarIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </NavigationButton>

      <NavigationButton>
        <GoalsIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </NavigationButton>

      <NavigationButton>
        <StartWorkoutIcon className='col-primary-dark aspect-square' width={'2.5em'}/>
      </NavigationButton>

      <NavigationButton>
        <TimerIcon className='col-primary-dark aspect-square' width={'1.75em'}/>
      </NavigationButton>
      {/* <NavigationButton>
      <i className="fa-solid fa-dumbbell"></i>
      </NavigationButton> */}
    </nav>
  );
}
