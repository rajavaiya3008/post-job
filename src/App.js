import JobForm from "./presentation/JobForm";
import Navbar from "./presentation/Navbar";
import Stepper from "./presentation/Stepper";
import RangeSlider from "./shared/RangeSlider";

function App() {
  return (
    <div>
      <Navbar />
      <RangeSlider />
      <div className="flex">
        <Stepper />
        <JobForm />
      </div>
    </div>
  );
}

export default App;
