// import React from 'react'
// import Header from "../Home/header";
// import Footer from "../Home/Footer";
// import Dashboard from "./Dashboard";
// import About from "./Aboutus";
// import History from "./History";
// import Sub from "../Home/Subscribe";


// export default function Index() {
//   return (
//     <>
//     <Header/>
//     <Dashboard/>
//     <About/>
//     <History/>
//     <Sub/>
//     <Footer/>
//     </>
//   )
// }


import React from 'react'

export default function Team() {
  return (
    <>
    <div className='mx-auto justify-center text-center min-h-screen overflow-hidden md:px-10 px-5 bg-white'>
      <div className='items-center md:py-80 py-40'>
        <h1 className='first md:text-6xl font-light text-4xl text-[#444444]'>
          Page is Under Construction
        </h1>
        <p className='second md:text-lg text-sm mt-6 text-[#777]'>
          Our team is working hard to bring this page to life. Please check back soon!
        </p>
        <p className='third md:text-lg text-sm mt-10 text-[#777] pb-10'>
          Thank you for your patience as we finalize the details.
        </p>
        <a className='fourth mt-5' href="/">
        <span className='py-2 px-4 border border-[#201F52] text-[#444444]'>
          Back to Dashboard Page
        </span>
        </a>
      </div>
    </div>
    </>
  )
}
