import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../../styles/global.css';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer-bg-black">
      <div className='container'>
        <div className="grid lg:grid-cols-2 grid-cols-1 py-24 items-center">
          <h2 className='xl:text-[2.75rem] text-[2rem] lg:text-left text-center xl:leading-[76px] font-semibold text-[#FFFFFF]'>Don’t miss our weekly updates about freelancer career</h2>
          <div className="">
            <div className="flex justify-between items-center border-[1px] border-[#363843] rounded-full p-[10px]  w-full ml-0">
              <input type="email" name="email" className='input w-full text-[#FFFFFF] bg-transparent' placeholder='Enter your email address...' id="" />
              <button className='btn bg-[#FE8D4D] hover:bg-[#FE8D4D] 2xl:px-14 px-8 border-none rounded-full font-semibold py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB]'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>


      <footer className="footer">
        <div className="xl:container">
          <div className=" flex flex-wrap p-10  text-base-content">
            <div className='lg:w-[30%] md:w-6/12 w-full mt-3'>
              <img src="/images/logoWhite.png" alt="" className='mb-9' srcset="" />
              <p>
                Ziro is a Freelance Landing Website lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <div className="flex items-center social-icon">
                <div className="w-[58px] h-[58px] mr-[6px] rounded-full hover:bg-[#FE8D4D] p-5">
                  <FaFacebookF className='text-[#72737C] hover:text-[#FFFFFF]' />
                </div>
                <div className="w-[58px] h-[58px] mr-[6px] rounded-full hover:bg-[#FE8D4D] p-5">
                  <FaTwitter className='text-[#72737C]' />
                </div>
                <div className="w-[58px] h-[58px] mr-[6px] rounded-full hover:bg-[#FE8D4D] p-5">
                  <FaYoutube className='text-[#72737C]' />
                </div>
                <div className="w-[58px] h-[58px] mr-[6px] rounded-full hover:bg-[#FE8D4D] p-5">
                  <FaLinkedin className='text-[#72737C]' />
                </div>
                <div className="w-[58px] h-[58px] mr-[6px] rounded-full hover:bg-[#FE8D4D] p-5">
                  <FaInstagram className='text-[#72737C]' />
                </div>
              </div>
            </div>
            <div className='lg:w-[13%] md:w-3/12 w-6/12 flex flex-col mt-3'>
              <span className="footer-title">Ziro</span>
              <a className="link link-hover">Why Ziro</a>
              <a className="link link-hover">Enterprise</a>
              <a className="link link-hover">Customer Story</a>
              <a className="link link-hover">Security</a>
              <a className="link link-hover">Pricing</a>
            </div>
            <div className='lg:w-[13%] md:w-3/12 w-6/12 flex flex-col mt-3'>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className='lg:w-[13%] md:w-3/12 w-6/12 flex flex-col mt-3'>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div className='lg:w-[30%] md:w-6/12 w-full flex flex-col mt-3'>
              <span className="footer-title">Get in Touch with Us</span>
              <ul>
                <li className='flex items-start'>
                  <FaMapMarkerAlt className='text-[#FFFFFF] w-[24px] h-[24px] mr-10' />
                  <p>832  Thompson Drive, San Fransisco <br />
                    CA 94107, United States</p>
                </li>
                <li className='flex items-start'>
                  <FaPhone className='text-[#FFFFFF] w-[24px] h-[24px] mr-10' />
                  <p>+123 345123 556</p>
                </li>
                <li className='flex items-start'>
                  <FaEnvelope className='text-[#FFFFFF] w-[24px] h-[24px] mr-10' />
                  <p>support@ziro.id</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


      <hr />
      <div className="container pt-[27px] pb-[33px]">
        <div className="md:flex block items-center justify-between">
          <p className='text-[16px] leading-[24px] font-medium text-[#FFFFFF]'>Ziro Freelancer Landing Website  -   © 2020 All Rights Reserved</p>
          <p className='text-[16px] leading-[24px] font-normal md:text-right text-left text-[#FFFFFF]'>Made with ♥ by Peterdraw</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;