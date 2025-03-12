import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Difference = () => {
      useEffect (() => {
        Aos.init ();
      }, [])
  return (
    <section data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="differencebg text-white md:py-32">
      <div className="text-center px-5 md:px-10 md:py-52 py-16">
        {/* Header Section */}
        <h2 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="md:text-5xl text-3xl font-light py-5">
          People make the difference
        </h2>
      </div>
    </section>
  );
};

export default Difference;