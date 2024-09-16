import JobForm from "./components/JobForm";
import Stepper from "./components/Stepper";

function App() {
  return (
    <div className="flex">
      <Stepper />
      <JobForm />
    </div>
  );
}

export default App;
