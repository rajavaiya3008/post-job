export const radioFields = [
    {
      type: "radio",
      id: "Select all PSL agencies",
      name: "engagementPSLAjencies",
      value: "Select all PSL agencies",
      label: "Select all PSL agencies",
    },
    {
      type: "radio",
      id: "Select PSL agency",
      name: "engagementPSLAjencies",
      value: "Select PSL agency",
      label: "Select PSL agency",
      radioStyle:'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-[40px]'
    },
  ];
  
export  const pslAgency = {
    type: "select",
    id: "PSLAgency",
    name: "PSLAgency",
    label: "PSL AGENCY",
    defaultVal: "No Options",
    visible: "Select PSL agency",
    options: ['hello','hii'],
  };