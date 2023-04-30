import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';


const HowItWork = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen} videoId="6TaVPRcpOts" onClose={() => setVideoOpen(false)} />
      </React.Fragment>
      <div className='container mt-14 mb-[60px]'>
        <p className='text-[#5F4BDB] text-[20px] leading-[27px] font-normal font-sans'>How it works</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[90px]">
          <div className="">
            <div className="">
              <h2 className='xl:text-[50px] text-[33px] xl:leading-[75px] leading-[40px] font-semibold text-[#363848]'>Start find a job you love with us easily</h2>
            </div>
            <div className="mt-[60px]">
              <div className="collapse mb-[34px] collapse-arrow border border-white bg-white shadow-lg rounded-box py-4 px-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  <span className='w-[84px] h-[84px] text-[#2B3DC7] text-[36px] leading-[54px] bg-[#E7E9FF] rounded-[26px] px-[35px] py-4 mr-[29px]'>1</span>

                  Complete Profile
                </div>
                <div className="collapse-content">
                  <p className='w-[80%] ml-[18%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse mb-[34px] collapse-arrow border border-white bg-white shadow-lg rounded-box py-4 px-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  <span className='w-[84px] h-[84px] text-[#8E22E2] text-[36px] leading-[54px] bg-[#F6EBFF] rounded-[26px] px-[35px] py-4 mr-[29px]'>2</span>
                  Search Vacancies
                </div>
                <div className="collapse-content">
                  <p className='w-[80%] ml-[18%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="collapse mb-[34px] collapse-arrow border border-white bg-white shadow-lg rounded-box py-4 px-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  <span className='w-[84px] h-[84px] text-[#3DCD65] text-[36px] leading-[54px] bg-[#E9FFEF] rounded-[26px] px-[35px] py-4 mr-[29px]'>3</span>
                  Apply Jobs
                </div>
                <div className="collapse-content">
                  <p className='w-[80%] ml-[18%]'>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex items-center relative `}>
            <img className='w-full h-auto' src="https://i.ibb.co/ZTKFmBW/righSide.png" alt="" srcset="" />
            <div onClick={() => setVideoOpen(true)} className="flex justify-center bg-[#FFFFFF] w-[66px] h-[66px]  p-[10px] rounded-[76px] cursor-pointer items-center absolute top-[45%] left-[40%]">
              <FaPlay className='mx-auto text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;