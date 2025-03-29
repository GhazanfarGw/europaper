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
        autoplaySpeed: 4000,
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
    <div className='md:py-40 pt-16 px-5 md:px-10 justify-center mx-auto pb-20 bg-white'>
      <div className='items-center mx-auto max-w-screen-xl'>
        <div className='mx-auto text-center md:pt-40 border-t'>
          <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:text-4xl text-2xl mx-auto pt-12 md:pt-0 pb-8 text-[#1A2B6B]'>
            History and <span className="font-light">Key Milestones​</span>
          </h1>
        </div>
        <Slider {...settings} className='flex mx-auto items-center md:gap-10 md:py-20 md:bg-[#F5F7FD] md:px-5 rounded-lg md:shadow-lg'>
          <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='text-center md:mx-5'>
            <h1 className='text-xl md:text-2xl pb-5 text-[#1A2B6B]'>2019​</h1>
            <div class="md:py-16 py-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#fff] mx-5 px-5 border-[#1A2B6B] border-2">
              <p className='text-[#6D7380] md:text-base text-sm leading-normal font-semibold'>
                Euro Paper was founded, entering the tissue manufacturing and distribution market.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='text-xl md:text-2xl pb-5 text-[#1A2B6B]'>2020-2021</h1>
            <div class="md:py-16 py-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#fff] mx-5 px-5 border-[#1A2B6B] border-2">
              <p className='text-[#6D7380] md:text-base text-sm leading-normal font-semibold'>
                Demand surged due to COVID-19, positioning Euro Paper as a key supplier.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='text-xl md:text-2xl pb-5 text-[#1A2B6B]'>2023​</h1>
            <div class="md:py-16 py-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#fff] mx-5 px-5 border-[#1A2B6B] border-2">
              <p className='text-[#6D7380] md:text-base text-sm leading-normal font-semibold'>
                Achieved CHSA accreditation, reinforcing product quality and compliance.</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='text-xl md:text-2xl pb-5 text-[#1A2B6B]'>2024​</h1>
            <div class="md:py-16 py-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#fff] mx-5 px-5 border-[#1A2B6B] border-2">
              <p className='text-[#6D7380] md:text-base text-sm leading-normal font-semibold'>
                Implemented AI-driven automation with Figure AI to scale production..</p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-5'>
            <h1 className='text-xl md:text-2xl pb-5 text-[#1A2B6B]'>Future Growth​</h1>
            <div class="md:py-16 py-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg bg-[#fff] mx-5 px-5 border-[#1A2B6B] border-2">
              <p className='text-[#6D7380] md:text-base text-sm leading-normal font-semibold'>
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
// import React from 'react'
// import './roadmap.css';


// export default function History() {
//   return (
//     <>
//     <div className='paperbg bg-white hidden md:block lg:block my-20'>
//       <div className='max-w-5xl justify-center md:px-10 px-5 mx-auto md:py-20 py-10'>
//         <div className='mx-auto justify-center text-center'>
//           <span className='md:text-4xl text-3xl text-[#202630] font-semibold'>
//             History and key milestones​
//           </span>
//         </div>
//         <div class="timeline py-5 z-40">
//           <div class="containr left-container">
//             <h6 className='text-3xl font-semibold text-white'>
//               <span className='ml-3'>1</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>2019​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Euro Paper was founded, entering the tissue manufacturing and distribution market.</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr right-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>2</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-start md:text-start mx-auto md:text-2xl font-semibold text-xl'>2020-2021​​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Demand surged due to COVID-19, positioning Euro Paper as a key supplier.</p>
//               <span class="right-container-arrow text-red-800"></span>
//             </div>
//           </div>
//           <div class="containr left-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>3</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>2023​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Achieved CHSA accreditation, reinforcing product quality and compliance.​</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr right-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>4</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-start md:text-start mx-auto md:text-2xl font-semibold text-xl'>2024​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Implemented AI-driven automation with Figure AI to scale production.</p>
//               <span class="right-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr left-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>5</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>Future Growth​​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Scaling from 10,000 to 28,000 tonnes (Stage 1) and 42,000 tonnes (Stage 2).​</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='border-b max-w-screen-xl mx-auto justify-center mt-10'/>
//     </div>

//     <div className='bg-white block md:hidden lg:hidden'>
//       <div className='max-w-5xl justify-center md:px-10 px-5 mx-auto md:py-20 py-10'>
//         <div className='mx-auto justify-center text-center'>
//           <span className='md:text-4xl text-3xl text-[#202630] font-semibold'>
//             History and key milestones​
//           </span>
//         </div>
//         <div class="timeline py-5 z-40">
//           <div class="containr left-container">
//             <h6 className='text-3xl font-semibold text-white'>
//               <span className='ml-3'>1</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>2019​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Euro Paper was founded, entering the tissue manufacturing and distribution market.</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr right-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>2</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-start md:text-start mx-auto md:text-2xl font-semibold text-xl'>2020-2021​​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Demand surged due to COVID-19, positioning Euro Paper as a key supplier.</p>
//               <span class="right-container-arrow text-red-800"></span>
//             </div>
//           </div>
//           <div class="containr left-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>3</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>2023​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Achieved CHSA accreditation, reinforcing product quality and compliance.​</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr right-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>4</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-start md:text-start mx-auto md:text-2xl font-semibold text-xl'>2024​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Implemented AI-driven automation with Figure AI to scale production.</p>
//               <span class="right-container-arrow"></span>
//             </div>
//           </div>
//           <div class="containr left-container">
//             <h6 className='text-3xl font-bold text-white'>
//               <span className='ml-3'>5</span>
//             ​</h6>
//             <div class="py-8 bg-[#FAFAFA] px-10 hover:scale-105 duration-200 cursor-pointer rounded-md shadow-lg border">
//               <h1 className='md:justify-end md:text-end md:text-2xl font-semibold text-xl'>Future Growth​​</h1>
//               <p className='text-[#474D57] md:text-base text-sm leading-normal'>Scaling from 10,000 to 28,000 tonnes (Stage 1) and 42,000 tonnes (Stage 2).​</p>
//               <span class="left-container-arrow"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='border-b max-w-screen-xl justify-center mt-10 mx-5'/>
//     </div>
    
//     </>
//   )
// }
  