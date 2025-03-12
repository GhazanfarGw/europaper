import React from 'react';
import Header from "./header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Sustainable from './Sustainable';
import Investor from "./Investor"
import Euro from "./Europaper"
import Opportunities from "./Opportunities"
import Subscribe from './Subscribe';
import Slider from './Slider';
import Difference from './Difference';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    {/* <Sustainable/> */}
    {/* <Investor/> */}
    {/* <Euro/> */}
    {/* <Slider/> */}
    <Opportunities/>
    <Difference/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Index