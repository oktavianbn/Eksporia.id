import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Map from "./pages/map";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <div className="relative z-0 ">
      <About />
      </div>
      <Map/>
    </>
  );
}

export default App;
