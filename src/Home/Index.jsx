import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Business from './Business';
import Investor from "./Investor"
import Euro from "./Europaper"
import Investment from "./Investment"
import Opportunities from "./Opportunities"
import Discover from './Discover';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Business/>
    <Investor/>
    <Euro/>
    <Investment/>
    <Opportunities/>
    <Discover/>
    <Footer/>
    </>
  )
}

export default Index
