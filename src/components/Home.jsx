import React from "react";
import Hero from "./home-components/Hero";
import Tabs from "./home-components/Tabs";
import Cause from "./home-components/Cause";

function Home() {
  return (
    <div className="w-full scrollbar-thumb-primary scrollbar-thin ">
      <Hero />
      <Tabs />
      <Cause />
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;
