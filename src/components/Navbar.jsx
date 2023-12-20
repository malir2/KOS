import React, { useEffect, useState, useRef } from "react";
// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper Component CSS
import "swiper/css";
// Pictures Import
import logo from "../media/logo.png";
import search from "../media/search.png";
import user from "../media/user.png";
import bag from "../media/bag.png";
import { Link } from "react-router-dom";
import Learn from "./navbar-components/Learn";
import SearchBar from "./navbar-components/SearchBar";
import Hamburger_Menu from "./navbar-components/Hamburger_Menu";
import Menu from "../media/menu.png";

function Navbar() {
  const [learnSection, setLearnSection] = useState(true);
  const [searchBar, setSearchBar] = useState(true);
  const searchRef = useRef();

  const searchButton = () => {
    setSearchBar(!searchBar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchBar(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <nav className="w-full overflow-hidden">
        {/* Slider Section */}
        <div className="bg-primary">
          <Swiper
            className=""
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide className="ease-linear">
              <div className="bg-[#3e332d] p-2 flex justify-center gap-[20px] items-center">
                <img
                  src="https://kos.com/cdn/shop/files/free-shipping-icon-announcement-bar.png?v=1683893674&width=40"
                  alt=""
                />
                <h1 className="font-primary text-[25px] md:text-[12px] text-white">
                  FREE US SHIPPING ON ORDERS $60+
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#e87b26] p-2 gap-[20px] flex justify-center items-center">
                <img
                  src="https://kos.com/cdn/shop/files/project-10-million-meals-white.png?v=1684161706&width=40"
                  alt=""
                />
                <h1 className="font-primary text-white text-[25px] md:text-[12px]">
                  PROJECT 10 MILLION MEALS
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navbar Menu Section */}
        <div className="flex justify-between items-center bg-white p-2 font-secondary text-sm h-auto border-b">
          {/* Hamburger Icon */}
          <div className="hidden lg:block h-[50px] w-[50px]">
            <img src={Menu} alt="" />
          </div>
          {/* Menu */}
          <div className="lg:hidden">
            <ul className="flex items-center gap-[40px] ml-[60px]">
              <Link className="hover:text-secondary">
                <li>Shop All</li>
              </Link>
              <Link>
                <li className="bg-secondary text-white h-[40px] px-2 flex items-center rounded-lg hover:text-black">
                  Best Sellers
                </li>
              </Link>
              <Link className="hover:text-secondary">
                <li>Koqsmic Rewards</li>
              </Link>
              <Link className="hover:text-secondary">
                <li>Take Our Quiz!</li>
              </Link>
            </ul>
          </div>
          {/* LOGO */}
          <div>
            <Link>
              <img src={logo} alt="" className="h-[50px] md:h-[30px]" />
            </Link>
          </div>
          <div className="lg:hidden">
            <ul className="flex gap-[40px]">
              <Link className="hover:text-secondary">
                <li
                  onMouseEnter={() => {
                    setLearnSection(false);
                  }}
                  onMouseLeave={() => {
                    setLearnSection(true);
                  }}
                >
                  Learn
                </li>
              </Link>
              <Link className="hover:text-secondary">
                <li>Reviews</li>
              </Link>
              <Link className="hover:text-secondary">
                <li>Find KOS</li>
              </Link>
              <Link className="hover:text-secondary">
                <li>Help Center</li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-[30px] sm:gap-[10px] sm:mr-[10px] mr-[30px]">
            <img
              ref={searchRef}
              onClick={searchButton}
              src={search}
              alt=""
              className="h-[25px] md:h-[18px] hover:scale-110 transition-all cursor-pointer"
            />
            <img
              src={user}
              alt=""
              className="h-[25px] md:h-[18px] hover:scale-110 transition-all"
            />
            <img
              src={bag}
              alt=""
              className="h-[25px] md:h-[18px] hover:scale-110 transition-all"
            />
          </div>
        </div>
      </nav>
      {/* Navbar Other Components */}
      <div
        onMouseEnter={() => {
          setLearnSection(false);
        }}
        onMouseLeave={() => {
          setLearnSection(true);
        }}
        className={`${
          learnSection ? "translate-y-7 invisible" : "translate-y-0 visible"
        } transition-all fixed w-full z-50 bg-white`}
      >
        <Learn />
      </div>
      <div
        className={`${
          searchBar ? "translate-y-7 invisible" : "translate-y-0 visible"
        } transition-all z-50`}
      >
        <SearchBar />
      </div>
    </>
  );
}

export default Navbar;
