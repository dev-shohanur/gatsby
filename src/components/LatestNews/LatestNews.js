import React, { useState } from 'react';
import Slider from 'react-slick';
import './LatestNews.css';

const LatestNews = () => {

  const [counterSliderNum, setCounterSliderNum] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Enable Autoplay
    autoplaySpeed: 2000, // Set Autoplay Speed
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (counter) => setCounterSliderNum(counter),
  };

  // let blogSlider;

  // if (counterSliderNum === 0) {
  //   blogSlider = 'bg-orange-800	 w-[121px]';
  // } else if (counterSliderNum === 1) {
  //   blogSlider = 'bg-orange-800	 w-[121px]';
  // }

  return (
    <div className='container'>
      <div className="text-left py-[60px]">
        <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>Latest News</h2>

        <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="blog relative">

        <div className="flex gap-4 justify-end mb-14">
          <span className={` h-2 rounded-lg transition-all duration-700  block ${counterSliderNum === 0 ? 'bg-[#5F4BDB]	 w-[71px]' : 'bg-[#DADADA] w-[30px]'} `}></span>
          <span className={`h-2 rounded-lg transition-all duration-700  block ${counterSliderNum === 1 ? 'bg-[#5F4BDB]	 w-[71px]' : 'bg-[#DADADA] w-[30px]'}`}></span>
          <span className={`h-2 rounded-lg transition-all duration-700  block ${counterSliderNum === 2 ? 'bg-[#5F4BDB]	 w-[71px]' : 'bg-[#DADADA] w-[30px]'}`}></span>
        </div>

        <Slider {...settings}>
          <div className="">
            <div className="mb-14 lg:flex block">
              <div className="news-first-part lg:w-[40%] w-full lg:mr-5 mr-0 lg:mb-0 mb-5">
                <img className='w-full h-full' src="/images/blogBG.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>


              </div>
              <div className="news-first-part lg:w-[60%] w-full blog">
                <img className='w-full h-full' src="/images/blogBG2.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-14 lg:flex block">
              <div className="news-first-part lg:w-[40%] w-full lg:mr-5 mr-0 lg:mb-0 mb-5">
                <img className='w-full h-full' src="/images/blogBG.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>


              </div>
              <div className="news-first-part lg:w-[60%] w-full blog">
                <img className='w-full h-full' src="/images/blogBG2.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-14 lg:flex block">
              <div className="news-first-part lg:w-[40%] w-full lg:mr-5 mr-0 lg:mb-0 mb-5">
                <img className='w-full h-full' src="/images/blogBG.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>


              </div>
              <div className="news-first-part lg:w-[60%] w-full blog">
                <img className='w-full h-full' src="/images/blogBG2.png" alt="" srcset="" />
                <button className='btn absolute top-[23px] right-[13px] bg-[#FE8D4D] hover:bg-[#FE8D4D] border-none rounded-full font-semibold 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>PEOPLES</button>

                <div className="news-article max-w-[90%]">
                  <div className="flex items-center">
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF] mr-4'>James</p>
                    <p className='text-[18px] leading-[32px] font-normal text-[#FFFFFF]'>24min read</p>
                  </div>
                  <h3 className='md:text-[28px] text-lg leading-[34px] md:font-bold font-semibold text-[#FFFFFF]'>Let’s increase your skills in pandemic with Ziro Workshops 2020 </h3>
                  <p className='text-[#FFFFFF] md:text-[16px] text-[14px] news-article-text md:mb-[49px] mt-4 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>


    </div>
  );
};

export default LatestNews;