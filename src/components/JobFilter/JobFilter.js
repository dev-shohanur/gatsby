import React, { useState } from "react";
import "./JobFilter.css";

const JobFilter = () => {
  const [mySwitchDetails, setMySwitchDetails] = useState(false);
  const [mySwitchSalary, setMySwitchSalary] = useState(false);
  const [jobFilterToggle, setJobFilterToggle] = useState(false);

  // switch details
  const handleSwitchDetails = () => {
    setMySwitchDetails(!mySwitchDetails);
  };

  // switch salary
  const handleSwitchSalary = () => {
    setMySwitchSalary(!mySwitchSalary);
  };

  // switch salary
  const handleJobFilterToggle = () => {
    setJobFilterToggle(!jobFilterToggle);
  };

  return (
    <div>
      <div className="filter-box flex justify-between items-center my-7 relative">
        {/* {/ showing total job /} */}
        <div className="max-w-full">
          <h3 className="font-semibold">Showing 34 Jobs</h3>
        </div>

        {/* {/ filter details and filter icon /} */}
        <div className="ml-auto ">
          <div className="lg:block hidden">
            <form className="flex justify-end items-center max-w-full">
              {/* {/ full time /} */}
              <div className="flex items-center justify-center mr-7">
                <input type="checkbox" name="" id="fullTime" className="mr-2" />
                <label htmlFor="fullTime">Full time</label>
              </div>

              {/* {/ freelancer /} */}
              <div className="flex items-center justify-center mr-7">
                <input
                  type="checkbox"
                  name=""
                  id="freelance"
                  className="mr-2"
                />
                <label htmlFor="freelance">Freelance</label>
              </div>

              {/* {/ details switch /} */}
              <div className="flex items-center justify-center mr-7">
                <label htmlFor="detailsSwitch">Details</label>
                <span
                  className={`w-10 h-3 rounded-full ml-4 bg-[#D0D0D0] flex items-center ${mySwitchDetails ? "justify-start" : "justify-end"
                    }`}
                >
                  <span
                    onClick={handleSwitchDetails}
                    className={`w-[20px] h-[20px] rounded-full inline-block  cursor-pointer ${mySwitchDetails ? "bg-gray-400" : " bg-[#8F8F8F]"
                      } `}
                  ></span>
                </span>
              </div>

              {/* {/ salary switch /} */}
              <div className="flex items-center justify-center mr-7">
                <label htmlFor="">Salary</label>
                <span
                  className={`w-10 h-3 rounded-full ml-4 bg-[#DBC7F5] flex items-center ${mySwitchSalary ? "justify-start" : "justify-end"
                    }`}
                >
                  <span
                    onClick={handleSwitchSalary}
                    className={`w-[20px] h-[20px] rounded-full inline-block  cursor-pointer ${mySwitchSalary ? "bg-gray-400" : " bg-[#5B48D2]"
                      }`}
                  ></span>
                </span>
              </div>

              {/* {/ dropdown /} */}
              <div className="flex items-center border border-gray-400 px-7 rounded-full">
                <select name="" id="" className=" py-2 px-4 bg-transparent">
                  <option value="">Newest</option>
                  <option value="">24 hour ago</option>
                  <option value="">1 weak ago</option>
                  <option value="">1 month ago</option>
                </select>
                {/* <span className="ml-4">
                  <FaChevronDown className="text-gray-400" />
                </span> */}
              </div>
            </form>
          </div>
        </div>
        {/* {/ filter icons /} */}
        <div
          className="max-w-[10%] cursor-pointer ml-4"
          onClick={handleJobFilterToggle}
        >
          <img src="/images/filter.svg" alt="   " />
        </div>

        {/* {/ onCanvas menu /} */}
        <div
          className={`lg:hidden block onCanvas-menu ${jobFilterToggle ? "add-toggle" : "remove-toggle"
            }`}
        >
          <form className="flex justify-end items-start flex-col max-w-full mr-7 ">
            {/* {/ full time /} */}
            <div className="flex items-center justify-center mt-4">
              <input type="checkbox" name="" id="fullTime" className="mr-2" />
              <label htmlFor="fullTime">Full time</label>
            </div>

            {/* {/ freelancer /} */}
            <div className="flex items-center justify-center mt-4">
              <input type="checkbox" name="" id="freelance" className="mr-2" />
              <label htmlFor="freelance">Freelance</label>
            </div>

            {/* {/ details switch /} */}
            <div className="flex items-center justify-center mt-4">
              <span
                className={`w-10 h-3 rounded-full bg-[#D0D0D0] flex items-center ${mySwitchDetails ? "justify-start" : "justify-end"
                  }`}
              >
                <span
                  onClick={handleSwitchDetails}
                  className={`w-[20px] h-[20px] rounded-full inline-block  cursor-pointer ${mySwitchDetails ? "bg-gray-400" : " bg-[#8F8F8F]"
                    } `}
                ></span>
              </span>
              <label htmlFor="detailsSwitch" className="ml-4">
                Details
              </label>
            </div>

            {/* {/ salary switch /} */}
            <div className="flex items-center justify-center mt-4">
              <span
                className={`w-10 h-3 rounded-full bg-[#DBC7F5] flex items-center ${mySwitchSalary ? "justify-start" : "justify-end"
                  }`}
              >
                <span
                  onClick={handleSwitchSalary}
                  className={`w-[20px] h-[20px] rounded-full inline-block  cursor-pointer ${mySwitchSalary ? "bg-gray-400" : " bg-[#5B48D2]"
                    }`}
                ></span>
              </span>
              <label htmlFor="" className="ml-4">
                Salary
              </label>
            </div>

            {/* {/ dropdown /} */}
            <div className="flex relative items-center border border-gray-400 px-7 rounded-full">
              {/* <FaChevronDown className="text-gray-400 absolute right-4 top-[50%]" /> */}
              <select name="" id="" className=" py-2 px-4 bg-transparent">
                <option value="">Newest</option>
                <option value="">24 hour ago</option>
                <option value="">1 weak ago</option>
                <option value="">1 month ago</option>
              </select>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;