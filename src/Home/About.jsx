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
          <div className="items-center mx-auto border-b md:py-48 py-20">
            {/* <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="max-w-xs md:pt-10 block md:hidden lg:hidden">
              <img className="first" src="WhatsApp_Image_2025-03-03_at_19.06.23_c27fe697-removebg-preview.png" alt="" />
            </div> */}
            <div className="text-center mx-auto justify-center max-w-screen-lg">
              <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className="text-[#999999] pb-5 md:text-lg text-sm leading-normal pt-5 first-letter:text-4xl">
                Founded in 2019, Euro Paper has established a strong reputation for manufacturing and distributing high-quality tissue products across multiple sectors.
              <br /><br />
                We are excited to announce plans to expand our operations by adding more converting lines and developing a new, purpose-built manufacturing plant. This investment will help us uphold our core values of quality and service.
              </p>
              <div className="flex grid-cols-2 items-center gap-5 md:text-base text-xs mt-5 text-center mx-auto justify-center">
                <button data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="hover:px-4 items-center text-[#fff] md:text-sm text-xs font-light scroll-smooth duration-500 bg-[#201F52] relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center flex rounded-sm">
                  <a href="./about-us">
                  Learn More
                  </a>
                </button>
              </div>
            </div>
            {/* <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="max-w-lg pt-10 hidden md:block lg:block">
              <img src="WhatsApp Image 2025-03-03 at 19.06.00_1a73f2c2.jpg" alt="" />
            </div> */}
          </div>
        </div>
      </div>

      </>
    );
  }

export default Description;