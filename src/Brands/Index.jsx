import React from 'react'
import Header from "./header";
import Footer from "../Home/Footer";
import Brands from "./Brands";
import Accreditations from "./Accreditations";
import Sub from "../Home/Subscribe";


export default function Index() {
  return (
    <>
    <Header/>
    <Brands/>
    <Accreditations/>
    <Sub/>
    <Footer/>
    </>
  )
}
