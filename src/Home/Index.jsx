import React from 'react';
import Header from "./header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Subscribe from './Subscribe';
import Slider from './Slider';
import Difference from './Difference';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Difference/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Index
