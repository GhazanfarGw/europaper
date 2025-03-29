import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Essentials() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='mx-auto justify-center md:py-20 py-10 bg-[#DFE7FB]'>
        <div className='md:flex md:grid-cols-2 justify-between mx-auto overflow-hidden items-center max-w-screen-xl md:px-10 px-5'>
            <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:w-48 w-20 justify-center'>
                <img src="/logobrands/CHSA®-2024-Accreditation-Soft-Tissue.png" alt="CHSA"/>
            </div>
            <div className='max-w-screen-md mx-auto md:text-left pt-5'>
                <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-[#201F52] md:text-xl text-base leading-normal'>Accreditations</h1>
                <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:text-lg text-sm text-[#555C6C] pt-4 leading-normal'>
                    We are proud members of the CHSA Soft Tissue Accreditation Scheme.  The scheme ensures clients can purchase products with confidence that are manufactured to declared specification.  Our products are tested throughout the year by the CHSA’s own independent inspector to ensure they meet the standards set out within the scheme.
                </p>
                <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='md:text-[12px] text-[#6D7380] pt-4 text-[10px] leading-normal'>
                    As part of our continual improvement programme, we are working to achieve further accreditations including, UKAS(ISO), FSC, BRC.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}