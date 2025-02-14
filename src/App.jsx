import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/Header";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar/>
    </main>
  );
};

export default App;
