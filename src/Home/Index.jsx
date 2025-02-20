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
import History from './History';
import Discover from './Discover';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <History/>
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