import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const FreelancerHero = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/QdMvjhk/flHeroBg.png)] bg-cover bg-center bg-no-repeat w-full h-full'>
      <div className="container text-center  2xl:w-[50%] lg:full mx-auto pt-[100px] pb-[170px]">
        <div className="flex justify-center">
          <img src="/images/heroLogo.png" alt="" srcset="" />
        </div>
        <h2 className='md:text-[44px] text-[2.5rem] leading-[66px] font-medium text-[#1F2131] my-10'>
          Search over <span className="text-[#5F4BDB]">30,000+</span>  talented <br /> freelancers in the world through ziro
        </h2>
        <div className="mt-16">
          <div className="md:flex block md:justify-between md:items-center md:shadow-lg md:bg-[#ffffff] rounded-full p-[10px]">
            <FaMapMarkerAlt className='text-[#5F4BDB] text-[50px]  md:flex hidden' />
            <select className="select bg-white outline-none md:w-auto w-full md:mb-0 mb-4">
              <option disabled selected> Location</option>
              <option>Location</option>
              <option>Location</option>
            </select>
            <div className="divider lg:divider-horizontal mx-[2px] md:flex hidden"></div>
            <select className="select bg-white md:w-auto w-full md:mb-0 mb-4">
              <option disabled selected>Title</option>
              <option>Title</option>
              <option>Title</option>
            </select>
            <div className="divider lg:divider-horizontal mx-[2px] md:flex hidden"></div>
            <input type="email" name="email" className='input bg-[#fff] md:w-auto w-full md:mb-0 mb-4' placeholder='Enter your email address...' id="" />
            <button className='btn bg-[#FE8D4D] hover:bg-[#FE8D4D] 2xl:px-16 px-10 border-none rounded-full font-semibold py-[18px] text-[16px] text-[#ffffff] capitalize md:w-auto w-full'>Search Job</button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Web Dev</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Mobile Dev</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Design</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Writing</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Admin Support</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Customer Service</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Marketing</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>Accounting</button>

          <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>View all categories</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHero;