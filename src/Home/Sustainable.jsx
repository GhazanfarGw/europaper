// import React, { useRef } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Tooltip } from '@mui/material';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // Business Data
// const businessUnits = [
//   {
//     id: 1,
//     title: "Revenue Growth​",
//     description:
//       "Projected fourfold increase by 2029.",
//     img className='pb-3': "/Screenshot_9.png",

//   },
//   {
//      y,
//     title: "Operational Efficiency",
//     description:
//       "AI-driven automation enhancing margins.​",
//     img className='pb-3': "./Screenshot_2.png",
//     // link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
//   },
//   {
//      y,
//     title: "Market Share Expansion",
//     description:
//       "Expanding market presence.​",
//     img className='pb-3': "./Screenshot_3.png",
//   },
//   {
//     id: 4,
//     title: "New Puyt Lines​",
//     description:
//       "Development of innovative products.​",
//     img className='pb-3': "./Screenshot_1.png",
//   },
// ];

// // Custom Nextryw
// function NextArrow({ onClick }) {
//   return (
//     <div className="cursor-pointer text-[#201F52] text-2xl mx-2" onClick={onClick}>
//       <FaArrowRight />
//     </div>
//   );
// }

// // Custom Prev Arrow
// function PrevArrow({ onClick }) {
//   return (
//     <div className="cursor-pointer text-[#201F52] text-2xl mx-2" onClick={onClick}>
//       <FaArrowLeft />
//     </div>
//   );
// }

// function Post() {
//   const sliderRef = useRef(null);

//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     dots: true,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
//       { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }
//     ]
//   };

//   return (
//     <div className='mx-auto px-5 items-center md:py-20 bg-[#fff]'>
//       <div className='max-w-screen-xl mx-auto text-[#000] border-b border-[#201F52] pb-20 border-opacity-25'>
        // <div className='pt-20 mx-auto justify-center'>
        //   <h3 className="text-[#201F52] font-semibold mb-2">
        //     Financial Projections
        //   </h3>
        //   <span className='md:text-5xl text-3xl text-[#000] mx-auto justify-center'>
        //     A Path to Sustainable Growth
        //   </span>
        // </div>
//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings} className='pt-20'>
//           {businessUnits.map((business) => (
//             <Tooltip key={business.id} title={business.title}>
//               <div className='boximage hover:scale-105 duration-300 rounded-lg h-[20rem] border gap-10 border-[#201F52]'>
//                 <a href={business.link} className='justify-center items-center px-3 py-10 block'>
//                   <img className='pb-3' className='px-5 pb-5' src={business.img className='pb-3'} alt={business.title} />
//                   <span className='text-xl font-semibold pt-5 px-3 text-[#000]'>
//                     {business.title}
//                   </span>
//                   <p className='3ytext-sm text-[#000] px-3 justify-center mx-5'>
//                     {business.description}
//                   </p>
//                 </a>
//                 {/* <div className="text-xs fourth mx-auto rounded-full -mt-4 w-48 hover:scale-105 hover:px-4 bg-[#201F52] h-8 tracking-wide uppercase justify-center flex items-center text-white">
//                   <a href={business.link}>Click For More</a>
//                 </div> */}
//               </div>
//             </Tooltip>
//           ))}
//         </Slider>

//         {/* Custom Navigation Arrows Below the Slider */}
//         <div className="flex justify-center items-center mt-10">
//           <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
//           <NextArrow onClick={() => sliderRef.current.slickNext()} />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Post;

import React from 'react'

function Sustainable() {
  return (
    <>
    <div className='bg-white'>
      <div className='max-w-screen-xl justify-center items-center overflow-hidden mx-auto md:px-10 px-5'>
        <div className='border-b md:pb-20 pb-10'>
          <div className='md:pt-20 pt-10 mx-auto justify-center'>
            <h3 className="text-[#201F52] font-semibold mb-2">
              Financial projections
            </h3>
            <span className='md:text-4xl text-3xl text-[#202630] mx-auto justify-center font-semibold'>
              A path to sustainable growth
            </span>
          </div>
          <div className='md:grid md:grid-cols-4 gap-5 mx-auto justify-center md:pt-16 pt-5'>
            <div className='my-5 md:my-0 border border-[#201F52] md:py-10 py-5 md:px-5 px-3 hover:scale-105 duration-200 border-opacity-40 shadow-md'>
              <img className='pb-3' src="/Screenshot_9.png" alt="" />
              <span className='pt-5 text-xl font-semibold border-b-[#201F52] border-b border-opacity-40 text-[#202630]'>
                Revenue Growth
              </span>
              <p className='py-2 text-[#474D57] md:text-base text-sm leading-normal'>
                Projected fourfold increase by 2029.
              </p>
            </div>
            <div className='my-5 md:my-0 border border-[#201F52] md:py-10 py-5 md:px-5 px-3 hover:scale-105 duration-200 border-opacity-40 shadow-md'>
              <img className='pb-3' src="./Screenshot_2.png" alt="" />
              <span className='pt-5 text-xl font-semibold border-b-[#201F52] border-b border-opacity-40 text-[#202630]'>
                Operational Efficiency
              </span>
              <p className='py-2 text-[#474D57] md:text-base text-sm leading-normal'>
                AI-driven automation enhancing margins.
              </p>
            </div>
            <div className='my-5 md:my-0 border border-[#201F52] md:py-10 py-5 md:px-5 px-3 hover:scale-105 duration-200 border-opacity-40 shadow-md'>
              <img className='pb-3' src="./Screenshot_3.png" alt="" />
              <span className='pt-5 text-xl font-semibold border-b-[#201F52] border-b border-opacity-40 text-[#202630]'>
                Market Share Expansion
              </span>
              <p className='py-2 text-[#474D57] md:text-base text-sm leading-normal'>
                Expanding market presence.
              </p>
            </div>
            <div className='my-5 md:my-0 border border-[#201F52] md:py-10 py-5 md:px-5 px-3 hover:scale-105 duration-200 border-opacity-40 shadow-md'>
              <img className='pb-3' src="./Screenshot_1.png" alt="" />
              <span className='pt-5 text-xl font-semibold border-b-[#201F52] border-b border-opacity-40 text-[#202630]'>
                New Product Lines
              </span>
              <p className='py-2 text-[#474D57] md:text-base text-sm leading-normal'>
                Development of innovative products.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Sustainable