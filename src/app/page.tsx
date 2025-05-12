import { NavigationBar } from "./components/navigation-bar";
import StreakBar from "./components/streak-bar";
import DefaultView from "./components/views/default-view";
import GoalsView from "./components/views/goals-view";

///NOW START OTHER VIEWS
export default function Home() {
  return (
    <>
      <div className="container flex flex-col sm:items-start sm:flex-row sm:pt-15 pt-10  max-w-full md:max-w-8/10 lg:max-w-7/10 items-center ">
        <NavigationBar />
        <div className="container flex flex-col max-w-8/10">
          <StreakBar />

          {/* <DefaultView /> */}
          <GoalsView/>
        </div>
      </div>

  <ColorsPalette/>
    </>
  );
}

function ColorsPalette() {
  return (
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
  )
}
