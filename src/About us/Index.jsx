import React from 'react'
import Header from "../Home/header";
import Footer from "../Home/Footer";
import Dashboard from "./Dashboard";
import About from "./Aboutus";
import History from "./History";
import Sub from "../Home/Subscribe";


export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <History/>
    <Sub/>
    <Footer/>
    </>
  )
}
