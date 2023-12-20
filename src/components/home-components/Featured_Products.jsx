import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

function Featured_Products() {
  return (
    <div className="w-full mt-[50px]">
      <h1 className="font-primary text-[35px] ml-[40px]">
        Featured Products...
      </h1>
      <Swiper
        className="h-[620px] p-6"
        modules={[Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        breakpoints={{
          // when window width is >= 640px (md: breakpoint)
          370: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          280: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1040: {
            slidesPerView: 3,
          },
          840: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[500px]"
              display="hidden"
              bgcolor="bg-[rgb(253,239,206)]"
              itemImage="https://kos.com/cdn/shop/products/KOS-GOLDENMYLK-PRODUCTRENDER-WEBSITE-20_smaller_6725eda2-ebf0-4718-bf63-9dde487b3784.png?v=1645041447"
              name="KOS A Whole Latte Gold"
              rating="91 Reviews"
              content="A Rich & Warming Golden Mylk Blend"
              button="SHOP RELAX"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[450px]"
              display="hidden"
              bgcolor="bg-[rgb(242,242,242)]"
              itemImage="https://kos.com/cdn/shop/products/coconut_milk_2048x_50a96999-5d90-4af1-9e5d-91420c04bba5.png?v=1567087847"
              name="KOS Organic Coconut Milk Powder"
              rating="32 Reviews"
              content="Ket Friendly & Loaded With MCTs"
              button="SHOP SUPERFOOD"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[520px]"
              display="hidden"
              bgcolor="bg-[rgb(223,241,249)]"
              itemImage="https://kos.com/cdn/shop/files/OrganicLuminousBlueSpirulina-front.png?v=1683279465&width=400"
              name="KOS® Organic Luminous Blue Spirulina - 27 servings"
              rating="16 Reviews"
              content="A Natural Food Colourant Packed With Amino Acids"
              button="SHOP SUPERFOOD"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[540px]"
              display="hidden"
              bgcolor="bg-[rgb(247,208,197)]"
              itemImage="https://kos.com/cdn/shop/files/shroomboom-collection-page.png?v=1701946139"
              name="KOS Sippin' On Sharoomboom"
              rating="113 Reviews"
              content="An Invigorating, Mocha Mushroom Coffe Blend (Caffeniated)"
              button="SHOP ENERGY"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[520px]"
              display="hidden"
              bgcolor="bg-[rgb(232,224,230)]"
              itemImage="https://kos.com/cdn/shop/products/beetroot_2048x_25ba837a-a131-40b9-8aa0-60d960254756.png?v=1597885619&width=400"
              name="KOS Organic Beet Root Powder"
              rating="55 Reviews"
              content="Beets support healthy circulation Say hello to flow!"
              button="SHOP SUPERFOOD"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[520px]"
              display="hidden"
              bgcolor="bg-[rgb(251,220,234)]"
              itemImage="https://kos.com/cdn/shop/products/KOS-BOLTFROMTHEBLUE-PRODUCTRENDER-WEBSITE-20_smaller_18ca164b-420b-45e3-9c81-65fd9161e193.png?v=1636599966&width=400"
              name="KOS Bolt From The Blue"
              rating="69 Reviews"
              content="A Fresh, Uplifting Blue Siprulina Blend (Caffeniated)"
              button="SHOp FOCUS"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[520px]"
              display="hidden"
              bgcolor="bg-[rgb(231,243,251)]"
              itemImage="https://kos.com/cdn/shop/products/KOS-KISSYOURBLUESAWAY-PRODUCTRENDER-WEBSITE-20_smaller_6c1bb101-69dc-4b41-bdb6-85c8a17d664c.png?v=1645041015&width=400"
              name="KOS Kiss Your Blues Away"
              rating="69 Reviews"
              content="A Calming Blue Spirulina Blend"
              button="SHOP CALM"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="ease-linear">
          <Link>
            <Card
              height="h-[520px]"
              display="hidden"
              bgcolor="bg-[rgb(232,224,230)]"
              itemImage="https://kos.com/cdn/shop/files/OrganicBeetRootpowder-front.png?v=1683196080&width=400"
              name="Organic Beet Root Powder - 50 servings"
              rating="3 Reviews"
              content="Best support healthy circulation. Say hello to flow!*"
              button="SHOP CALM"
              width="80%"
              scale="1.2"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Featured_Products;
