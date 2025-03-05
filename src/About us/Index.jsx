import React from 'react'
import Header from "../Home/header";
import Footer from "../Home/Footer";
import Dashboard from "./Dashboard";
import About from "./About";


export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Footer/>
    </>
  )
}
