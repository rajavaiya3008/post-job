import JobForm from "./presentation/JobForm";
import Navbar from "./presentation/Navbar";
import Stepper from "./presentation/Stepper";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Stepper />
        <JobForm />
      </div>
    </div>
  );
}

export default App;
