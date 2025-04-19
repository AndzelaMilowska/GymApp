import { NavigationBar } from "./components/navigation-bar";

export default function Home() {
  return (
    <>
      <div className="container flex flex-row">
        <NavigationBar />
      </div>






      <div>
        <div className="flex flex-row w-100">
          <p className="flex bg-primary">#F1F2ED</p>
          <p className="bg-secondary">#DFE2E1</p>
          <p className="flex bg-tertiary">#CCCFC9</p>
          <p className="flex bg-primary-dark">#5A3A39</p>
        </div>
      </div>
    </>
  );
}
