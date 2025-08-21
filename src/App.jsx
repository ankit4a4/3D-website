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

function App() {
  return (
    <Router>
      <ScrollVideo />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Routes></Routes>
    </Router>
  );
}

export default App;
