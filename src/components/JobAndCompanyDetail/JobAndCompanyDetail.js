import { Link } from 'gatsby';
import React from 'react';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';

const JobAndCompanyDetail = ({ data }) => {
  const job = data.markdownRemark.frontmatter;
  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/WBC3wdF/heading.png)]" style={{ zIndex: '-1' }}>
        <div className="container pt-14 pb-[200px] relative">
          <h3 className='text-[32px] leading-[48px] font-semibold text-[#FFF] text-center mb-3'>Job Details</h3>
          <div className="text-[16px] leading-[22px] font-normal text-[#FFF] flex justify-center breadcrumbs">
            <ul>
              <li><a>Home</a></li>
              <li><a>Job List</a></li>
              <li>Job Details</li>
            </ul>
          </div>
          <Link to={'/'}>
            <div className="p-3 bg-[#FFF] rounded-full absolute top-3 left-3 flex items-center justify-center">
              <FaArrowLeft className='text-[#000] h-[24px] w-[24px] ' />
            </div>
          </Link>
        </div>
      </div>

      <div className="container mb-8 -mt-[150px] z-10">
        <div className="lg:flex items-start gap-[30px]">
          <div className="lg:w-[30%] w-full h-full">
            <div className="card shadow-2xl px-[30px] py-[50px] bg-[#fff]">
              <div className="flex justify-center mb-[30px]">
                <img src="/images/companyLogo2.png" alt="" srcset="" />
              </div>
              <div className="text-center">
                <h3 className='text-[22px] leading-[33px] font-medium text-[#000]'>{job?.team}</h3>
                <p className='text-[16px] leading-[24px] font-normal text-[#000000b3]'>Creative Design Agency</p>
                <button className='btn hover:bg-[#F0EEFF] bg-[#5F4BDB] border-none rounded-full font-semibold capitalize px-[70px] py-[18px] text-[16px] text-[#ffffff] hover:text-[#5F4BDB] mt-[30px]'>+ Follow</button>
              </div>
              <div className="flex flex-wrap">
                <div className="flex items-center gap-[14px] xl:w-1/2 lg:w-full w-1/2 mt-[30px]">
                  <div className="">
                    <img src="/images/user.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.employ}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Employee</p>
                  </div>
                </div>
                <div className="flex items-center gap-[14px] xl:w-1/2 lg:w-full w-1/2 mt-[30px]">
                  <div className="">
                    <img src="/images/star.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.rating}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-[14px] mt-2 w-full">
                  <div className="">
                    <img src="/images/location.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.locationArea}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Location</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-[26px]'>About Company</h4>
              <p className='text-[14px] leading-[21px] font-normal text-[#313131] mb-4'>
                {job?.aboutCompany}
              </p>
              <div className="xl:flex lg:block md:flex block justify-between items-center">
                <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize px-9 py-4 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] mb-3'>23 Vacancy</button>
                <button className='btn bg-transparent hover:bg-transparent  border-[1px] border-[#EDEDED] hover:border-[#5F4BDB] rounded-full font-semibold capitalize px-9 py-[16px] mb-3 text-[16px] text-[#5F4BDB]'>More Detail</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] w-full h-full lg:mt-0 mt-6">
            <div className="card shadow-2xl py-11 px-14 bg-[#fff]">
              <div className="md:flex items-center justify-between">
                <div className="">
                  <h2 className='xl:text-[38px] text-[22px] xl:leading-[57px] font-semibold text-[#363848]'>{job?.title}</h2>
                  <p className='text-[16px] leading-[22px] font-normal text-[#363848]'>Posted by {job?.admin} on November 12th, 2020</p>
                </div>
                <div className="flex items-center xl:gap-10 gap-5 md:mt-0 mt-6">
                  <Link to={'/applicationFrom'}>
                    <button className='btn hover:bg-[#F0EEFF] bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 xl:py-[18px] text-[16px] text-[#ffffff] hover:text-[#5F4BDB]'>Apply Now</button>
                  </Link>
                  <div>
                    <div className="bg-[#FFD9D9] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-2xl text-[#FF5353] cursor-pointer m-2' />
                    </div>
                  </div>
                </div>

              </div>
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap">
                <div className="flex items-center bg-white gap-[14px] mt-[30px]">
                  <div className="">
                    <img src="/images/icSalary2.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.price}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Monthly Salary</p>
                  </div>
                </div>
                <div className="flex items-center bg-white gap-[14px] mt-[30px]">
                  <div className="">
                    <img className='w-[54px] h-[54px] rounded-full' src="/images/icon2.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.experience} Years</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Experience</p>
                  </div>
                </div>
                <div className="flex items-center bg-white gap-[14px] w-full mt-[30px]">
                  <div className="">
                    <img src="/images/icLocation2.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job.locationArea}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Location</p>
                  </div>
                </div>
              </div>
              <div className="my-14">
                <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-[26px]'>About Company</h4>
                <p className='text-[14px] leading-[21px] font-normal text-[#313131] mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className='text-[14px] leading-[21px] font-normal text-[#313131] mb-9'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, s
                </p>
              </div>
              <div className="">
                <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-[26px]'>Galery</h4>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[25px]">
                  <div className="">
                    <img className='w-full rounded-lg' src="/images/Galery.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <img className='w-full rounded-lg' src="/images/Galery.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <img className='w-full rounded-lg' src="/images/Galery.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <img className='w-full rounded-lg' src="/images/Galery.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAndCompanyDetail;