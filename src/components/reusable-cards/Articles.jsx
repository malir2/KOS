import React from "react";

function Articles(props) {
  return (
    <div>
      <div className="w-[380px] sm:w-[250px] sm:h-[380px] h-[500px] rounded-lg overflow-hidden ">
        <img
          className="h-[55%] sm:h-[40%] w-full object-cover overflow-visible"
          src={props.image}
          alt=""
        />
        <div>
          <h1 className="font-primary mt-[20px] text-xl sm:text-lg">
            {props.heading}
          </h1>
          <h1 className="font-secondary mt-[5px] text-sm sm:text-[12px]">
            {props.writer}
          </h1>
          <p className="mt-2 text-gray-500 font-secondary h-[100px] sm:h-[58px] overflow-hidden sm:text-[10px]">
            {props.content}
          </p>
          <button className="flex items-center mt-2 text-blue-700 hover:underline sm:mt-0 sm:text-[12px]">
            <span>Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-700 w-[24px] h-[24px]"
            >
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
