// Tabs.js
import React, { useState } from "react";
import Card from "./Card";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-[80%] mx-auto overflow-auto scrollbar-none">
      <div className="flex border-b-4 w-full justify-center gap-[20px] xsm:gap-[10px] pb-[20px]">
        <button
          className={`px-4 xsm:px-0 font-secondary font-semibold text-[20px] sm:text-[8px] ${
            activeTab === 1 ? "text-black" : "text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          BEST SELLERS
        </button>
        <button
          className={`px-4 xsm:px-0 font-secondary font-semibold text-[20px] sm:text-[8px] ${
            activeTab === 2 ? "text-black" : "text-gray-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          PLANT PROTEIN
        </button>
        <button
          className={`px-4 xsm:px-0 font-secondary font-semibold text-[20px] sm:text-[8px] ${
            activeTab === 3 ? "text-black" : "text-gray-700"
          }`}
          onClick={() => handleTabClick(3)}
        >
          SUPERFOOD BLENDS
        </button>
        <button
          className={`px-4 xsm:px-0 font-secondary font-semibold text-[20px] sm:text-[8px] ${
            activeTab === 4 ? "text-black" : "text-gray-700"
          }`}
          onClick={() => handleTabClick(4)}
        >
          SUPERFOOD POWDERS
        </button>
      </div>

      <div className="mt-4">
        {/* Content for Tab 1 */}
        {activeTab === 1 && (
          <div className="flex justify-around lg:gap-[10px] flex-wrap md:justify-around md:gap-[10px]">
            <Card
              height="h-[500px]"
              bgcolor="bg-[#FFF8E8]"
              itemImage="https://kos.com/cdn/shop/files/Kos-Protein-Chocolate_hp_1.png?v=1693235990&width=375"
              name="KOS Organic Plant Protein"
              rating="(2042)"
              content="Award Winning, Complete Protein Meal With 20g Protein Per"
              button="Shop Protein"
            />
            <Card
              height="h-[500px]"
              bgcolor="bg-[#e8f5d7]"
              itemImage="https://kos.com/cdn/shop/files/KOS-PRODUCT-RENDERS-WEBSITE_GREENS.png?v=1623339148&width=375"
              name="KOS Show Me The Greens"
              rating="(237)"
              content="Alkalizing Superfood Blend Of Wheatgrass"
              button="Shop Green"
            />
            <Card
              height="h-[550px]"
              bgcolor="bg-[#fee6ec]"
              itemImage="https://kos.com/cdn/shop/files/KOS-PRODUCT-RENDERS-WEBSITE_REDS-20_-smaller.png?v=1645128419&width=375"
              name="KOS Love You Berry Much"
              rating="(180)"
              content="Energizing Red Juice Blend With Beet Root powder, Acai Powder & Goji Berries"
              button="Shop Red"
            />
          </div>
        )}
        {/* Content for Tab 2 */}
        {activeTab === 2 && (
          <div className="flex justify-between flex-wrap md:justify-around md:gap-[10px]">
            <Card
              height="h-[550px]"
              bgcolor="bg-[#d6ebf8]"
              itemImage="https://kos.com/cdn/shop/files/KOS-PRODUCT-RENDERS-WEBSITE_VPP-BM14-BG-20_-smaller.png?v=1645128446&width=375"
              name="KOS Organic Plant Protein"
              rating="(207)"
              content="Award Winning Complete Protein Meal With 20g Protein Per Serving + Immune Support*"
              button="Shop Protein"
            />
            <Card
              height="h-[550px]"
              bgcolor="bg-[#fee5d2]"
              itemImage="https://kos.com/cdn/shop/files/KOS-PRODUCT-RENDERS-WEBSITE_VPP-SC14-BG-20_-smaller.png?v=1645128469&width=375"
              name="KOS Organic Plant Protein"
              rating="(200)"
              content="Complete Protein Meal With 20g Protein Per Serving + Energy From Organic Coffe Beans*"
              button="Shop Protein"
            />
            <Card
              height="h-[550px]"
              bgcolor="bg-[#fff8e8]"
              itemImage="https://kos.com/cdn/shop/files/Kos-Protein-Vanilla_1512x-hp.png?v=1693236134&width=375"
              name="KOS Organic Plant Protein"
              rating="(237)"
              content="Award Winning Complete Protein Meal With 20g"
              button="Shop Protein"
            />
          </div>
        )}
        {/* Content for Tab 3 */}
        {activeTab === 3 && ""}
        {/* Content for Tab 4 */}
        {activeTab === 4 && ""}
      </div>
    </div>
  );
};

export default Tabs;
