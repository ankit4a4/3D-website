import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import ScrollVideo from "./component/ScrollVideo";
import AboutUs from "./component/home/AboutUs";
import Services from "./component/home/Services";
import Portfolio from "./component/home/Portfolio";
import Testimonials from "./component/home/Testimonials";
import Contact from "./component/home/Contact";
import Footer from "./component/home/Footer";
import Hero from "./component/home/HeroSection";
import ScrollZoomHeart from "./component/animation/ScrollZoomHeart";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <ScrollZoomHeart />
      <Testimonials />
      <Contact />
      <Footer />
      <Routes></Routes>
    </Router>
  );
}

export default App;
