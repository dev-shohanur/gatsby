import React, { useState } from 'react';
import { FaCheck, FaRegPlayCircle, FaStar, FaTimes } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';
import "swiper/css/pagination";

import ModalVideo from 'react-modal-video';


// import required modules
import { Autoplay, Pagination } from "swiper";



const Hero = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen} videoId="6TaVPRcpOts" onClose={() => setVideoOpen(false)} />
      </React.Fragment>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="bg-[#F8F9FD] ">
            <div className='container pt-24'>
              <div className="lg:grid lg:grid-cols-2 grid-cols-1 items-center flex flex-col-reverse">
                <div className="md:pb-0 pb-10">
                  <h2 className='xl:text-[3.75rem] md:text-[3rem] text-[2.5rem] xl:leading-[80px] leading-[48px] font-semibold text-[#363848]'>Find out <span className="text-[#5F4BDB]">talented  freelancer</span> with better review faster</h2>

                  <p className='text-[16px] font-normal text-[#11142D] leading-[28px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="flex items-center">
                    <button className='btn bg-[#5F4BDB] border-none rounded-full font-semibold capitalize pl-[31px] pr-[42px] pt-4 pb-[17px] text-[18px] text-[#fff] mr-[20px]'>Discover Now</button>
                    <button onClick={() => setVideoOpen(true)} className='flex justify-between items-center'>
                      <div className="bg-white border-[1px] border-[#F2F2F2] rounded-full mr-4">
                        <FaRegPlayCircle className='text-[24px] m-[18px] text-[#5F4BDB]' />
                      </div>
                      <h4 className='text-[18px] leading-[27px] text-[#363848] font-medium'>Watch Demo</h4>
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img className='w-full' src="/images/heroImage.png" alt="" srcset="" />
                  <div className="absolute bottom-5 left-0 flex items-start backdrop-blur-[20px] rounded-[17px] p-[26px] shadow">
                    <div className="flex">
                      <img src="/images/hero-card-user.png" alt="" srcset="" />
                      <div className="ml-3 items-center">
                        <h2 className='text-[#000000] text-[26px] leading-[39px] font-semibold'>David</h2>
                        <p className='text-[#000000] text-[15px] leading-[20px] font-normal'>UI/UX Designer</p>
                        <div className="flex items-center">
                          <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                          <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                          <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                          <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                          <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                          <FaStar className='text-[#D8D8D8] text-[16px] mr-[12px]' />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex border-[2px] block border-[#30C736] rounded-full p-1 flex items-center justify-center">
                        <FaCheck className='text-[#30C736]' />
                      </div>
                      <div className="flex border-[2px] block border-[#FF5353] rounded-full p-1 flex items-center justify-center">
                        <FaTimes className='text-[#FF5353]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Hero;