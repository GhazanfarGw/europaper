import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Preloader from "./Preload";
import Home from "./Home/Index"

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
        </Routes>
      )}
    </>

  )
}

export default App
                  