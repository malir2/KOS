import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper Component CSS
import "swiper/css";
// Pictures Import

function Hero() {
  return (
    <div className="w-full">
      <Swiper
        className="w-full -z-10"
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="ease-linear">
          <div className="w-full relative md:hidden">
            <div className="absolute top-[120px] lg:top-[90px] left-[50px] w-[600px] lg:w-[500px] ">
              <h1 className="text-[50px] text-primary font-primary lg:text-[40px] ">
                Exciting Update: <br /> Upgraded Flavour
              </h1>
              <p className="mt-[20px] text-[25px] font-secondary text-primary lg:text-[20px]">
                Our best-selling Chocolate protein has undergone a flavor
                upgrade for a delicious, more balanced taste in every scoop!
              </p>
              <button className="mt-[30px] bg-primary text-white font-primary p-3 w-[200px] h-[60px] text-[25px] lg:text-[20px] lg:p-1 lg:w-[150px] lg:h-[60px] rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                Shop Now!
              </button>
            </div>
            <img
              src="https://kos.com/cdn/shop/files/Web-Homepage_banner-CH-desk.png?v=1693220532"
              alt=""
            />
          </div>
          <div className="w-full relative hidden sm:block">
            <div className="absolute flex flex-col justify-center items-center top-[50px]">
              <h1 className="text-[20px] text-primary font-primary ">
                Exciting Update: <br /> Upgraded Flavour
              </h1>
              <p className="mt-[10px] text-[10px] text-center font-secondary text-primary px-[20px] ">
                Our best-selling Chocolate protein has undergone a flavor
                upgrade for a delicious, more balanced taste in every scoop!
              </p>
              <button className="mt-[20px] bg-primary text-white font-primary p-2 w-[120px] h-[40px] text-[15px] rounded-lg">
                Shop Now!
              </button>
            </div>
            <img
              src="https://kos.com/cdn/shop/files/Web-Homepage_banner-CH-mobile.png?v=1693220532&width=768"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative md:hidden">
            <div className="absolute top-[120px] lg:top-[90px] left-[50px] w-[600px] lg:w-[500px] ">
              <h1 className="text-[50px] text-primary font-primary lg:text-[40px] ">
                Exciting Update: <br /> Upgraded Flavour
              </h1>
              <p className="mt-[20px] text-[25px] font-secondary text-primary lg:text-[20px]">
                Our best-selling Chocolate protein has undergone a flavor
                upgrade for a delicious, more balanced taste in every scoop!
              </p>
              <button className="mt-[30px] bg-primary text-white font-primary p-3 w-[200px] h-[60px] text-[25px] lg:text-[20px] lg:p-1 lg:w-[150px] lg:h-[60px] rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                Shop Now!
              </button>
            </div>
            <img
              src="https://kos.com/cdn/shop/files/Web-Homepage_banner-VN-desk_d79bdb17-58ad-459a-839b-e734010d4ea0.jpg?v=1697527080"
              alt=""
            />
          </div>
          <div className="w-full relative hidden sm:block">
            <div className="absolute flex flex-col justify-center items-center top-[50px]">
              <h1 className="text-[20px] text-primary font-primary ">
                Exciting Update: <br /> Upgraded Flavour
              </h1>
              <p className="mt-[10px] text-[10px] text-center font-secondary text-primary px-[20px]">
                Our best-selling Chocolate protein has undergone a flavor
                upgrade for a delicious, more balanced taste in every scoop!
              </p>
              <button className="mt-[20px] bg-primary text-white font-primary p-2 w-[120px] h-[40px] text-[15px] rounded-lg">
                Shop Now!
              </button>
            </div>
            <img
              src="https://kos.com/cdn/shop/files/Web-Homepage_banner-VN-mobile_f52890f3-0e68-43a1-8bcb-701f0c414e23.jpg?v=1697527086&width=768"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
