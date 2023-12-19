import React from "react";
import Articles from "../reusable-cards/Articles";

function Latest_Articles() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="pt-[40px] font-primary text-[45px] text-primary pb-[50px]">
        Latest Articles
      </h1>
      <div className="flex justify-between lg:flex-wrap lg:justify-around sm:gap-[20px]">
        <Articles
          image="https://kos.com/cdn/shop/articles/erythritol_1_x540.png?v=1677859213"
          heading="Erythritol: What It Is, Side Effects,..."
          writer="by Milica Ivanovic"
          content="Get up-to-date on erythritol! Discover the facts about this trending sweetener, including potential health concerns and smart shopping alternatives."
        />
        <Articles
          image="https://kos.com/cdn/shop/articles/how_much_water_1_x540.png?v=1680706103"
          heading="How Much Water Should You Use..."
          writer="by Milica Ivanovic"
          content="Sick of playing a guessing game when it comes to protein powder with water ratio? Our guide is here to give you the rundown for ultimate results. L..."
        />
        <Articles
          image="https://kos.com/cdn/shop/articles/hot_to_store_protein_powder_1_x540.png?v=1679167209"
          heading="Protein Powder: How to Store It..."
          writer="by Milica Ivanovic"
          content="Learn about proper protein powder storage techniques and how long they can last in this essential guide for fitness enthusiasts and health nuts."
        />
      </div>
      <div className="mt-[50px] flex justify-center ">
        <button className="text-white font-secondary bg-primary p-4 rounded-xl w-[150px] transition-all hover:scale-105 hover:shadow-lg">
          View All
        </button>
      </div>
    </div>
  );
}

export default Latest_Articles;
