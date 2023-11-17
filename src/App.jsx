import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import PopularCoupon from "./components/PopularCoupon";
import DealOfTheDay from "./components/DealOfTheDay";
import PopularMembership from "./components/PopularMembership";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCoupon />
      <DealOfTheDay />
      <PopularMembership />
      <Newsletter />
      <HowItWorks />
      <Team />
      <Footer />
    </>
  );
}

export default App;
