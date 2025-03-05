import React from "react";

function Description() {
    return (
      <>
      <div className="bg-white">
        <div className="max-w-screen-xl md:px-10 px-5 mx-auto">
          <div className="items-center md:flex md:grid-cols-2 mx-auto justify-between border-b py-16">
            <div className="max-w-xs md:pt-10 block md:hidden lg:hidden">
              <img className="first" src="WhatsApp_Image_2025-03-03_at_19.06.23_c27fe697-removebg-preview.png" alt="" />
            </div>
            <div>
              <h3 className="text-[#201F52] font-semibold mb-2 pt-5 md:pt-0">
                Who we are
              </h3>
              <h2 className="md:text-5xl text-3xl mb-4 text-[#202630] font-semibold">
                About us
              </h2>
              <p className="text-[#474D57] pb-5 md:text-base text-sm leading-normal max-w-screen-lg">
                Euro Papers is young and dynamic company. We convert paper to produce domestic and commercial products. The products are to be supplied to a variety of consumers ranging from independent retailers to wholesalers, both locally and nationally.
                The comprehensive range of products include specialist hygiene rolls, wet wipes, toilet rolls, hand towels, centre feed rolls and a variety of napkins...
              </p>
              <div className="flex grid-cols-2 items-center gap-5 md:text-base text-xs mt-5">
                <button className="fourth hover:px-4 items-center text-[#fff] md:text-sm text-xs font-light scroll-smooth duration-500 bg-[#201F52] relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center flex rounded-sm">
                  <a href="./about-us">
                  Learn More
                  </a>
                </button>
              </div>
            </div>
            <div className="max-w-lg pt-10 hidden md:block lg:block">
              <img src="WhatsApp Image 2025-03-03 at 19.06.00_1a73f2c2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }

export default Description;