import React, { useState } from "react";
import { Rating } from "flowbite-react";

function Card(props) {
  const [content, setContent] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setContent(true);
      }}
      onMouseLeave={() => {
        setContent(false);
      }}
      className={`w-[350px] ${
        props.bgcolor
      } relative flex flex-col items-center ${
        content ? `${props.height}` : "h-[400px]"
      } px-[20px] pb-3 rounded-lg transition-all`}
    >
      <img src={props.itemImage} alt="" className="z-30" />
      <img
        className={`absolute top-[60px] z-10 ${
          content ? "scale-1" : "scale-0"
        } transition-all`}
        src="https://kos.com/cdn/shop/files/hover-animation-organic-plant-protein.png?v=1683894699&width=640"
        alt=""
      />
      <h1 className="text-primary text-[25px] font-secondary font-semibold text-center">
        {props.name}
      </h1>
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {props.rating}
        </p>
      </Rating>
      <div
        className={`${
          content ? "scale-1 visible" : "scale-0 invisible"
        } transition-all flex flex-col items-center`}
      >
        <p className={`text-primary text-[18px] font-secondary text-center `}>
          {props.content}
        </p>
        <button
          className={`bg-primary text-white font-secondary text-xl p-2 mt-[20px] rounded-lg
          transition-all`}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default Card;
