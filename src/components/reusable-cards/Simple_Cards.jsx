import React, { useState } from "react";

function Simple_Cards(props) {
  const [content, setContent] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setContent(true);
      }}
      onMouseLeave={() => {
        setContent(false);
      }}
      className="relative w-[350px] h-[350px] rounded-3xl overflow-hidden"
    >
      <img
        className="absolute h-full w-full object-cover -z-10"
        src={props.image}
        alt=""
      />
      <div
        className={`p-[20px] bg-[#694f42]/90 backdrop-blur-lg absolute ${
          content
            ? "top-0 opacity-100 scale-100"
            : "top-[100%] opacity-0 scale-90"
        } w-full h-full flex justify-center flex-col gap-[20px] transition-all`}
      >
        <p className="text-white font-primary z-20 text-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio
          eum corporis ad quaerat rerum deserunt, unde ipsum! Vero, vitae.
        </p>
        <h1 className="text-white font-primary text-right">by PHD SHIS</h1>
      </div>
    </div>
  );
}

export default Simple_Cards;
