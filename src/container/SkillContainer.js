import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../redux/slices/form";
import { SKILLS } from "../utils/constantVariable";

export const SkillContainer = ({ formName }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const error = useSelector((state) => state.formData.error);
  const skills = [...formData?.[formName]?.skills];

  const removeSkill = (skill) => {
    const newSkills = skills.filter((item) => item !== skill);
    dispatch(onChange({ name: SKILLS, value: newSkills, formName }));
  };

  return { error, skills, removeSkill };
};
