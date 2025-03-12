import React,{ useEffect, useRef} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Business Data
const businessUnits = [
  {
    id: 1,
    title: "Due Diligence​​",
    description:
      "Full data room access available upon signing a Non-Disclosure Agreement (NDA).",
    img: "/Screenshot_4.png",

  },
  {
    id: 2,
    title: "Investor Q&A Session​",
    description:
      "Scheduled meetings with key stakeholders, including the leadership team and financial advisors.​​",
    img: "./Screenshot_5.png",
    // link: "https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme",
  },
  {
    id: 3,
    title: "Term Sheet Review & Commitments​​",
    description:
      "Review of the investment terms and final commitment decisions.​.​",
    img: "./Screenshot_6.png",
  },
];

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#003180] text-2xl mx-2" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#003180] text-2xl mx-2" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

function Post() {
    useEffect (() => {
      Aos.init ();
    }, [])
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
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
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto text-[#000033] md:px-10 px-5 md:py-10 pb-10'>
        <div className='md:pt-20 pt-10 mx-auto justify-center'>
          <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="uppercase md:text-4xl text-2xl font-semibold text-[#000033] pt-20 md:pt-0">
            Next <span className="font-light">Steps</span>
          </h1>
        </div>
        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className='md:pt-5'>
          {businessUnits.map((business) => (
            <Tooltip key={business.id} title={business.title}>
              <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:hover:scale-105 duration-300 rounded-lg h-[20rem]'>
                <a href={business.link} className='justify-center items-center md:px-3 py-10 block'>
                  <img className='pb-5' src={business.img} alt={business.title} />
                  <span className='text-xl font-semibold pt-5 border-b border-[#000033] text-[#000033]'>
                    {business.title}
                  </span>
                  <p className='pt-3 text-sm text-[#999999] justify-center'>
                    {business.description}
                  </p>
                </a>
                {/* <div className="text-xs fourth mx-auto rounded-full -mt-4 w-48 hover:scale-105 hover:px-4 bg-[#003180] h-8 tracking-wide uppercase justify-center text-center flex items-center text-white">
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
