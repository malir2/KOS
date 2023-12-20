import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Simple_Cards from "../reusable-cards/Simple_Cards";

function Last_Section() {
  return (
    <div className="w-full sm:mt-[50px]">
      <h1 className="text-center text-[40px] font-primary sm:text-[20px]">
        500,000+ happy
        <br /> customers and counting
      </h1>
      <div>
        <Swiper
          className="h-auto p-6 mt-[20px] "
          modules={[Navigation, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          breakpoints={{
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
              <Simple_Cards image="https://kos.com/cdn/shop/files/section-12-04-min.png?v=1620969928&width=664" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <Simple_Cards image="https://kos.com/cdn/shop/files/Web-Happy_customers-2.png?v=1687436418&width=1366" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <Simple_Cards image="https://kos.com/cdn/shop/files/section-12-05-min.png?v=1620969938&width=664" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <Simple_Cards image="https://kos.com/cdn/shop/files/section-12-02-min.png?v=1620969907&width=664" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <Simple_Cards image="https://kos.com/cdn/shop/files/Web-Happy_customers-1.png?v=1687436418&width=1366" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Last_Section;
