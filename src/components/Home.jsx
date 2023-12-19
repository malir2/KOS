import React from "react";
import Hero from "./home-components/Hero";
import Tabs from "./home-components/Tabs";
import Cause from "./home-components/Cause";
import Latest_Articles from "./home-components/Latest_Articles";
import Partners from "./home-components/Partners";

function Home() {
  return (
    <div className="w-full scrollbar-thumb-primary scrollbar-thin ">
      <Hero />
      <Tabs />
      <Cause />
      <Latest_Articles />
      <Partners />
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;
