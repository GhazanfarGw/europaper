// import React from 'react'

// function Agency() {
//   return (

//     <>
//     {/* <div data-aos="zoom-in-up" data-aos-delay="300" className='grid-cols-4 px-5 mx-auto justify-center text-center items-center block md:hidden lg:hidden pt-20 pb-20'>
//       <h1 className='text-3xl text-[#dfc660] justify-center text-center mx-5 pt-3'>
//         Protect your transaction from.
//       </h1>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-2'>
//         <img src="../logos/anduril.jpg" alt="" />
//       </div>
//       <div className='w-80 flex items-center justify-center h-0 mx-auto gap-x-0 pt-5'>

//       </div>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-3 pt-5'>

//       </div>
//       <div className='flex items-center justify-center h-28 mx-auto'>
 
//       </div>
//       <div className='flex items-center justify-center h-0 mx-auto gap-x-1 pt-3'>

//       </div>
//     </div> */}
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-32 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20 hidden md:block lg:block' >
        // <h1 className='justify-center text-center mx-5 md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
        //     We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
        // </h1>
//         <div className='grid grid-cols-4 justify-center text-center mx-5 gap-3 mt-10'>
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>


//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-20 px-5 md:px-10 justify-center mx-auto max-w-screen-xl pb-20 block md:hidden lg:hidden mt-24'>
//         <h1 className='justify-center text-center mx-5 md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
//             We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
//         </h1>
//         <div className='grid grid-cols-2 justify-center text-center mx-5 gap-3 mt-10'>
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Agency

import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
    useEffect (() => {
      Aos.init ();
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='md:pt-28 pt-16 px-5 md:px-10 justify-center mx-auto pb-20 bg-white'>
      <div className='items-center mx-auto text-[#000] max-w-screen-xl'>
        <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="uppercase md:text-4xl text-2xl md:text-center font-semibold text-[#000033] py-3 pt-20 md:pt-28">
          Who we <span className="font-light">are</span>
        </h1>
        <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='pb-10 justify-center md:text-center mx-auto md:max-w-2xl md:text-lg font-light text-base text-[#777]'>
          Euro Papers is young and dynamic company. We convert paper to produce domestic and commercial products. The products are to be supplied to a variety of consumers ranging from independent retailers to wholesalers, both locally and nationally.
          The comprehensive range of products include specialist hygiene rolls, wet wipes, toilet rolls, hand towels, centre feed rolls and a variety of napkins.
          <br /><br />
          Our customer base includes the food service industry, the janitorial, industrial, automotive, healthcare distributors including the NHS and to the general retail trade. We will also supply clearance products to the local traders.
          <br /><br />
          We always put our customers first and our aim is achieve 100% customers satisfaction with our great products. We treat all our orders , small or large with the care and respect they deserve.
        </p>
        <div className='mx-auto text-center md:pt-16 border-t'>
          <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="uppercase md:text-4xl text-2xl text-center font-semibold text-[#000033] pt-12 md:pt-0 pb-10">
            History and <span className="font-light">key milestones​</span>
          </h1>
        </div>
        <Slider {...settings} className='flex mx-auto items-center gap-10 md:py-20 md:bg-[#F0F0F0] md:px-5 rounded-lg md:shadow-lg'>
          <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='md:text-2xl font-semibold text-2xl pb-5 text-black'>2019​</h1>
            <div class="py-8 mx-1 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#201F52] px-3">
              <p className='text-[#ffffff] text-sm leading-normal'>
                Euro Paper was founded, entering the tissue manufacturing and distribution market.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='md:text-2xl font-semibold text-2xl pb-5 text-black'>2020-2021</h1>
            <div class="py-8 mx-1 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#201F52] px-3">
              <p className='text-[#ffffff] text-sm leading-normal'>
                Demand surged due to COVID-19, positioning Euro Paper as a key supplier.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='md:text-2xl font-semibold text-2xl pb-5 text-black'>2023​</h1>
            <div class="py-8 mx-1 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#201F52] px-3">
              <p className='text-[#ffffff] text-sm leading-normal'>
                Achieved CHSA accreditation, reinforcing product quality and compliance.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='md:text-2xl font-semibold text-2xl pb-5 text-black'>2024​</h1>
            <div class="py-8 mx-1 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#201F52] px-3">
              <p className='text-[#ffffff] text-sm leading-normal'>
                Implemented AI-driven automation with Figure AI to scale production..</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='md:text-2xl font-semibold text-2xl pb-5 text-black'>Future Growth​</h1>
            <div class="py-8 mx-1 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#201F52] px-3">
              <p className='text-[#ffffff] text-sm leading-normal'>
              Scaling from 10,000 to 28,000 tonnes (Stage 1) and 42,000 tonnes (Stage 2).</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Post;