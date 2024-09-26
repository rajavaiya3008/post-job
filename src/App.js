// import JobForm from "./presentation/JobForm";
// import Stepper from "./presentation/Stepper";
import Navbar from "./presentation/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
