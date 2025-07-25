import { ParallaxProvider } from "react-scroll-parallax";
import "./index.css";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Informasi from "./pages/Informasi";
import Potensi from "./pages/Potensi";
import Map from "./pages/Мap";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <Potensi/>
      <Map/>
      <Informasi/>
      <Footer/>
    </>
  );
}

export default App;
