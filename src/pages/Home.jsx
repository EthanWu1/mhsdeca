import React from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import UpcomingEvents from "../components/home/UpcomingEvents.jsx";

export default function Home() {
  const demoEvents = [
    { id: 1, title: "Kickoff Meeting", date: "Aug 28, 2025", location: "Room 214" },
    { id: 2, title: "Competition Workshop", date: "Sep 10, 2025", location: "Library" },
  ];

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <UpcomingEvents events={demoEvents} />
    </div>
  );
}
