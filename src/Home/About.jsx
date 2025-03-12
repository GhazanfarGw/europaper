import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Description() {
  useEffect (() => {
    Aos.init ();
  }, [])
    return (
      <>
      <div className="bg-white">
        <div className="max-w-screen-xl md:px-10 px-5 mx-auto">
          <div className="items-center md:flex md:grid-cols-2 mx-auto justify-between border-b py-16">
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="max-w-xs md:pt-10 block md:hidden lg:hidden">
              <img className="first" src="WhatsApp_Image_2025-03-03_at_19.06.23_c27fe697-removebg-preview.png" alt="" />
            </div>
            <div>
              <h3 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-[#201F52] uppercase font-semibold text-sm mb-2 pt-5 md:pt-0">
                Who we <span className="font-light">are</span>
              </h3>
              <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="uppercase md:text-5xl text-2xl font-semibold text-[#000033]">
                About <span className="font-light">Us</span>
              </h1>
              <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className="text-[#999999] pb-5 md:text-base text-sm leading-normal max-w-screen-lg pt-5">
                Euro Papers is young and dynamic company. We convert paper to produce domestic and commercial products. The products are to be supplied to a variety of consumers ranging from independent retailers to wholesalers, both locally and nationally.
                The comprehensive range of products include specialist hygiene rolls, wet wipes, toilet rolls, hand towels, centre feed rolls and a variety of napkins...
              </p>
              <div className="flex grid-cols-2 items-center gap-5 md:text-base text-xs mt-5">
                <button data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="hover:px-4 items-center text-[#fff] md:text-sm text-xs font-light scroll-smooth duration-500 bg-[#201F52] relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center flex rounded-sm">
                  <a href="./about-us">
                  Learn More
                  </a>
                </button>
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="max-w-lg pt-10 hidden md:block lg:block">
              <img src="WhatsApp Image 2025-03-03 at 19.06.00_1a73f2c2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }

export default Description;