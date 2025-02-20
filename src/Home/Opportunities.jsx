import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Business Data
const businessUnits = [
  {
    id: 1,
    title: "Coupon Yield​​",
    description:
      "Long-term investors benefit from stable cash flows until redemption, conversion into equity.",
    img: "/Screenshot_4.png",

  },
  {
    id: 2,
    title: "Strategic Acquisition",
    description:
      "Sale to global tissue manufacturers like Essity or Kimberly-Clark.​",
    img: "./Screenshot_5.png",
    // link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
  },
  {
    id: 3,
    title: "Private Equity Sale​",
    description:
      "Institutional buyout at target EBITDA multiples​.​",
    img: "./Screenshot_6.png",
  },
  {
    id: 4,
    title: "IPO Listing​​",
    description:
      "Potential Equity Initial Public Offering by 2029​​",
    img: "./Screenshot_7.png",
  },
];

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#59A93D] text-2xl mx-2" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#59A93D] text-2xl mx-2" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

function Post() {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }
    ]
  };

  return (
    <div className='mx-auto px-5 items-center md:py-20 bg-[#09151B]'>
      <div className='max-w-screen-xl mx-auto text-[#fff] border-b border-[#59A93D] pb-20 border-opacity-25'>
        <div className='pt-20 mx-auto justify-center text-center'>
          <span className='md:text-5xl text-3xl text-[#ffffff] text-center mx-auto justify-center border-b border-[#ffffff]'>
            Exit Opportunities ​
          </span>
        </div>
        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className='pt-20'>
          {businessUnits.map((business) => (
            <Tooltip key={business.id} title={business.title}>
              <div className='boximage hover:scale-105 duration-300 rounded-lg h-[20rem]'>
                <a href={business.link} className='justify-center items-center px-3 py-10 block'>
                  <img className='px-5 pb-5' src={business.img} alt={business.title} />
                  <span className='text-xl font-semibold pt-5 px-3 border-b border-[#fff] text-[#fff]'>
                    {business.title}
                  </span>
                  <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
                    {business.description}
                  </p>
                </a>
                {/* <div className="text-xs fourth mx-auto rounded-full -mt-4 w-48 hover:scale-105 hover:px-4 bg-[#59A93D] h-8 tracking-wide uppercase justify-center text-center flex items-center text-white">
                  <a href={business.link}>Click For More</a>
                </div> */}
              </div>
            </Tooltip>
          ))}
        </Slider>

        {/* Custom Navigation Arrows Below the Slider */}
        <div className="flex justify-center items-center mt-10">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>

      </div>
    </div>
  );
}

export default Post;
