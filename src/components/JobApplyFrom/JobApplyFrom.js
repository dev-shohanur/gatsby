import { Link } from 'gatsby';
import React from 'react';
import { FaArrowLeft, FaCloudUploadAlt, FaFile, FaTimes } from 'react-icons/fa';

const JobApplyFrom = ({ data }) => {
  console.log(data);
  const job = data.markdownRemark.frontmatter;
  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/WBC3wdF/heading.png)]" style={{ zIndex: '-1' }}>
        <div className="container pt-14 pb-[200px] relative">
          <h3 className='text-[32px] leading-[48px] font-semibold text-[#FFF] text-center mb-3'>Job Details</h3>
          <div className="text-[16px] leading-[22px] font-normal text-[#FFF] flex justify-center breadcrumbs">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/job-list'>Job List</Link></li>
              <li>Job Application Form</li>
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
              <div className="grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 items-center gap-3">
                <div className="">
                  <h2 className='text-[24px] leading-[36px] font-semibold text-[#363848]'>{job?.title}</h2>
                  <p className='text-[16px] leading-[22px] font-normal text-[#363848]'>Experience {job?.experience} years</p>
                </div>
                <div className="flex items-center gap-[14px] mt-[30px]">
                  <div className="">
                    <img src="/images/icSalary2.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.price}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Monthly Salary</p>
                  </div>
                </div>
                <div className="flex items-center gap-[14px] mt-[30px]">
                  <div className="">
                    <img src="/images/icLocation2.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#000]'>{job?.locationArea}</h4>
                    <p className='text-[14px] leading-[21px] font-normal text-[#AEAEAE]'>Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl py-11 px-14 bg-[#fff] mt-5">
              <h2 className='text-[24px] leading-[36px] font-semibold text-[#363848]'>Fill the job applications</h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">First Name</span>
                  </label>
                  <input type="text" placeholder="First Name" className="input focus:outline-none rounded-full input-bordered w-full h-14  bg-[#FBFBFB]" />
                </div>
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">Middle Name</span>
                  </label>
                  <input type="text" placeholder="Middle Name" className="input focus:outline-none rounded-full input-bordered w-full h-14 bg-[#FBFBFB]" />
                </div>
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">Last Name</span>
                  </label>
                  <input type="text" placeholder="Last Name" className="input focus:outline-none rounded-full input-bordered w-full h-14 bg-[#FBFBFB]" />
                </div>
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">Birth Date</span>
                  </label>
                  <input type="date" placeholder="Birth Date" className="input focus:outline-none rounded-full input-bordered w-full h-14 bg-[#FBFBFB]" />
                </div>
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">Email Address</span>
                  </label>
                  <input type="email" placeholder="Email Address" className="input focus:outline-none rounded-full input-bordered w-full h-14 bg-[#FBFBFB]" />
                </div>
                <div className="">
                  <label className="label mb-4">
                    <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">Phone Number</span>
                  </label>
                  <input type="text" placeholder="Phone Number" className="input focus:outline-[#000] rounded-full input-bordered w-full h-14 bg-[#FBFBFB]" />
                </div>
              </div>
              <div className="mt-4">
                <label className="label mb-3">
                  <span className="label-text text-[16px] leading-[24px] font-medium text-[#1F2131]">About You</span>
                </label>
                <textarea className="textarea textarea-bordered w-full min-h-[170px] bg-[#FBFBFB]" placeholder="Bio"></textarea>
              </div>

              <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-[18px] mt-[20px]'>About Company</h4>

              <div className="md:flex items-center gap-4">
                <label htmlFor='resume-up' className="label mb-4">
                  <div className="flex items-center border-dashed border-[2px] rounded-lg bg-[#F5F5F5] p-3 gap-3 cursor-pointer">
                    <FaCloudUploadAlt className='h-14 w-14 p-4 text-[#FFF] bg-[#5F4BDB] rounded' />
                    <div className="">
                      <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-3'>upload resume</h4>
                      <p className='text-[14px] leading-[21px] font-normal text-[#313131]'>
                        PDF, DOC, PPT, JPG, PNG
                      </p>
                    </div>
                  </div>
                </label>
                <input type="file" placeholder="First Name" id='resume-up' className="hidden" />
                <div className="flex items-center border-solid border-[1px] border-[#5F4BDB] rounded-lg mb-4 bg-[#FFF] p-3 gap-3 indicator">
                  <span className="indicator-item badge bg-[#FF4A55] border-none cursor-pointer w-7 h-7">
                    <FaTimes />
                  </span>
                  <FaFile className='h-14 w-14 p-4 text-[#5F4BDB] bg-[#F6EEFF] rounded' />
                  <div className="">
                    <h4 className='text-[16px] leading-[24px] font-medium text-[#363848] mb-1'>Contact_2020.pdf</h4>
                    <p className='text-[14px] leading-[21px] font-medium text-[#5F4BDB]'>
                      456 KB
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-between">
                <button className='btn hover:bg-[#F0EEFF] bg-[#5F4BDB] border-none rounded-full font-semibold capitalize px-9 py-4 text-[16px] text-[#ffffff] hover:text-[#5F4BDB]'>Submit</button>
                <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize px-9 py-4 text-[16px] hover:text-[#ffffff] text-[#5F4BDB]'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplyFrom;