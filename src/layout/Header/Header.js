import { Link } from "gatsby";
import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import '../../styles/global.css';




const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  let isHome;

  if (typeof window !== "undefined") {
    // Your code that references the window object
    window.addEventListener("scroll", stickyNav);
    isHome = window.location.pathname;
  }
  console.log(isHome);
  return (
    <>
      <nav className='relative'>
        <div className={`  ${scrollNav ? 'py-[20px] fixed top-0 left-0 right-0 bg-[#fff] shadow' : 'block py-[32px]  '} ${isHome === '/' ? 'bg-[#F8F9FD]' : ' backdrop-blur-[10px]'}  z-50  transition-transform duration-700 ease-in-out`}>
          <div className="grid grid-cols-2 items-center justify-between container w-[90%] mx-auto">
            <div className=" flex items-center gap-6">
              <div className="logo">
                <Link to={'/'}><img className=' w-[144px]' src="/images/logo.png" alt="" srcset="" /></Link>
              </div>
              <div className="lg:block hidden w-full">
                <ul className='flex items-center justify-center gap-4'>
                  <li><Link to={'/'} className='text-[18px] leading-[27px] font-semibold text-[#363848] hover:text-[#5F4BDB] mb-[20px] transition-all duration-700'>Home</Link></li>
                  <li className='relative transition-all duration-700 group/item' >

                    <Link to={'/job-list'} className=' text-[18px] leading-[27px] font-semibold text-[#363848] hover:text-[#5F4BDB] transition-all duration-700 mb-[20px]'>
                      Jobs
                      <ul class="group/edit z-[9999] bg-[#FFF] shadow-xl rounded absolute top-7 transition-all duration-700 left-0 group-hover/item:visible invisible flex opacity-0 group-hover/item:opacity-100 mt-5 p-6  group-hover/item:mt-0 hover:flex
         w-[200px] flex-col drop-shadow-lg">
                        <li><Link to={'/job-list'} className='text-[18px] leading-[27px] font-medium text-[#363848] hover:text-[#5F4BDB] mb-[20px] ml-4 hover:ml-6 transition-all duration-700'>Jobs List</Link></li>
                        <li><Link to={'/job-detail/1'} className='text-[18px] leading-[27px] font-medium text-[#363848] hover:text-[#5F4BDB] mb-[20px] ml-4 hover:ml-6 transition-all duration-700'>Job Details</Link></li>
                      </ul>
                    </Link>


                  </li>
                  <li className='relative transition-all duration-700' >

                    <Link to={'/eventList'} className='group/item text-[18px] leading-[27px] font-semibold text-[#363848] hover:text-[#5F4BDB] transition-all duration-700 mb-[20px]'>
                      Page
                      <ul class="group/edit z-[9999] bg-[#FFF] shadow rounded absolute top-7 transition-all duration-700 left-0 group-hover/item:visible invisible flex opacity-0 group-hover/item:opacity-100 mt-5 p-6  group-hover/item:mt-0 hover:flex
         w-[220px] flex-col drop-shadow-lg">
                        <li><Link to={'/applicationForm'} className='text-[18px] leading-[27px] font-medium text-[#363848] hover:text-[#5F4BDB] mb-[20px] ml-4 hover:ml-6 transition-all duration-700'>Apply Job</Link></li>
                        <li><Link to={'/freelancers'} className='text-[18px] leading-[27px] font-medium text-[#363848] hover:text-[#5F4BDB] mb-[20px] ml-4 hover:ml-6 transition-all duration-700'>Freelancers List</Link></li>
                        <li><Link to={'/eventList'} className='text-[18px] leading-[27px] font-medium text-[#363848] hover:text-[#5F4BDB] mb-[20px] ml-4 hover:ml-6 transition-all duration-700'>Event List</Link></li>
                      </ul>
                    </Link>


                  </li>
                  {/* <div> */}
                  {/* <li><Link className='text-[18px] leading-[27px] font-bold text-[#363848] mb-[20px]'>Become a member</Link></li> */}
                </ul>
              </div>
            </div>
            <div className="">
              <FaBars className='text-[26px] lg:hidden block float-right cursor-pointer transition duration-700 ease-in-out' onClick={() => setOpenMenu(!openMenu)} />
              <div className="lg:flex hidden items-center justify-end">
                <div className={`flex justify-between items-center rounded-full mr-[20px] px-4 ml-3 ${scrollNav ? 'bg-[#F8F9FD]' : 'bg-[#FFF]'}`}>
                  <input type="text" name="search" id="" className='input w-full bg-transparent text-[#818181]' value={`Search here...`} />
                  <FaSearch className='w-[24] h-[24] text-[#646464]' />
                </div>
                <div className="flex items-center">
                  <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-[39px] px-5 py-4 text-[18px] text-[#363848] hover:text-[#FFF] mr-[20px]'>Log in</button>
                  <button className='btn bg-[#5F4BDB] hover:bg-[#F0EEFF] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-[53px] px-8 py-4 text-[18px] text-[#fff] hover:text-[#363848] mr-[20px]'>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className={` backdrop-blur-[15px] w-auto fixed transition-all ease-in z-[9999995]	 duration-700	delay-700 left-0  top-[0] p-6 h-[100vh] shadow-lg ${openMenu ? 'block' : ' hidden'}`} >
            <div className="flex items-center justify-between">
              <div className="logo">
                <img className=' w-[120px]' src="/images/logo.png" alt="" srcset="" />
              </div>
              <FaTimes className='cursor-pointer' onClick={() => setOpenMenu(false)} />
            </div>
            <div className="flex justify-between items-center rounded-full mr-[20px] bg-[#ffffff] my-4 px-4">
              <input type="text" name="search" id="" className='input w-full bg-transparent text-[#818181] focus:outline-none' value={`Search here...`} />
              <FaSearch className='w-[24] h-[24] text-[#646464]' />
            </div>
            <ul className='items-center my-6'>
              <li><Link className='text-[18px] leading-[27px] font-bold text-[#fff] mb-[20px]' to={'/'}>Home</Link></li>
              <li><Link className='text-[18px] leading-[27px] font-bold text-[#fff] mb-[20px]' to={'/pricing'}>Pricing</Link></li>
              <li><Link className='text-[18px] leading-[27px] font-bold text-[#fff] mb-[20px]' to={'/blog'}>Blog</Link></li>
              <li><Link className='text-[18px] leading-[27px] font-bold text-[#fff] mb-[20px]' to={'/member'}>Become a member</Link></li>
            </ul>
            <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-[39px] px-5 py-4 text-[18px] text-[#363848] hover:text-[#FFF] mr-[20px]'>Log in</button>
            <button className='btn bg-[#5F4BDB] hover:bg-[#F0EEFF] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-[53px] px-8 py-4 text-[18px] text-[#fff] hover:text-[#363848] mr-[20px]'>Sign Up</button>
          </div>
          <div onClick={() => setOpenMenu(!openMenu)} className={` bg-[#000] fixed transition-all ease-in  	delay-100 left-0 opacity-25 top-[0] p-6 w-[100vw] h-[100vh] shadow-lg ${openMenu ? 'block	z-[9998]' : 'hidden z-0'}`}></div>
        </div>
      </nav>
    </>
  );
};

export default Header;