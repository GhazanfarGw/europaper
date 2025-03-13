import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Email from './Email';

export default function Updates() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='bg-[#F0F3FF]'>
        <div className='md:max-w-screen-xl justify-center mx-auto md:py-32 md:px-10 px-5 py-20'>
            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='uppercase font-semibold text-[#1A2B6B] text-sm md:text-base'>
                STAY UP TO DATE
            </p>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#1A2B6B] md:flex md:grid-cols-2 justify-between mx-auto'>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-md md:py-0 py-10 block md:hidden lg:hidden'>
                    <img className='mx-auto' src='./headoffice.png' alt='logo'/>
                </div>
                <div>
                    <h1 className='md:text-4xl text-2xl mx-auto md:pt-20 pt-5'>
                        Get our latest insights and company <br ClassName="hidden md:block lg:block"/>announcements. <br/>
                        <span className='text-sm text-[#4b4b4b]'>
                            For event updates, news, and exclusive insights, subscribe to our newsletter.
                        </span>
                    </h1>
                    <div className="pt-5">
                        <Email/>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-md md:py-0 py-10 hidden md:block lg:block'>
                    <img className='mx-auto' src='./headoffice.png' alt='logo'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
