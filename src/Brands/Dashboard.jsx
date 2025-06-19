import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl py-32'>
        <div className='text-white py-5'>
          <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0'>
            Our Brands
          </h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard