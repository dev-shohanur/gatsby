import React, { createContext, useEffect, useState } from "react";

export const JOB_DATA_CONTEXT = createContext();

const JobDataProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    fetch("jobDetails.json")
      .then((res) => res.json())
      .then((data) => setJobData(data))
      .catch((error) => console.log(error));
  }, []);

  const jobDataInfo = {jobData}
  console.log(jobDataInfo);
  return (
    <div>
      <JOB_DATA_CONTEXT.Provider value={jobDataInfo}>
        {children}
      </JOB_DATA_CONTEXT.Provider>
    </div>
  );
};

export default JobDataProvider;