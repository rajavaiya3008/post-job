import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFormData, setFormData } from "../redux/slices/form";
import { resetPostJobData, setPostJobData } from "../redux/slices/postjob";
import { handleNavigate } from "../redux/slices/stepper";
import { useSearchParams } from "react-router-dom";

const PostJobContainer = () => {
  const dispatch = useDispatch();
  const [prams] = useSearchParams();
  const allJobData = useSelector((state) => state.postjob.allJobData);
  const jobId = prams.get("id");
  //   console.log("prams", jobId);
  useEffect(() => {
    if (jobId) {
      const currJobData = Object?.entries(allJobData)?.find(
        ([key]) => key === jobId
      );
      //   console.log("currJobData", currJobData);
      if (!currJobData) {
        dispatch(resetFormData());
        dispatch(resetPostJobData());
        dispatch(handleNavigate(1));
        throw new Error("Data Not Found");
      }
      const [id, value] = currJobData;
      //   console.log("value", value);
      const {
        contractValidation,
        replacementFields,
        finalFormFields,
        ...formData
      } = value;
      //   console.log("formData", formData);
      dispatch(setFormData(formData));
      dispatch(
        setPostJobData({
          contractValidation,
          replacementFields,
          finalFormFields,
        })
      );
    }
  }, []);
};

export default PostJobContainer;
