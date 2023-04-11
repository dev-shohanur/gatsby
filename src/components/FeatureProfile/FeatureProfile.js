import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { featureProfile } from '../../FackData/FackData';


const FeatureProfile = () => {

  var settings = {
    dots: false,
    style: {
      margin: '10px'
    },
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <FaLongArrowAltRight className="next-arrow" />,
    prevArrow: <FaLongArrowAltLeft className="prev-arrow" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };


  return (
    <div className='container my-[60px]'>
      <div className="flex items-center justify-between">
        <h2 className='text-[32px] leading-[68px] font-semibold text-[#363848]'>Featured profile this week</h2>
        <p className='text-[#5F4BDB] text-[18px] font-semibold leading-[27px] font-normal font-sans sm:block hidden'>How it works</p>
      </div>
      <Slider {...settings} className="gap-4">
        {
          featureProfile.map((profile) => 
        <div className="card shadow p-10 bg-[#FFF]">
          <div className="flex items-center mb-6">
            <div className="relative mr-5">
              <img src={profile?.image} alt="" srcset="" />
              <span className='absolute right-0 bottom-2 bg-[#30C736] w-[20px] h-[20px] block rounded-full border-[3px] border-[#FFFFFF]'></span>
            </div>
            <div className="">
                  <h2 className='text-[20px] leading-[30px] font-semibold'>{profile?.username}</h2>
              <p>{profile?.prof}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center">
              <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
              <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
              <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
              <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
              <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
              <FaStar className='text-[#D8D8D8] text-[16px] mr-[12px]' />
              <h2 className='text-[16px] leading-[22px] font-bold text-[#000000]'>{profile?.rating}</h2>
            </div>
            <div className="">
              <button className='text-[16px] leading-[22px] font-semibold text-[#FFFFFF] px-[23px] py-[10px] bg-[#FE8D4D] rounded-[37px]'>${profile?.price}/hr</button>
            </div>
          </div>
        </div>
          )
        }
      </Slider>
    </div>
  );
};

export default FeatureProfile;