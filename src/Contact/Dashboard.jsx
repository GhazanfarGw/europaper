import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='first bg-local md:h-80 h-48 bg-white'>
        <img className='w-full object-cover md:h-[35rem] h-[20rem]' src='./Screenshot_12.png' alt='image'/>
    </div>
    <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl'>
      <div className='text-white'>
        <h1 className='second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0 text-white'>
            Contact Us
        </h1>
      </div>
    </div>
    </>
  )
}

export default Dashboard