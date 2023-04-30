import React from 'react';
import { FaCircle, FaHeart } from 'react-icons/fa';
import './EventListHero.css';

const EventListHero = () => {
  return (
    <div className="xl:container mx-6" >
      <div className="carousel w-full xl:h-auto h-[60vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 eventListHero rounded-[37px] overflow-hidden'>
            <div className="hero-bg">
              <img className=' w-full h-[100%]' src="/images/eventHeroBg.png" alt="" srcset="" />
            </div>
            <div className="xl:py-20 my-10 xl:pr-24 pr-14 pl-4">
              <h2 className='text-[18px] leading-[27px] text-[#FE8D4D] font-semibold'>FEATURED EVENTS </h2>
              <h2 className='xl:text-[44px] text-[24px] xl:leading-[66px] text-[#FFF] font-semibold'>
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>
              <h2 className='flex flex-wrap mt-2 xl:mb-10 mb-4 gap-[22px] items-center text-[18px] leading-[28px] text-[#BFB5FF] font-semibold'>
                Saturday, November 28th, 2020
                <span className='text-[14px]'><FaCircle /></span>
                Jakarta, Indonesia
              </h2>
              <p className='xl:text-[16px] text-[14px] leading-[28px] font-normal text-[#FFF] mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <progress className="progress progress-primary w-full" value="64" max="100"></progress>
              <div className="flex justify-between items-center">
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>Tickets</span>
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>34 left</span>
              </div>
              <div className="flex items-center mt-10">
                <button className='btn bg-[#5F4BDB] hover:bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] mr-4'>Book Now</button>
                <button className='btn hover:bg-[#5F4BDB] bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] '>
                  <FaHeart className='mr-2' />
                  Bookmark
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❮</a>
            <a href="#slide2" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 eventListHero rounded-[37px] overflow-hidden'>
            <div className="hero-bg">
              <img className=' w-full h-[100%]' src="/images/eventHeroBg.png" alt="" srcset="" />
            </div>
            <div className="py-20 pr-24 pl-4">
              <h2 className='text-[18px] leading-[27px] text-[#FE8D4D] font-semibold'>FEATURED EVENTS</h2>
              <h2 className='text-[44px] leading-[66px] text-[#FFF] font-semibold'>
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>
              <h2 className='flex flex-wrap mt-2 mb-10 gap-[22px] items-center text-[18px] leading-[28px] text-[#BFB5FF] font-semibold'>
                Saturday, November 28th, 2020
                <span className='text-[14px]'><FaCircle /></span>
                Jakarta, Indonesia
              </h2>
              <p className='text-[16px] leading-[28px] font-normal text-[#FFF] mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <progress className="progress progress-primary w-full" value="70" max="100"></progress>
              <div className="flex justify-between items-center">
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>Tickets</span>
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>34 left</span>
              </div>
              <div className="flex items-center mt-10">
                <button className='btn bg-[#5F4BDB] hover:bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] mr-4'>Book Now</button>
                <button className='btn hover:bg-[#5F4BDB] bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] '>
                  <FaHeart className='mr-2' />
                  Bookmark
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❮</a>
            <a href="#slide3" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 eventListHero rounded-[37px] overflow-hidden'>
            <div className="hero-bg">
              <img className=' w-full h-[100%]' src="/images/eventHeroBg.png" alt="" srcset="" />
            </div>
            <div className="py-20 pr-24 pl-4">
              <h2 className='text-[18px] leading-[27px] text-[#FE8D4D] font-semibold'>FEATURED EVENTS</h2>
              <h2 className='text-[44px] leading-[66px] text-[#FFF] font-semibold'>
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>
              <h2 className='flex flex-wrap mt-2 mb-10 gap-[22px] items-center text-[18px] leading-[28px] text-[#BFB5FF] font-semibold'>
                Saturday, November 28th, 2020
                <span className='text-[14px]'><FaCircle /></span>
                Jakarta, Indonesia
              </h2>
              <p className='text-[16px] leading-[28px] font-normal text-[#FFF] mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <progress className="progress progress-primary w-full" value="70" max="100"></progress>
              <div className="flex justify-between items-center">
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>Tickets</span>
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>34 left</span>
              </div>
              <div className="flex items-center mt-10">
                <button className='btn bg-[#5F4BDB] hover:bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] mr-4'>Book Now</button>
                <button className='btn hover:bg-[#5F4BDB] bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] '>
                  <FaHeart className='mr-2' />
                  Bookmark
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❮</a>
            <a href="#slide4" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className='grid lg:grid-cols-2 grid-cols-1 eventListHero rounded-[37px] overflow-hidden'>
            <div className="hero-bg">
              <img className=' w-full h-[100%]' src="/images/eventHeroBg.png" alt="" srcset="" />
            </div>
            <div className="py-20 pr-24 pl-4">
              <h2 className='text-[18px] leading-[27px] text-[#FE8D4D] font-semibold'>FEATURED EVENTS</h2>
              <h2 className='text-[44px] leading-[66px] text-[#FFF] font-semibold'>
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>
              <h2 className='flex flex-wrap mt-2 mb-10 gap-[22px] items-center text-[18px] leading-[28px] text-[#BFB5FF] font-semibold'>
                Saturday, November 28th, 2020
                <span className='text-[14px]'><FaCircle /></span>
                Jakarta, Indonesia
              </h2>
              <p className='text-[16px] leading-[28px] font-normal text-[#FFF] mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <progress className="progress progress-primary w-full" value="70" max="100"></progress>
              <div className="flex justify-between items-center">
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>Tickets</span>
                <span className='text-[18px] leading-[27px] font-normal text-[#FFF]'>34 left</span>
              </div>
              <div className="flex items-center mt-10">
                <button className='btn bg-[#5F4BDB] hover:bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] mr-4'>Book Now</button>
                <button className='btn hover:bg-[#5F4BDB] bg-[#ffffff14] border-none rounded-full font-semibold capitalize px-[50px] py-4 text-[16px] text-[#ffffff] '>
                  <FaHeart className='mr-2' />
                  Bookmark
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❮</a>
            <a href="#slide1" className="btn btn-circle bg-[#FFF] hover:bg-[#FFF] text-[#000] text-2xl">❯</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EventListHero;