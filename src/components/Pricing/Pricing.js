import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className='container py-[60px]'>
      <div className="text-center py-[90px]">
        <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>Pricing Plan</h2>

        <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="card shadow-xl hover:shadow-2xl px-[50px] pt-[45px] pb-[56px]">
          <h2 className='text-[28px] leading-[26px] font-bold #363848 text-center mb-[36px]'>FREE</h2>
          <h2 className='text-[60px] leading-[90px] font-semibold #363848 text-center'>$ 0</h2>
          <p className='text-[18px] font-normal text-[#363848] leading-[26px] text-center'>per month</p>

          <ul className=' my-[53px]'>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Lorem ipsum dolor sit ame</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Consectetur adipiscing elit, sed Do</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>eiusmod tempor incididunt </p>
            </li>
          </ul>

          <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] w-full'>Apply Now</button>
        </div>
        <div className="card shadow-xl hover:shadow-2xl px-[50px] pt-[45px] pb-[56px]">
          <h2 className='text-[28px] leading-[26px] font-bold #363848 text-center mb-[36px]'>PREMIUM</h2>
          <h2 className='text-[60px] leading-[90px] font-semibold #363848 text-center'>$ 175</h2>
          <p className='text-[18px] font-normal text-[#363848] leading-[26px] text-center'>per month</p>

          <ul className=' my-[53px]'>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Lorem ipsum dolor sit ame</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Consectetur adipiscing elit, sed Do</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>eiusmod tempor incididunt </p>
            </li>
          </ul>

          <button className='btn bg-[#F0EEFF] transition-all duration-700 hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] w-full'>Apply Now</button>
        </div>
        <div className="card shadow-xl hover:shadow-2xl px-[50px] pt-[45px] pb-[56px]">
          <h2 className='text-[28px] leading-[26px] font-bold #363848 text-center mb-[36px]'>PLATINUM</h2>
          <h2 className='text-[60px] leading-[90px] font-semibold #363848 text-center'>$ 500</h2>
          <p className='text-[18px] font-normal text-[#363848] leading-[26px] text-center'>per month</p>

          <ul className=' my-[53px]'>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Lorem ipsum dolor sit ame</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>Consectetur adipiscing elit, sed Do</p>
            </li>
            <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>eiusmod tempor incididunt </p>
            </li>
          </ul>

          <button className='btn bg-[#F0EEFF] transition-all duration-700 hover:bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] w-full'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;