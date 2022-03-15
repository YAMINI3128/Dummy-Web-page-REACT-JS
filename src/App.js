import "./App.css";
import Navbar from "../src/Components/Navbar";
import Slider from "./Components/Slider";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Signup from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Portfolio />
      <Contact />
      <Footer />
      <About />
      <Signup />
    </>
  );
}

export default App;
