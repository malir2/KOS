import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-auto w-full mt-[80px]">
      <img
        src="https://kos.com/cdn/shop/files/kos-footer-desktop.png?v=1627599628&width=1366"
        alt=""
      />
      <div className="bg-[#f5efdd]">
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-secondary font-semibold">
            Sign up Today
          </h1>
          <p className="font-secondary mt-[30px] tracking-wide text-center">
            Sign up for our newsletter and get first access to the
            <br /> very best of KOS products, inspiration and community.
          </p>

          <input
            placeholder="Email Address"
            type="text"
            className="w-[450px] sm:w-[250px] mt-[40px] border-primary p-4 font-secondary"
          />
          <button className="mt-[40px] font-secondary bg-primary text-white w-[150px] text-lg rounded-lg h-[60px]">
            Subscribe
          </button>
        </div>
        <div className="pt-[200px] sm:pt-[100px] flex justify-center items-center gap-3 w-[90%] mx-auto">
          <div className="h-[0.5px] border-t border-gray-400 w-[40%]"></div>
          <img
            className="h-[40px]"
            src="https://kos.com/cdn/shop/files/kos_logo.png?v=1666868953&width=240"
            alt=""
          />
          <div className="h-[0.5px] border-t border-gray-400 w-[40%]"></div>
        </div>
        <div className="pt-[100px] w-[90%] md:w-[95%] mx-auto grid grid-rows-1 grid-cols-4 lg:grid-rows-2 lg:grid-cols-2 lg:gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-secondary font-bold text-[30px] sm:text-[20px]">
              About KOS
            </h1>
            <ul className="font-secondary flex flex-col gap-[20px] sm:gap-[10px]">
              <Link>
                <li className="text-xl sm:text-sm hover:underline">About</li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Project 10 Million Meals*
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Military Discount
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Become a Retailer
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Store Locator
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Ambassadors
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Awards & Press
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">About</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-secondary font-bold text-[30px] sm:text-[20px]">
              More Info
            </h1>
            <ul className="font-secondary flex flex-col gap-[20px] sm:gap-[10px]">
              <Link>
                <li className="text-xl sm:text-sm hover:underline">Articles</li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">Recipes</li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Shipping Policy
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Return Policy
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  KOSMIC Rewards
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Refer A Friend
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Take Our Quiz
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-secondary font-bold text-[30px] sm:text-[20px]">
              Support
            </h1>
            <ul className="font-secondary flex flex-col gap-[20px] sm:gap-[10px]">
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Help Center
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Contact: hello@kos.com
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Do Not Sell My Personal
                  <br /> Information
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">CCPA</li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Accessibility
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Ambassadors
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">
                  Awards & Press
                </li>
              </Link>
              <Link>
                <li className="text-xl sm:text-sm hover:underline">About</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <h1 className="font-secondary font-bold text-[30px] sm:text-[20px]">
              Follow Us
            </h1>
            <ul className="font-secondary flex items-center gap-[20px] sm:gap-[10px]">
              <Link>
                <li>
                  <svg
                    className="h-[30px] sm:h-[15px]"
                    aria-hidden="true"
                    focusable="false"
                    class="icon icon-facebook"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="currentColor"
                      d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"
                    ></path>
                  </svg>
                </li>
              </Link>
              <Link>
                <li>
                  <svg
                    className="h-[30px] sm:h-[15px]"
                    aria-hidden="true"
                    focusable="false"
                    class="icon icon-instagram"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="currentColor"
                      d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
                    ></path>
                  </svg>
                </li>
              </Link>
              <Link>
                <li>
                  <svg
                    className="h-[30px] sm:h-[15px]"
                    aria-hidden="true"
                    focusable="false"
                    class="icon icon-youtube"
                    viewBox="0 0 100 70"
                  >
                    <path
                      d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
              </Link>
              <Link>
                <li>
                  <svg
                    className="h-[30px] sm:h-[15px]"
                    aria-hidden="true"
                    focusable="false"
                    class="icon icon-twitter"
                    viewBox="0 0 18 15"
                  >
                    <path
                      fill="currentColor"
                      d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"
                    ></path>
                  </svg>
                </li>
              </Link>
              <Link>
                <li>
                  <svg
                    className="h-[30px] sm:h-[15px]"
                    aria-hidden="true"
                    focusable="false"
                    class="icon icon-pinterest"
                    viewBox="0 0 17 18"
                  >
                    <path
                      fill="currentColor"
                      d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z"
                    ></path>
                  </svg>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="h-[1px] border-t border-gray-400 w-[80%] mx-auto pt-[120px] mt-[100px]"></div>
        <div className="text-center sm:text-[10px] font-secondary text-gray-400">
          <p className="mb-[10px]">
            {" "}
            These statements have not been evaluated by the Food and Drug
            Administration.
          </p>
          <p className="mb-[10px]">
            {" "}
            This product is not intended to diagnose, treat, cure or prevent any
            disease.
          </p>
          <p className="mb-[10px]">
            {" "}
            National Meal Claim: *$1 helps to provide at least ten meals secured
            by Feeding America® on behalf of local member food banks.
          </p>
          <ul className="text-[10px] sm:text-[8px] flex gap-2 justify-center py-[50px]">
            <Link>
              <li className="hover:underline">@2023, KOS.com</li>
            </Link>
            <li>.</li>
            <Link>
              <li className="hover:underline">Refund Policy</li>
            </Link>
            <li>.</li>
            <Link>
              <li className="hover:underline">Privacy policy</li>
            </Link>
            <li>.</li>
            <Link>
              <li className="hover:underline">Terams of services</li>
            </Link>
            <li>.</li>
            <Link>
              <li className="hover:underline">Shipping policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
