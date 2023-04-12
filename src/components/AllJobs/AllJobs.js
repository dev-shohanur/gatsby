import { Link } from 'gatsby';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import JobFilter from '../JobFilter/JobFilter';

const AllJobs = ({ data }) => {
  return (
    <div className='container my-[10px]'>
      <JobFilter />
      <div className="lg:flex block justify-between items-center my-10 lg:text-left text-center">
      </div>

      {
        data?.allMarkdownRemark?.nodes.map((job) => <div className="">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-700 gap-[30px] py-[25px] px-[32px] mb-[30px]">
            <div className="flex items-center">
              <img src={job?.frontmatter?.image} alt="" srcset="" />
              <div className="ml-[30px]">
                <h2 className='text-[24px] leading-[36px] font-semibold text-[#000000] mb-[7px]'>{job?.frontmatter?.title}</h2>
                <p className='text-[16px] leading-[24px] font-normal text-[#5F4BDB]'>{job?.frontmatter?.team}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/images/icSalary2.png" alt="" srcset="" />
              <div className="ml-[25px]">
                <h2 className='text-[20px] leading-[36px] font-medium text-[#2E2E2E] mb-[7px]'>{job?.frontmatter?.price}</h2>
                <p className='text-[16px] leading-[24px] font-normal text-[#8A8A8A]'>Monthly Salary</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/images/icLocation2.png" alt="" srcset="" />
              <div className="ml-[25px]">
                <h2 className='text-[20px] leading-[36px] font-medium text-[#2E2E2E] mb-[7px]'>{job?.frontmatter?.location}</h2>
                <p className='text-[16px] leading-[24px] font-normal text-[#8A8A8A]'>Location</p>
              </div>
            </div>
            <div className="flex items-center lg:justify-end gap-10">
              <Link to={`/job-detail/${job?.frontmatter?.id}`}>
                <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize  2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] transition-all duration-700'>Apply Now</button>
              </Link>
              <div className="">
                <div className="bg-[#FFD9D9] transition-all duration-700 hover:text-[#FFD9D9] hover:bg-[#FF5353]  text-[#FF5353] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                  <FaHeart className='text-2xl  cursor-pointer m-2' />
                </div>
              </div>
            </div>
          </div>
        </div>)
      }

      {/* pagination */}
      <div className="mt-[60px]">
        <div class="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul class="list-style-none flex items-center">
              <li>
                <a
                  class="relative block rounded-full bg-transparent py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >{'<< Previous'}</a>
              </li>
              <ul className='flex bg-[#ECDEFF] rounded-[61px] px-[28px] items-center'>
                <li>
                  <a
                    class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] hover:w-[62px] hover:h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
                    href="#!"
                  >1</a
                  >
                </li>
                <li aria-current="page">
                  <a
                    class="relative flex items-center justify-center rounded-full bg-[#5F4BDB] w-[62px] h-[53px] py-1.5 px-3  text-[18px] leading-[27px] font-medium text-[#FFFFFF] transition-all duration-300"
                    href="#!"
                  >2
                    <span
                      class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                    >(current)</span
                    >
                  </a>
                </li>
                <li>
                  <a
                    class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] hover:w-[62px] hover:h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
                    href="#!"
                  >3</a
                  >
                </li>
              </ul>
              <li>
                <a
                  class="relative block rounded-full bg-transparent py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] transition-all duration-300 hover:bg-neutral-100"
                  href="#!"
                >{'Next >>'}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default AllJobs;