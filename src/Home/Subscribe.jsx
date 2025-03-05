import React from 'react';
import Email from './Email';

const Discover = () => {
    return (
        <>
            <div className='items-center overflow-hidden mx-auto bg-[#ffffff]'>
                <div className='md:px-10 px-5 justify-center text-center md:py-32 py-5'>
                    <div className='mx-auto overflow-hidden text-[#000]'>
                        <h1 className='md:text-5xl py-2 text-xl font-light'>
                            Subscribe our newsletter
                        </h1>
                        <div className='max-w-xs justify-center text-center mx-auto overflow-hidden pt-5'>
                            <div className='fourth text-black'>
                                <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;