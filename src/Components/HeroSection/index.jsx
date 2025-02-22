import React from "react";
import video from "../../assets/hero.mp4";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <img src={logo} alt="restaura" className="w-full p-4" />
        {/* <p></p> */}
      </div>
    </section>
  );
};

export default HeroSection;
