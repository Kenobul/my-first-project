import React, { useEffect, useState } from "react";
import Background from "./COMPONENTS/BACKGROUND/Background";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Hero from "./COMPONENTS/HERO/Hero";
const App = () => {
  const heroData = [
    { text1: "Dive in", text2: " to What you love" },
    { text1: "Indulge", text2: "in your passions" },
    { text1: "Give in to", text2: "your passion" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlaystatus] = useState(false);

useEffect(() => {
    const interval = setInterval(() => {
        setHeroCount(prevHeroCount => (prevHeroCount === heroData.length -1 ? 0 : prevHeroCount + 1));
    }, 3000);

    return () => clearInterval(interval);
}, []);
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        playStatus={playStatus}
        setPlaystatus={setPlaystatus}
        setHeroCount={setHeroCount}
      />
    </div>
  );
};

export default App;
