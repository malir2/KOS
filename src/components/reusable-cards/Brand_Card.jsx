import React from "react";

function Brand_Card(props) {
  return (
    <div className="w-[250px] sm:w-[100px] sm:h-[80px] h-[180px] flex flex-col justify-between items-start ">
      <p className="font-secondary font-semibold text-[20px] sm:text-[8px]">
        {props.content}
      </p>
      <img
        className="h-[40px] w-[140px] sm:w-[80px] sm:h-[30px]"
        src={props.image}
        alt=""
      />
    </div>
  );
}

export default Brand_Card;
