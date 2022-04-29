import React from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
