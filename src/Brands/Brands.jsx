import React,{useEffect, useState} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "PRO-TIS-U", description: "Premium 100% pure cellulose toilet tissue for professional service providers and companies looking to keep up appearances. (even in the washrooms)", logo: "/logobrands/1.png" },
  { id: 2, name: "ECO-TIS-U", description: "100% sustainably sourced soft recycled toilet tissue.", logo: "/logobrands/2.png" },
  { id: 3, name: "PRO-DRI", description: "Our no-nonsense professional grade hand towels. Available in 1ply blue, green, white & 2ply white. Perfect for any bathroom or kitchen.", logo: "/logobrands/3.png" },
  { id: 4, name: "PRO-ACTIVE", description: "Premium wipers for professional use in a variety of locations. Ideal for heavy-duty tasks whether in a workshop or on forecourt. ", logo: "/logobrands/4.png" },
  { id: 5, name: "ECO-ACTIVE", description: "100% sustainably sourced professional grade wipers for use across industry and hospitality.", logo: "/logobrands/5.png" },
  { id: 6, name: "HY-PRO", description: "Professional wiper rolls for use within medical & beauty/spa professions.  Available in blue and white, pure cellulose or 100% recycled fibres.", logo: "/logobrands/6.png" },
  { id: 7, name: "PRIME", description: "Superior absorbency, 100% pure white cellulose & 100% recycled blue, all- purpose towels.", logo: "/logobrands/7.png" },
  { id: 8, name: "VANTAGE ", description: "Strong & absorbent, multi-purpose towels.  Available 100% pure white cellulose & 100% recycled blue.", logo: "/logobrands/8.png" },
  { id: 9, name: "ECO", description: "Super value, strong & absorbent towels.  Available 100% pure white cellulose & 100% recycled blue.", logo: "/logobrands/9.png" },
  { id: 10, name: "CONSORT", description: "Superior quality, luxury soft toilet tissue.  100% pure white cellulose.", logo: "/logobrands/10.png" },
  
];

export default function BrandSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
    useEffect (() => {
      Aos.init ();
    }, [])

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  const handleBrandChange = (index) => {
    if (index !== selectedIndex) {
      setDirection(index > selectedIndex ? 1 : -1);
      setSelectedIndex(index);
    }
  };

  return (
    <div className="md:flex md:flex-col items-center justify-center bg-[#F0F0F0] md:px-10 px-5 min-h-screen py-10 md:py-32">
      <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="uppercase md:text-5xl text-3xl font-semibold text-[#000033] py-3 text-center pt-20 md:pt-0 pb-10">
        Insight to <span className="font-light">the Brand</span>
        </h1>
      {/* Main Display */}
      <motion.div
        key={brands[selectedIndex].id}
        data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className="border md:flex md:grid-cols-2 justify-between items-center mx-auto md:px-20 px-5 pb-10 rounded-lg shadow-lg md:w-3/4 bg-white md:py-20"
        initial={{ opacity: 0, x: direction * 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 100 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
      >
        <div className="max-w-screen-md hidden md:block lg:block">
          <h2 className="text-2xl font-bold">{brands[selectedIndex].name}</h2>
          <p className="text-[#999999] mt-5">{brands[selectedIndex].description}</p>
        </div>
        <div className="">
          <motion.img
            src={brands[selectedIndex].logo}
            alt={brands[selectedIndex].name}
            className="md:h-32 h-24 mt-5 md:mt-0 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
          />
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="600" data-aos-duration="400" className="md:max-w-screen-md block md:hidden lg:hidden text-center md:text-left">
          <h2 className="md:text-2xl text-xl font-bold">{brands[selectedIndex].name}</h2>
          <p className="text-[#999999] md:mt-5 mt-3">{brands[selectedIndex].description}</p>
        </div>
      </motion.div>

      {/* Slider Icons */}
      <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="md:flex grid grid-cols-3 mt-8 md:mt-6 md:space-x-2 md:bg-white md:p-4 md:rounded-lg md:shadow">
        {brands.map((brand, index) => (
          <motion.button
            key={brand.id}
            onClick={() => handleBrandChange(index)}
            className={`md:p-2 px-1 rounded-lg transition-all duration-300 ${
              selectedIndex === index ? "bg-gray-200 scale-110" : "hover:scale-105"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <img src={brand.logo} alt={brand.name} className="h-12" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { motion } from "framer-motion";

// const brands = [
//   {
//     id: 1,
//     name: "TRON Wallet",
//     description: "Created by outstanding community developers of TRON...",
//     logo: "/images/tron-logo.png", // Change to your actual image path
//   },
//   {
//     id: 2,
//     name: "Binance",
//     description: "Leading cryptocurrency exchange platform...",
//     logo: "/images/binance-logo.png",
//   },
//   {
//     id: 3,
//     name: "Ethereum",
//     description: "Decentralized blockchain for smart contracts...",
//     logo: "/images/ethereum-logo.png",
//   },
// ];

// export default function BrandSlider() {
//   const [selectedBrand, setSelectedBrand] = useState(brands[0]);
//   const [direction, setDirection] = useState(1); // 1 = right, -1 = left

//   const handleBrandChange = (newBrand) => {
//     if (newBrand.id !== selectedBrand.id) {
//       setDirection(newBrand.id > selectedBrand.id ? 1 : 1);
//       setSelectedBrand(newBrand);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Main Display */}
//       <motion.div
//         key={selectedBrand.id}
//         className="border p-6 rounded-lg shadow-lg text-center w-3/4 bg-white"
//         initial={{ opacity: 0, x: direction * 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -direction * 100 }}
//         transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
//       >
//         <motion.img
//           src={selectedBrand.logo}
//           alt={selectedBrand.name}
//           className="h-32 mx-auto"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring", stiffness: 80 }}
//         />
//         <h2 className="text-xl font-bold mt-4">{selectedBrand.name}</h2>
//         <p className="text-gray-600">{selectedBrand.description}</p>
//       </motion.div>

//       {/* Slider Icons */}
//       <div className="flex mt-6 space-x-4 bg-white p-4 rounded-lg shadow">
//         {brands.map((brand) => (
//           <motion.button
//             key={brand.id}
//             onClick={() => handleBrandChange(brand)}
//             className={`p-2 rounded-lg transition-all duration-300 ${
//               selectedBrand.id === brand.id ? "bg-gray-200 scale-110" : "hover:scale-105"
//             }`}
//             whileTap={{ scale: 0.9 }}
//           >
//             <img src={brand.logo} alt={brand.name} className="h-12" />
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }
