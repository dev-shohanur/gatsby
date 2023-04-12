import { Link } from 'gatsby';
import React from 'react';
import { FaEllipsisH, FaHeart } from 'react-icons/fa';


const RelatedJobs = ({ recentJob }) => {
  const featuredJobs = recentJob.nodes
  return (
    <div className='container my-20'>
      <div className="md:flex justify-between">
        <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>Featured Jobs</h2>
        <Link to={'/job-list'}><button className='btn bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] '>View More</button></Link>
      </div>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[40px]">

        {
          featuredJobs.slice(0, 4).map((job) =>
            <div className="card shadow-lg hover:shadow-2xl bg-white p-[45px]">
              <div className="flex justify-end cursor-pointer">
                <FaEllipsisH />
              </div>
              <img className='w-[113px] h-[113px] mx-auto' src={job?.frontmatter?.tittleImg} alt="" srcset="" />

              <h3 className='text-[18px] leading-[27px] text-center font-semibold text-[#363848] mt-[17px]'>{job?.frontmatter?.team}</h3>
              <span className='text-[15px] leading-[20px] font-normal text-center text-[#5F4BDB] mt-[10px]'>{job?.frontmatter?.title}</span>

              <div className="flex items-center justify-evenly mt-[30px]">
                <img src="/images/icSalary.png" alt="" srcset="" />
                <p className='text-[#2E2E2E]'>{job?.frontmatter?.price}</p>
                <sub className='text[#A9A9A9]'>/monthly</sub>
              </div>
              <div className="flex items-center justify-evenly mt-5">
                <img src="/images/icLocation.png" alt="" srcset="" />
                <p className='text-[#2E2E2E]'>{job?.frontmatter?.locationArea}</p>
                <sub className='text-[#A9A9A9]'><a href="/" className='underline '>View Maps</a></sub>
              </div>
              <div className="flex items-center justify-between my-10">
                <div className="">
                  <div className="bg-[#FF5353] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                    <FaHeart className='text-2xl text-[#FFFFFF] cursor-pointer' />
                  </div>
                </div>
                <Link to={'/job-details/' + job?.frontmatter?.id}><button className='btn bg-[#F0EEFF] transition-all duration-700 hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB]'>Apply Now</button></Link>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
};

export default RelatedJobs;