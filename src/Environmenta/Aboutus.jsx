import { Card, CardContent } from "./Card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function About() {
    useEffect (() => {
      Aos.init ();
    }, [])
  const items = [
    {
      title: "90% Recycled Materials",
      description:
        "Our converted paper is made from post-consumer waste, including used books, magazines, newsprint, and office paper.",
    },
    {
      title: "FSC-Certified Suppliers",
      description:
        "We source paper exclusively from Forest Stewardship Council (FSC)-registered suppliers, ensuring responsible forest management.",
    },
    {
      title: "Eco-Friendly Packaging",
      description:
        "Our cardboard is 100% recycled and recyclable. Our packaging contains a minimum of 30% recycled plastic, with ongoing efforts to increase this percentage.",
    },
    {
      title: "Zero-Waste Commitment",
      description:
        "We recycle 100% of our plastic, cardboard, and paper waste, actively supporting a circular economy.",
    },
  ];

  const qualityAssurance = [
    {
      title: "CHSA Soft Tissue Accreditation",
      description:
        "As proud members of the CHSA Soft Tissue Accreditation Scheme, we ensure our products meet strict manufacturing standards.",
    },
    {
      title: "Independent Testing",
      description:
        "Our products undergo regular inspections and testing by CHSA’s independent inspector to guarantee compliance with declared specifications.",
    },
    {
      title: "Future Accreditations",
      description:
        "As part of our continual improvement program, we are actively working towards additional certifications, including UKAS (ISO), FSC, and BRC.",
    },
  ];

  return (
    <div id='about' className='mx-auto items-center bg-gradient-to-b from-gray-50 to-gray-200 justify-center overflow-hidden pt-5 scroll-smooth duration-500 md:mt-32 text-[#000]'>
        <div className='mx-auto justify-center max-w-screen-xl md:pt-20 md:px-10 px-5'>
            <div className="min-h-screen md:py-12">
                <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='justify-center mx-auto items-center'>
                    <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#000]'>
                        Environmental Care
                    </p>
                    <p className='uppercase font-semibold text-[#201F52] pt-10 text-xs'>
                        WHAT WE DO
                    </p>
                </div>
                <div className="mx-auto">
                    <motion.h1
                    className="md:text-4xl text-xl mx-auto md:pt-10 pt-5 text-[#1A2B6B]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400"
                    >
                    Environmental Responsibility
                    </motion.h1>
                    <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-5 md:pt-16 pt-8">
                        {items.map((item, index) => (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            >
                            <Card className="shadow-md bg-white p-4 flex items-start space-x-4 hover:scale-105 duration-500 cursor-wait">
                                <CheckCircle className="text-green-600 w-10 h-6 mt-1" />
                                <CardContent>
                                <h2 className="font-semibold text-lg text-gray-900">{item.title}</h2>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="mx-auto md:mt-20 mt-10 md:border-t md:border-[#1A2B6B] border-opacity-20">
                    <motion.h1
                    className="md:text-4xl text-xl mx-auto md:pt-10 pt-5 text-[#1A2B6B]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    >
                    Accredited Quality Assurance
                    </motion.h1>
                    <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-5 md:pt-16 pt-8">
                    {qualityAssurance.map((qa, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        >
                        <Card className="shadow-md bg-white p-4 flex items-start space-x-4">
                            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                            <CardContent>
                            <h2 className="font-semibold text-lg text-gray-900">{qa.title}</h2>
                            <p className="text-gray-600 text-sm">{qa.description}</p>
                            </CardContent>
                        </Card>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="max-w-screen-lg mx-auto md:text-base text-sm justify-center text-center py-10 md:py-20 text-gray-600">
                <p>
                    At Euro Paper, sustainability and quality go hand in hand. We are committed to innovation, responsibility, and excellence—delivering products that meet the highest environmental and industry standards.
                </p>
            </div>
        </div>
    </div>
  );
}

export default About
