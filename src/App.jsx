import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/Header";
import Dishes from "./Components/Dishes";
import About from "./Components/CommonPages/About";
import Mission from "./Components/CommonPages/Mission";
import Experties from "./Components/CommonPages/Experties";
import Review from "./Components/CommonPages/Review";
import Contact from "./Components/CommonPages/Contact";
import Footer from "./Components/CommonPages/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission />
      <Experties />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
