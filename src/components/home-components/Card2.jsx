import React, { useState } from "react";

function Card2(props) {
  const [hover, sethover] = useState(true);
  return (
    <div
      onMouseEnter={() => {
        sethover(false);
      }}
      onMouseLeave={() => {
        sethover(true);
      }}
      className="w-[300px] h-[450px] rounded-xl overflow-hidden transition-all relative"
    >
      <img
        className="absolute w-full h-full object-cover "
        src={props.image}
        alt=""
      />
      <div
        className={`${
          hover ? "" : "bg-[#98705f]/95 h-full absolute"
        } transition-all`}
      >
        <h1
          className={`font-primary text-white text-[30px] px-3 ${
            hover ? "translate-y-[300px]" : "translate-y-[50px]"
          } transition-all w-[70%]`}
        >
          {props.heading}
        </h1>
        <p
          className={`font-secondary text-white px-3 ${
            hover
              ? "invisible translate-y-[310px]"
              : "visible translate-y-[70px] transition-all"
          }`}
        >
          {props.content}
        </p>
      </div>
      <div className="flex justify-center absolute w-full bottom-5">
        <button
          className={`font-primary text-[#98705f] ${props.bgColor} rounded-lg h-[40px] w-[80%] mx-auto`}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default Card2;
