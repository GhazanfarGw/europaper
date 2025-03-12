import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Difference = () => {
      useEffect (() => {
        Aos.init ();
      }, [])
  return (
    <section data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-white md:py-32 bg-[#201F52]">
      <div className="text-center px-5 md:px-10 py-5">
        {/* Header Section */}
        <h2 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="md:text-5xl text-xl py-5 leading-normal">
          People make the <br />difference
        </h2>
      </div>
    </section>
  );
};

export default Difference;