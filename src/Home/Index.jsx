import React from 'react';
import Header from "./header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Subscribe from './Subscribe';
import Difference from './Difference';
import Accreditations from "./Accreditations"

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Difference/>
    <Accreditations/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Index