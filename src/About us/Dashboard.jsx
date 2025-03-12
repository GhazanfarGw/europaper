import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Art() {
          useEffect (() => {
            Aos.init ();
          }, [])
  return (
    <>
    <div className='duration-500 bg-white'>
      <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='bg-local md:h-24 px-5 pt-20 md:pt-0 md:px-0'>
        <img className='z-0 duration-500 w-full md:h-[44rem]' src='./industrial.jpg' alt='images'/>
      </div>
      <div className='hidden md:block lg:block md:px-16 mx-auto justify-center overflow-hidden px-5 text-center'>
        <div className='text-white md:py-20 mt-36 md:mt-16 md:pb-0'>
          <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-center mx-auto'>
            <h1 className='second md:text-5xl text-4xl tracking-wider duration-500'>
              About Us
            </h1>
            <p className='second font-sans pt-3 tracking-widest text-[#fff]'>
              Euro Papers
            </p>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='third md:pt-5 pt-5 pb-5 md:pb-0 md:text-2xl text-lg tracking-wider max-w-screen-lg justify-center text-center mx-auto duration-500'>
            <div className='five border-[#fff] border-l-2 mx-auto items-center relative md:h-32 h-16 md:my-3 my-5 w-0 justify-center text-center flex rounded-sm'/>
              <a 
                href="#about" className="ourth text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 hover:border-[#fff] hover:text-[#fff] border-transparent border mx-auto items-center relative h-10 tracking-wider uppercase px-4 w-full max-w-xs justify-center text-center flex rounded-sm">
                Learn More
              </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}