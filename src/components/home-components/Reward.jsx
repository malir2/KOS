import React from "react";

function Reward() {
  return (
    <div className="h-screen lg:h-auto mb-[30px]">
      <div className="h-[500px] w-[1000px] md:h-screen md:w-[700px] sm:w-full mx-auto bg-[#f8f3e3] flex md:flex-col rounded-3xl relative overflow-visible">
        <div className="w-[50%] h-full absolute top-0 left-0 md:hidden flex justify-center bg-[url('https://kos.com/cdn/shop/files/section-11-stars-min.png?v=1620969632&width=1048')] bg-cover bg-center overflow-visible">
          <img
            className="h-[100px] mt-[100px]"
            src="https://kos.com/cdn/shop/files/section-11-kosmis-logo-min.png?v=1620969642&width=321"
            alt=""
          />
        </div>
        <img
          className="md:hidden"
          src="https://kos.com/cdn/shop/files/section-11-bg-desktop-min.png?v=1620969614&width=1231"
          alt=""
        />
        <img
          className="md:block hidden h-[60%] w-full"
          src="https://kos.com/cdn/shop/files/section-11-bg-mobile-min.png?v=1620969624&width=399"
          alt=""
        />
        <div className="flex flex-col justify-center items-center w-full gap-[40px] sm:gap-[10px]">
          <div className="flex justify-center items-center w-full relative">
            <svg
              className="h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              width="227"
              height="61"
              viewBox="0 0 227 61"
            >
              <g>
                <g>
                  <path
                    fill="#f4e5b0"
                    d="M165.26 54.084c-26.246 3.666-43.692 2.158-70.717 3.024-27.024.867-35.738.48-51.843.94-15.215.434-25.148 1.816-22.381 1.702-8.405.351-12.213.823-12.213.823-4.765.198-6.06-.556-6.106-1.93 0 0-.057-1.333-.132-3.55a1.55 1.55 0 0 1 .047-.468c.169-4.44 1.342-6.512.366-10.433-1.079-4.303-.6-8.356-.385-11.654a70.228 70.228 0 0 0-.722-11.241 83.821 83.821 0 0 1-.413-4.75 2.015 2.015 0 0 1-.337-1.066C.34 13.146.292 11.733.292 11.733.245 10.356 4.063 9.08 8.828 8.88l7.973-.333c.3-.012.582-.022.863-.031 8.987-.351 10.75-2.467 30.542-1.436 19.792 1.031 22.962-4.042 48.56-1.714 25.599 2.327 31.705-.921 45.588-1.825 13.882-.904 33.937.148 36.45.04C195.305 2.87 216.24.223 216.24.223c4.775-.199 8.677.756 8.724 2.134 0 0 .047 1.172.113 3.145a2.99 2.99 0 0 1-.272 1.374c0 .276 0 .629.018 1.11.132 3.583-.619 7 .188 12.49.506 3.45.056 7.004-.037 10.843.384.197.3.643-.01 1.575.002 1.883.175 3.76.516 5.598.458 1.843.704 3.753.732 5.677.192.292.3.65.31 1.022l.15 4.088c.046 1.377-3.772 2.655-8.546 2.855l-.535.021c-.347.016-3.039.129-3.236.137 10.562-.463-22.85-1.873-49.095 1.792z"
                  ></path>
                </g>
              </g>
            </svg>
            <h1 className="absolute">GET REWARDED</h1>
          </div>
          <h1 className="font-primary text-[40px] sm:text-[20px]">
            Invest in yourself... <br />
            and get rewarded
          </h1>
          <p className="w-[60%] text-center font-secondary sm:text-sm">
            Join KOSMIC rewards to earn stars towards free product discounts &
            more
          </p>
          <div className="flex gap-[20px] font-secondary">
            <button className="border-primary border-2 py-2 px-6 rounded-lg bg-primary text-white hover:px-4 transition-all sm:text-sm">
              JOIN NOW
            </button>
            <button className="border-primary border-2 py-2 px-6 rounded-lg font-primary text-primary font-light hover:px-4 transition-all sm:text-sm">
              REFER A FRIEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
