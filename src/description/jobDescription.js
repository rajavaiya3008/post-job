import JobPSLChild from "../presentation/JobPSLChild";

export const jobDescValidation = {
    jobTitle: [{ required: true, message: "Please Enter Job Title" }],
    jobDesc: [
      { required: true, message: "Please Enter Job Description" },
      { length: 20, message: "Description Must be 350 char" },
    ],
    industry: [{ required: true, message: "Please Choose Industry" }],
    engagement: [{ required: true, message: "Please Select Engagement" }],
    engagementPSLAjencies: [{ required: true, message: "Please Select Agency" }],
    PSLAgency: [{ required: true, message: "Please Select Agency" }],
    city: [{ required: true, message: "Please Select City" }],
    // country: [{ required: true, message: "Please Select Country" }],
    workType: [{ required: true, message: "Please Select Country" }]
  };
  
export  const JobDescData = [
    {
      formName: "jobDescription",
      sectionTitle: "Write a headline for your job post",
      inputFields: [
        {
          type: "text",
          id: "jobTitle",
          name: "jobTitle",
          label: "JOB TITLE",
          placeholder: "Job Title",
        },
      ],
    },
    {
      formName: "jobDescription",
      sectionTitle: "Describe the job in more details",
      inputFields: [
        {
          type: "text-area",
          id: "jobDesc",
          name: "jobDesc",
          placeholder: "Job Description...",
        },
      ],
    },
    {
      formName: "jobDescription",
      sectionTitle: "Choose Industry",
      inputFields: [
        {
          type: "select",
          id: "industry",
          name: "industry",
          label: "IDUSTRY",
          defaultVal: "Choose Industry",
          options: ["Mobile Games", "Tobacco", "Fund Raising"],
        },
      ],
    },
    {
      formName: "jobDescription",
      sectionTitle: "Engagement",
      inputFieldStyle : 'mt-[30px]',
      inputFields: [
        {
          type: "radio",
          id: "Just for PSL",
          name: "engagement",
          value: "Just for PSL",
          label: "Just for PSL",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
        {
          type: "radio",
          id: "All agencies",
          name: "engagement",
          value: "All agencies",
          label: "All agencies",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
        {
          type: "radio",
          id: "All agencies except PSL",
          name: "engagement",
          value: "All agencies except PSL",
          label: "All agencies except PSL",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
      ],
      childComponents: [
        {
          visible: "Just for PSL",
          name: "engagement",
          ChildComponent: JobPSLChild,
        },
      ],
    },
    {
      formName: "jobDescription",
      sectionTitle: "Specify Location",
      inputFields: [
        {
          type: "select",
          id: "city",
          name: "city",
          label: "CITY",
          defaultVal: "Select City",
          options: ["Odate (Japan)", "Siuri (India)", "Kstovo (Russia)"],
        },
        {
          type: "select",
          id: "country",
          name: "country",
          label: "COUNTRY",
          disabled: true,
          defaultVal: "Select Country",
          options: ['Japan','India','Russia'],
          
        },
      ],
    },
    {
      formName: "jobDescription",
      sectionTitle: "Workplace Type",
      inputFieldStyle : 'mt-[30px]',
      inputFields: [
        {
          type: "radio",
          id: "Remote",
          name: "workType",
          value: "Remote",
          label: "Remote",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
        {
          type: "radio",
          id: "Onsite",
          name: "workType",
          value: "Onsite",
          label: "Onsite",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
        {
          type: "radio",
          id: "Hybrid",
          name: "workType",
          value: "Hybrid",
          label: "Hybrid",
          radioStyle: 'hidden',
          radioLabel: 'w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300'
        },
      ]
    }
  ];
  