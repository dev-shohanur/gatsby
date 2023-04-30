import React from 'react'

export default function WhyChoose() {
  return (
    <div>

      <div className='container my-[60px]'>
        <div className="text-center">
          <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>Why Choose Us</h2>

          <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[38px] mt-[60px]">
          <div className="card bg-white shadow-xl p-10 hover:shadow-2xl">
            <div className="">
              <img className='' src="/images/icon.png" alt="" srcset="" />
            </div>
            <div className="mt-2">
              <h2 className='text-[30px] leading-[32px] font-semibold text-[#363848] my-5'>Trusted</h2>
              <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl p-10 hover:shadow-2xl">
            <div className="">
              <img className='' src="/images/icon2.png" alt="" srcset="" />
            </div>
            <div className="mt-2">
              <h2 className='text-[30px] leading-[32px] font-semibold text-[#363848] my-5'>Easy to Use</h2>
              <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl p-10 hover:shadow-2xl">
            <div className="">
              <img className='' src="/images/icon3.png" alt="" srcset="" />
            </div>
            <div className="mt-2">
              <h2 className='text-[30px] leading-[32px] font-semibold text-[#363848] my-5'>Faster</h2>
              <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
