import React from 'react';
import CountUp from 'react-countup';

const CountUpSection = () => {
  return (
    <div className="container block bg-[url('https://i.ibb.co/hMvCgBF/counter.png')] bg-no-react	bg-center my-[160px]" style={{ backgroundSize: '100% 100%' }}>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-[85px] pb-[95px]">
        <div className="text-center md:mt-0 mt-4">
          <h2 className='text-[60px] leading-[90px] font-semibold text-[#FFFFFF]'>
            <CountUp start={0} end={36} enableScrollSpy />,<CountUp start={0} end={789} enableScrollSpy />+
          </h2>
          <p className='text-[18px] text-[#FFFFFF] font-normal mt-4'>Talented Freelancer</p>
        </div>
        <div className="text-center md:mt-0 mt-4">
          <h2 className='text-[60px] leading-[90px] font-semibold text-[#FFFFFF]'>
            <CountUp start={0} end={458} enableScrollSpy />,<CountUp start={0} end={973} enableScrollSpy />
          </h2>
          <p className='text-[18px] text-[#FFFFFF] font-normal mt-4'>VIsitors</p>
        </div>
        <div className="text-center md:mt-0 mt-4">
          <h2 className='text-[60px] leading-[90px] font-semibold text-[#FFFFFF]'>
            <CountUp start={0} end={56} enableScrollSpy />,<CountUp start={0} end={461} enableScrollSpy />
          </h2>
          <p className='text-[18px] text-[#FFFFFF] font-normal mt-4'>Contract Made</p>
        </div>
        <div className="text-center md:mt-0 mt-4">
          <h2 className='text-[60px] leading-[90px] font-semibold text-[#FFFFFF]'><CountUp start={0} end={852} enableScrollSpy />k</h2>
          <p className='text-[18px] text-[#FFFFFF] font-normal mt-4'>Companies</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;