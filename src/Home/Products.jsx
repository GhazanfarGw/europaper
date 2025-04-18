import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const products = [
    {
        id: 1,
        description: "Toilet paper rolls on a conveyor belt in a factory, ready for packaging.",
        image: "/IMG_2757 (1).jpg",
    },
    {
        id: 2,
        description: "Large toilet paper rolls (jumbo rolls) stored vertically in a machine, ready for processing or cutting.",
        image: "/IMG_2755 (1).jpg",
    },
    {
        id: 3,
        description: "High-speed circular cutting machine used to slice jumbo toilet paper rolls into smaller rolls for packaging.",
        image: "/IMG_2754 (1).jpg",
    },
];

const ProductPage = () => {
    useEffect (() => {
    Aos.init ();
    }, [])
  return (
    <div className="md:flex md:flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 md:px-10 px-5 min-h-screen py-10 md:py-32">
        <div className="min-h-screen md:pt-32">
            <header className="text-center mb-10">
                <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:text-5xl text-3xl mx-auto text-center pt-20 md:pt-0 text-[#1A2B6B]'>
                    Our Products
                </h1>
                <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="mt-5 max-w-2xl mx-auto md:text-base text-sm text-[#6D7380]">
                    Explore our advanced toilet paper production line—featuring precision cutting and high-capacity roll processing—for premium quality and performance in industrial and commercial use.
                </p>
            </header>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {products.map((product, index) => (
                <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" key={index} className="bg-white p-6 shadow-lg rounded-xl text-center md:hover:scale-105 duration-500">
                    <img data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" src={product.image} alt={product.name} className="w-full object-cover mb-4 rounded-md" />
                    <p data-aos="zoom-in-up" data-aos-delay="600" data-aos-duration="400" className="md:text-base text-sm text-[#6D7380] mt-2">{product.description}</p>
                </div>
                ))}
            </div>
        </div>
    </div>

  );
};

export default ProductPage;