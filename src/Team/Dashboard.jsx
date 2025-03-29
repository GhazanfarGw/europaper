import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='first bg-local md:h-80 h-48 bg-white'>
        <img className='w-full object-cover md:h-[30rem] h-[20rem]' src='./WF-543406-New-Article-Banners-for-Blog-Thumbnail_11-pro-tips-for-running-a-more-effective-meeting_Blog-Tile_3000x1134-scaled.jpg' alt='image'/>
    </div>
    <div className='md:px-10 mx-auto justify-center px-5 max-w-screen-xl'>
      <div className='text-white'>
        <h1 className='second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0 text-white'>
            Our People
        </h1>
      </div>
    </div>
    </>
  )
}

export default Dashboard