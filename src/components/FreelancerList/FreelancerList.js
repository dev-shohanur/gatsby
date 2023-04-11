import React from 'react';
import { FaCircle, FaEllipsisH, FaStar } from 'react-icons/fa';
import JobFilter from '../JobFilter/JobFilter';

const FreelancerList = ({ data }) => {

  const freelancersInfo = data.allMarkdownRemark.nodes
  return (
    <div>
      <div className="container">
        <JobFilter />


        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[40px]">

          {
            freelancersInfo.map((freelancer) =>
              <div className="card shadow-lg hover:shadow-2xl bg-white p-[45px]">
                <div className="flex justify-end cursor-pointer">
                  <FaEllipsisH />
                </div>
                <img className='w-[113px] h-[113px] mx-auto' src={freelancer?.frontmatter?.profile} alt="" srcset="" />

                <div className=" flex items-center justify-center">
                  <div className={`${freelancer?.frontmatter?.onlineStatus ? 'bg-[#30C736]' : 'bg-[#8A8A8A]'} px-6 py-[10px] rounded-[39px] -mt-4`}>
                    <span className='flex text-[14px] leading-[19px] font-bold text-[#FFF] flex items-center'><FaCircle className='mr-2' />
                      {freelancer?.frontmatter?.onlineStatus ? 'AVAILABLE' : 'UNAVAILABLE'}
                    </span>
                  </div>
                </div>

                <h3 className='text-[18px] leading-[27px] text-center font-semibold text-[#363848] mt-[17px]'>{freelancer?.frontmatter?.name}</h3>
                <span className='text-[15px] leading-[20px] font-normal text-center text-[#363848] mt-[3px]'>{freelancer?.frontmatter?.profession}</span>
                <div className="flex flex-wrap items-center justify-center">
                  <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                  <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                  <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                  <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                  <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                  <FaStar className='text-[#D8D8D8] text-[16px] mr-[12px]' />
                  <h2 className='text-[16px] leading-[22px] font-bold text-[#000000]'>{freelancer?.rating}</h2>
                </div>
                <div className="">

                  <div className="flex items-center justify-between mt-7">
                    <span className='text-[14px] leading-[19px] font-normal text-[#636363]'>From</span>
                    <span className='text-[14px] leading-[19px] font-semibold text-[#000000]'>{freelancer?.frontmatter?.location}</span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className='text-[14px] leading-[19px] font-normal text-[#636363]'>Member since</span>
                    <span className='text-[14px] leading-[19px] font-semibold text-[#000000]'>{freelancer?.frontmatter?.member}</span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className='text-[14px] leading-[19px] font-normal text-[#636363]'>Rate</span>
                    <span className='text-[14px] leading-[19px] font-semibold text-[#000000]'>{freelancer?.frontmatter?.rate}</span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className='text-[14px] leading-[19px] font-normal text-[#636363]'>Latest Review</span>
                    <span className='text-[14px] leading-[19px] font-semibold text-[#000000]'>{freelancer?.frontmatter?.lastReview}</span>
                  </div>

                </div>
              </div>
            )
          }


        </div>
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
                      class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] w-[62px] h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
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
                      class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] w-[62px] h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
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
    </div>
  );
};

export default FreelancerList;