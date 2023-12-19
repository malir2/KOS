import React from "react";

function Brand_Card(props) {
  return (
    <div className="w-[250px] h-[180px] flex flex-col justify-between items-start ">
      <p className="font-secondary font-semibold text-[20px]">
        {props.content}
      </p>
      <img className="h-[40px] w-[140px]" src={props.image} alt="" />
    </div>
  );
}

export default Brand_Card;
