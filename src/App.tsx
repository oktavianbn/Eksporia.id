import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Map from "./pages/map";
import { ParallaxProvider } from "react-scroll-parallax";
import Potensi from "./pages/Potensi";
import Informasi from "./pages/Informasi";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <Potensi/>
      <Map/>
      <Informasi/>
    </>
  );
}

export default App;
