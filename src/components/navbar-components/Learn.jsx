import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Pictures
import recipes from "../../media/recipes.png";
import arrow from "../../media/arrow.png";

function Learn() {
  const [arrowMove, setArrowMove] = useState(true);
  const [arrowMove2, setArrowMove2] = useState(true);
  return (
    <div className="w-full h-full bg-gray-100 ">
      <div className="flex justify-between py-[50px] px-[20px]">
        {/* Learn */}
        <div className="w-[20%]">
          <h1 className="text-gray-500 font-semibold border-b border-gray-300 pb-3">
            Learn
          </h1>
          <ul className=" flex flex-col gap-[20px] pt-[30px] font-secondary">
            <Link>
              <li className="hover:text-secondary">Why KOS?</li>
            </Link>
            <Link>
              <li className="hover:text-secondary">Articles</li>
            </Link>
            <Link>
              <li className="hover:text-secondary">Press</li>
            </Link>
            <Link>
              <li className="hover:text-secondary">Help Center</li>
            </Link>
            <Link>
              <li className="hover:text-secondary">Articles</li>
            </Link>
            <Link>
              <li className="hover:text-secondary">Reviews</li>
            </Link>
          </ul>
        </div>
        {/* Collections */}
        <div className="w-[50%]">
          <h1 className="text-gray-500 font-semibold border-b border-gray-300 pb-3">
            FEATURED
          </h1>
          <div
            onMouseEnter={() => {
              setArrowMove(false);
            }}
            onMouseLeave={() => {
              setArrowMove(true);
            }}
            className="pt-[20px] h-auto"
          >
            <div className="flex items-center gap-[50px]">
              <img src={recipes} alt="" className="h-[90px]" />
              <div>
                <div className="flex gap-[10px] items-center">
                  <h1 className="font-secondary">
                    200+ Plant Based Recipes using KOS
                  </h1>
                  <img
                    src={arrow}
                    alt=""
                    className={`h-[20px] ${
                      arrowMove ? "translate-x-0" : "translate-x-4"
                    } transition-all`}
                  />
                </div>
                <p className="text-gray-700 font-secondary italic text-sm">
                  Delicious recipes for vegan, paleo, keto and whole30
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setArrowMove2(false);
            }}
            onMouseLeave={() => {
              setArrowMove2(true);
            }}
            className="pt-[20px] h-auto"
          >
            <div className="flex items-center gap-[50px]">
              <img
                src="https://kos.com/cdn/shop/files/News-4.png?v=1629135467&width=135"
                alt=""
                className="h-[90px]"
              />
              <div>
                <div className="flex gap-[10px] items-center">
                  <h1 className="font-secondary">Press & Awards</h1>
                  <img
                    src={arrow}
                    alt=""
                    className={`h-[20px] ${
                      arrowMove2 ? "translate-x-0" : "translate-x-4"
                    } transition-all`}
                  />
                </div>
                <p className="text-gray-700 font-secondary italic text-sm">
                  See what all the buzz about
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Shop All */}
        <div className="w-[25%]">
          <img
            src="https://kos.com/cdn/shop/files/learn_img.png?v=1614288948&width=708"
            alt=""
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Learn;
