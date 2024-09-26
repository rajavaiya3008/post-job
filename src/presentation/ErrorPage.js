import React from "react";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../utils/routeConstant";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(HOME_PAGE, { replace: true });
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div>
        <p className="text-lg">Opps! Something went Wrong!</p>
        <Button
          text={"Back"}
          onClick={handleBack}
          btnStyle="text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700 mt-[10px] ml-[35%]"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
