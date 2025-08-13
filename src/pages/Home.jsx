import React from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import Reveal from "../Reveal.jsx";

export default function Home() {
  return (
    <div className="reveal-seq">
      <Reveal><HeroSection /></Reveal>
      <Reveal delay={100}><FeaturesSection /></Reveal>
      
    </div>
  );
}
