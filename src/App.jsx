import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/Header";
import Dishes from "./Components/Dishes";
import About from "./Components/CommonPages/About";
import Mission from "./Components/CommonPages/Mission";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission/>
    </main>
  );
};

export default App;
