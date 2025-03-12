import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Preloader from "./Preload";
import Home from "./Home/Index"
import Brand from "./Brands/Index"
import About from "./About us/Index"
import Contact from "./Contact/Index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/our-brands" element={ <Brand/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/contact-us" element={ <Contact/> } />
        </Routes>
      )}
    </>

  )
}

export default App
                  