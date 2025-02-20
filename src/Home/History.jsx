import React from 'react'
import './roadmap.css';


export default function History() {
  return (
    <>
    <div className='max-w-screen-xl justify-center md:px-10 px-5 mx-auto py-20'>
      <div className='mx-auto justify-center text-center'>
        <span className='md:text-5xl text-3xl text-[#ffffff] text-center mx-auto justify-center border-b border-[#ffffff]'>
          History and Key Milestones​
        </span>
      </div>
      <div class="timeline py-5">
        <div class="containr left-container">
          <h6 className='text-3xl font-bold text-white'>
            <span className='md:ml-3'>1</span>
          ​</h6>
          <div class="py-8 bg-white px-10 hover:scale-105 duration-200 cursor-pointer">
            <h1 className='justify-end text-end text-2xl font-bold'>2019​</h1>
            <p className='text-lg'>Euro Paper was founded, entering the tissue manufacturing and distribution market.</p>
            <span class="left-container-arrow"></span>
          </div>
        </div>

        <div class="containr right-container">
          <h6 className='text-3xl font-bold text-white'>
            <span className='ml-3'>2</span>
          ​</h6>
          <div class="py-8 bg-white px-10 hover:scale-105 duration-200 cursor-pointer">
            <h1 className='justify-start text-start mx-auto text-2xl font-bold'>2020-2021​​</h1>
            <p>Demand surged due to COVID-19, positioning Euro Paper as a key supplier.</p>
            <span class="right-container-arrow text-red-800"></span>
          </div>

        </div>

        <div class="containr left-container">
          <h6 className='text-3xl font-bold text-white'>
            <span className='md:ml-3'>3</span>
          ​</h6>
          <div class="py-8 bg-white px-10 hover:scale-105 duration-200 cursor-pointer">
            <h1 className='justify-end text-end text-2xl font-bold'>2023​</h1>
            <p>Achieved CHSA accreditation, reinforcing product quality and compliance.​</p>
            <span class="left-container-arrow"></span>
          </div>

        </div>

        <div class="containr right-container">
          <h6 className='text-3xl font-bold text-white'>
            <span className='ml-3'>4</span>
          ​</h6>
          <div class="py-12 bg-white px-10 hover:scale-105 duration-200 cursor-pointer">
            <h1 className='justify-start text-start mx-auto text-2xl font-bold'>2024​</h1>
            <p>Implemented AI-driven automation with Figure AI to scale production.</p>
            <span class="right-container-arrow"></span>
          </div>

        </div>
        <div class="containr left-container">
          <h6 className='text-3xl font-bold text-white'>
            <span className='md:ml-3'>5</span>
          ​</h6>
          <div class="py-8 bg-white px-10 hover:scale-105 duration-200 cursor-pointer">
            <h1 className='justify-end text-end text-2xl font-bold'>Future Growth​​</h1>
            <p>Scaling from 10,000 to 28,000 tonnes (Stage 1) and 42,000 tonnes (Stage 2).​</p>
            <span class="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
  