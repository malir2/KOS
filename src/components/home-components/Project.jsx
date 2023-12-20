import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Project() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mt-[300px] relative w-full md:mt-[400px]">
      <div className="flex justify-center items-center">
        <img
          className="absolute left-[10%] h-[180px] lg:h-[140px] lg:left-[100px] md:left-2 md:hidden sm:hidden"
          src="https://kos.com/cdn/shop/files/section-06-layers-min.png?v=1620951757&width=686"
          alt=""
        />
        <img
          className="sm:h-[80px] h-[150px] md:h-[120px] md:right-[40px] top-[-100px] absolute sm:right-[50px] right-[160px] sm:top-[-100px]"
          src="https://kos.com/cdn/shop/files/section-06-3-layers-min.png?v=1620951846&width=357"
          alt=""
        />
        <svg
          className="h-[80px] absolute w-[500px] lg:w-[400px] md:w-[300px] -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="876"
          height="132"
          viewBox="0 0 876 133"
        >
          <g>
            <g>
              <path
                fill="#e4f1d1"
                d="M875.827 21.56c-.01.618-.03 1.231-.04 1.843.04 1.985-.1 4.338-.16 7.01-.38 16.75-.73 30.895-1 42.765-.4 17.973-.57 29.77-.35 36.925a26.36 26.36 0 0 1-.28 5.36c.02 1.268.04 2.433.08 3.493.36 11.5-3.92 9.435-5.28 9.251v.02c-14.93.76-29.35 2.475-61.59-.873-1.38-.144-2.66-.279-3.91-.412-9.51-.164-21.47-.529-36.95-1.342-8.24-.433-15.2-.768-21.37-1.019-3.22.082-6.72.174-10.61.28-33.26.9-54.06.912-73.72.075-7.7-.028-15.59-.2-24.3-.534-6.37.144-13.68.075-22.73-.468-9.8.174 15.37-.275-7.57-.275-22.94 0-46.35 5.094-74.01 3.64-2.36-.123-4.58-.237-6.74-.345l-.83.023c-2.71.32-5.44.47-8.17.448-1.25.075-2.54.151-3.92.231a310.973 310.973 0 0 1-40.32.063c-7.87-.06-15.05-.226-22.02-.5-4.68-.039-9.12-.116-13.41-.23-4.02-.085-8.15-.2-12.5-.37-7-.049-14.2-.214-22.09-.519-10.03.228 10.4 2.062-7.44.21-35.88-1.224-63.41 5.582-75.42 4.951l-.15-.008h-.07c-4.65.03-8.95.03-13 .013-.836.098-1.678.137-2.52.117-1.25.075-2.54.151-3.93.231a314.54 314.54 0 0 1-38.97.15c-9.1.126-16.44-.143-22.81-.584-8.71-.065-16.58-.259-24.26-.586-19.67-.072-40.45-1.044-73.632-3.479-3.888-.286-7.378-.54-10.588-.77a1829.47 1829.47 0 0 0-21.4.031c-15.494.1-27.46-.09-36.97-.365-1.249.075-2.539.151-3.926.231-32.36 1.855-46.685-.524-61.56-1.973v-.019c-1.366.121-5.732 1.991-4.85-9.486.08-1.057.158-2.219.231-3.486-.19-1.783-.2-3.581-.03-5.367.548-7.138.912-18.93 1.333-36.9.264-11.87.561-26.016.942-42.765.061-2.672.032-5.029.16-7.01l.042-1.844c.192-8.446-.523-13.76 5.725-13.927 4.042-1.3 21.008-1.073 33.647-.32.545.032 1.121.064 1.711.095 6.212.045 13.114.237 21.083.723 14.72.367 33.4.686 53.42 1.148 2.976-.153 8.721-.136 15.927-.008 7.832-.3 16.656-.436 27.866-.022 16.4.6 34.73 1.631 53.67 2.762l7.57-.1a190.38 190.38 0 0 1 19.3-.19c9.35-.063 18.37-.074 26.86.006 54.37.5 80.9-6.578 105.46-6.445 24.56.133 4.05.155 6.11.241 4.62-.022 9.68.046 15.34.255 13.29.49 27.84 1.258 42.95 2.133 15.14-.176 29.71-.272 43.01-.147 5.67.052 10.72.218 15.34.454 2.06.01 4.097.023 6.11.041 7.91.074 14.6.368 20.61.766 28.02 0 53.1-4.079 76.74-4.079 2.97-.153 1.57-.128 8.77 0 8.91-.34 17.9-.567 26.22-.126 6.414.036 12.822.395 19.2 1.077 2.52.147 5.04.3 7.58.448 18.98-.255 37.32-.434 53.74-.28 11.22.1 20.02.647 27.83 1.308 7.21.205 12.95.453 15.91.744 20.02.462 38.7 1.006 53.42 1.32 7.98-.117 14.89.01 21.09.251.6 0 1.17-.009 1.72-.016 12.66-.169 29.62.39 33.6 1.874 6.23.46 5.27 5.735 5.08 14.181z"
              ></path>
            </g>
          </g>
        </svg>
        <p className="text-center z-50 font-primary text-[40px] lg:text-[30px] md:text-[20px]">
          KOS <span className="text-primary">x</span> Feeding America
        </p>
      </div>
      <div className="mt-[50px] relative overflow-hidden md:overflow-visible -z-10">
        <p className="w-[50%] mx-auto text-center font-secondary sm:w-[80%]">
          KOS wants to partner with you in a One-for-One mission to feed
          America’s hungry. We can make a difference in your community.
        </p>
        <div className="flex justify-between sm:justify-around relative top-[-100px] md:top-[20px] items-center">
          <img
            className="h-[650px] translate-x-[-200px] md:hidden sm:hidden"
            src="https://kos.com/cdn/shop/files/section-06-left-bg-min.jpg?v=1620963614&width=769"
            alt=""
          />
          <div className="translate-x-[-100px] md:translate-x-0 sm:translate-x-0 w-full">
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
              {counterOn && (
                <CountUp start={0} end={4672246} duration={2.75} separator=",">
                  {({ countUpRef, start }) => (
                    <div>
                      <h1
                        onFocus={start}
                        ref={countUpRef}
                        className="text-center font-primary text-[60px] sm:text-[30px]"
                      >
                        4,672,246
                      </h1>
                    </div>
                  )}
                </CountUp>
              )}
            </ScrollTrigger>

            <div className="bg-[#f7efdf] rounded-xl h-[60px] sm:h-[40px] py-3 px-4 mt-[100px] sm:mt-[100px] md:mt-[50px] relative  md:w-[80%] md:mx-auto">
              <div className="absolute top-[-90px] z-50 flex justify-between w-full">
                <div className="flex flex-col justify-center items-center ml-[-20px] sm:text-[12px] font-secondary">
                  <span>0</span>
                  <span>Meals</span>
                  <svg
                    className="sm:h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="95"
                    viewBox="0 0 35 95"
                  >
                    <g>
                      <g transform="rotate(79 17.5 47.5)">
                        <path
                          fill="#3e332e"
                          d="M44.886 61.195c9.106-12.084 13.467-17.072 17.446-21.487.584-1.042-.38-1.208 0-2.386-9.223-.401-17.848-1.393-27.071-1.791v.597l.601 2.984c5.414.597 12.634.597 18.045 1.193-6.015 2.786-13.233 6.168-19.248 8.953-10.695 4.812-20.57 4.956-32.485 5.373-11.915.417-26.985-4.01-36.696-7.161v.596c.503 2.914.664 2.147 2.406 3.581 9.857 3.312 20.042 6.133 35.493 6.565 8.11-.027 16.189-1.03 24.06-2.984 8.421-2.784 15.64-6.167 24.06-8.953 0 .2-3.609 3.382-3.609 3.581-2.419 2.894-4.943 4.579-6.015 8.953z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-center mr-[-20px] mt-[-10px] sm:text-[12px] font-secondary">
                  <span>10,000,000</span>
                  <span>Meals</span>
                  <svg
                    className="mr-[20px] sm:h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="97"
                    viewBox="0 0 26 97"
                  >
                    <g>
                      <g transform="rotate(94 13 48.5)">
                        <path
                          fill="#3e332e"
                          d="M42.551 38.473c1.073 4.375 3.597 6.06 6.015 8.953 0 .2 3.61 3.382 3.61 3.581-8.422-2.785-15.64-6.168-24.06-8.953a101.246 101.246 0 0 0-24.06-2.984c-15.452.432-25.637 3.254-35.494 6.565-1.742 1.434-1.902.667-2.406 3.581v.597c9.711-3.152 24.781-7.579 36.696-7.162 11.916.417 21.79.561 32.485 5.373 6.015 2.785 13.233 6.168 19.248 8.953-5.41.597-12.63.597-18.045 1.194l-.601 2.984v.596c9.224-.397 17.848-1.39 27.071-1.79-.38-1.178.584-1.345 0-2.387-3.978-4.414-8.34-9.403-17.445-21.487z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <motion.div
                initial={{ width: 1 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
                className="bg-[#a0d662] w-[50%] h-full rounded-l-xl relative"
              >
                <img
                  className="h-[80px] absolute top-[-10px] left-[100%] sm:h-[50px]"
                  src="https://kos.com/cdn/shop/t/202/assets/home-feeding.png?v=104177985727541004421695388026"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          <img
            className="h-[650px]  md:hidden sm:hidden"
            src="https://kos.com/cdn/shop/files/section-06-right-bg-min.jpg?v=1620963779&width=435"
            alt=""
          />
        </div>
      </div>
      <div className="overflow-hidden py-[30px] lg:py-0 md:mt-[100px] flex items-center justify-center">
        <div className="flex justify-between items-center">
          <motion.img
            whileInView={{ x: "-8vw" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-[300px] sm:h-[150px]"
            src="https://kos.com/cdn/shop/files/section-07-bg-min.png?v=1621875799"
            alt=""
          />
          <motion.div
            whileInView={{ scaleX: 1.6 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#694f42] h-[500px] w-[500px] lg:h-[300px] lg:w-[250px] sm:h-[150px] rounded-2xl flex flex-col justify-around items-center"
          >
            <img
              className="w-[70%] lg:w-[60%]"
              src="https://kos.com/cdn/shop/files/project-10-million-meals-white.png?v=1684161706"
              alt=""
            />
            <div className="flex w-[80%] justify-center items-center gap-2 md:gap-1">
              <img
                className="h-[60px] w-[60px] lg:h-[30px] lg:w-[30px] sm:h-[10px] sm:w-[10px]"
                src="https://kos.com/cdn/shop/files/section-07-you.png?v=1684162348&width=696"
                alt=""
              />
              <img
                className="h-[60px] w-[60px] lg:h-[30px] lg:w-[30px] sm:h-[10px] sm:w-[10px]"
                src="https://kos.com/cdn/shop/files/section-07-kos.png?v=1684162348"
                alt=""
              />
              <img
                className="h-[60px] w-[60px] lg:h-[30px] lg:w-[30px] sm:h-[10px] sm:w-[10px]"
                src="https://kos.com/cdn/shop/files/section-07-feeding-america.png?v=1684162348"
                alt=""
              />
              <img
                className="h-[10px] w-[10px] lg:h-[8px] lg:w-[8px] sm:h-[4px] sm:w-[4px]"
                src="https://kos.com/cdn/shop/files/section-07-equals.png?v=1684162348"
                alt=""
              />
              <img
                className="h-[60px] w-[60px] lg:h-[30px] lg:w-[30px] sm:h-[10px] sm:w-[10px]"
                src="https://kos.com/cdn/shop/files/section-07-happy-guy.png?v=1684162347"
                alt=""
              />
            </div>
          </motion.div>
          <motion.img
            whileInView={{ x: "8vw" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-[300px] sm:h-[150px]"
            src="https://kos.com/cdn/shop/files/section-07-bg-min.png?v=1621875799"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between sm:justify-around relative items-center overflow-hidden md:mt-[100px]">
        <img
          className="h-[700px] translate-x-[-200px] md:hidden sm:hidden -z-10"
          src="https://kos.com/cdn/shop/files/section-08-bg-left-min_6dc66585-6002-4c19-80ba-b1670eb64cd4.jpg?v=1621478557&width=900"
          alt=""
        />
        <div className=" md:translate-x-0 sm:translate-x-0 w-full">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-center text-[40px] font-primary">
              How it Works ?
            </h1>
            <p className="font-secondary text-center">
              Every unit of KOS purchased will help provide a meal* to a local
              family in need through the food bank nearest you in partnership
              with Feeding America®.
            </p>
            <div className="flex mt-[50px] gap-[20px]">
              <div className="flex flex-col items-center">
                <img
                  className="h-[100px]"
                  src="https://kos.com/cdn/shop/files/kos-jar-icon.png?v=1684162654&width=742"
                  alt=""
                />
                <p className="text-sm text-center">
                  1 KOS <br /> puchased
                </p>
              </div>
              <div>
                <svg
                  className="h-[50px] w-[80px] mt-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="135"
                  height="28"
                  viewBox="0 0 135 28"
                >
                  <g>
                    <g transform="rotate(-3 67.5 14)">
                      <path
                        fill="#3e332e"
                        d="M105.496 5.44c1.481 4.375 4.967 6.06 8.308 8.954 0 .199 4.985 3.382 4.985 3.58-11.631-2.785-21.6-6.168-33.232-8.952a190.737 190.737 0 0 0-33.231-2.984C30.984 6.47 16.917 9.29 3.302 12.603.896 14.037.675 13.27-.02 16.183v.597c13.414-3.152 34.228-7.579 50.685-7.162 16.457.418 30.097.562 44.868 5.374 8.308 2.784 18.278 6.167 26.585 8.953-7.473.596-17.445.596-24.923 1.193l-.831 2.984v.597c12.74-.398 24.652-1.39 37.391-1.79-.526-1.179.806-1.345 0-2.388-5.495-4.414-11.52-9.402-24.096-21.486z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="h-[100px]"
                  src="https://kos.com/cdn/shop/files/section-07-happy-guy.png?v=1684162347&width=696"
                  alt=""
                />
                <p className="text-sm text-center">
                  1 meal <br /> provided*
                </p>
              </div>
            </div>
            <div className="flex gap-[100px] mt-[50px] sm:gap-[50px]">
              <button className="border-2 border-primary p-3 w-[150px] rounded-xl transition-all">
                SHOP NOW
              </button>
              <button className="border-2 border-primary p-3 w-[150px] rounded-xl transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <img
          className="h-[600px] translate-x-[100px]  md:hidden sm:hidden -z-10"
          src="https://kos.com/cdn/shop/files/section-08-bg-right-min_782febeb-ef02-4623-955c-3843a68c1a61.jpg?v=1621478569&width=900"
          alt=""
        />
      </div>
    </div>
  );
}

export default Project;
