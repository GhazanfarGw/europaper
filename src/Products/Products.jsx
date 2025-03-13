import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const products = [
    {
        id: 1,
        name: "Blue Center-Pull Paper Towel Roll",
        description: "High-absorbency blue paper towel roll, ideal for industrial and commercial use.",
        image: "./Blue C-Feed.png",
    },
    {
        id: 2,
        name: "Centerfeed Toilet Roll",
        description: "Easy-to-use centerfeed toilet roll for controlled dispensing in hygiene-sensitive environments.",
        image: "/White C-Feed.png",
    },
    {
        id: 3,
        name: "Jumbo Toilet Paper Roll",
        description: "Extra-large toilet roll designed for high-traffic restrooms, reducing maintenance needs.",
        image: "/Jumbo TR.png",
    },
    {
        id: 4,
        name: "Mini Jumbo Toilet Roll",
        description: "Compact yet high-capacity toilet paper roll, balancing efficiency and size.",
        image: "/Mini JTR.png",
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
                    Discover our range of high-quality paper rolls, designed for efficiency and hygiene in both commercial and industrial settings.
                </p>
            </header>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {products.map((product, index) => (
                <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" key={index} className="bg-white p-6 shadow-lg rounded-xl text-center md:hover:scale-105 duration-500">
                    <img data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" src={product.image} alt={product.name} className="w-full object-cover mb-4 rounded-md" />
                    <h2 data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className="md:text-xl font-semibold text-gray-700">{product.name}</h2>
                    <p data-aos="zoom-in-up" data-aos-delay="600" data-aos-duration="400" className="md:text-base text-sm text-[#6D7380] mt-2">{product.description}</p>
                </div>
                ))}
            </div>
        </div>
    </div>

  );
};

export default ProductPage;