import React from "react";
// Necessary imports for react router for navigation
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing Navbar component
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (<Router>

    {/* This brings the navbar component */}
    <Navbar />

    {/* This container loads the pages as component within. This reacts to the navbar links. */}
    <div className="container mt-4">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = { <About />} />
        <Route path = '/contact' element = { <Contact /> } />
      </Routes>

    </div>
  </Router>
  )
};

export default App;