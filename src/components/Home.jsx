import React from "react";
import Hero from "./home-components/Hero";
import Tabs from "./home-components/Tabs";
import Cause from "./home-components/Cause";
import Latest_Articles from "./home-components/Latest_Articles";
import Partners from "./home-components/Partners";
import Project from "./home-components/Project";
import Featured_Products from "./home-components/Featured_Products";
import Reward from "./home-components/Reward";
import Last_Section from "./home-components/Last_Section";

function Home() {
  return (
    <div className="w-full scrollbar-thumb-primary scrollbar-thin ">
      <Hero />
      <Tabs />
      <Cause />
      <Latest_Articles />
      <Partners />
      <Project />
      <Featured_Products />
      <Reward />
      <Last_Section />
    </div>
  );
}

export default Home;
