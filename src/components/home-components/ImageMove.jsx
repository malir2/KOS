import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ImageMove() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 1],
    ["-6vw", "-3vw", "-1vw", "0vw", "1vw"]
  );
  return (
    <div ref={ref}>
      <motion.img
        style={{ x: x2 }}
        className="h-[250px]"
        src="https://kos.com/cdn/shop/files/new-homepage-animation-v2.png?v=1659970184&width=1052"
        alt=""
      />
    </div>
  );
}

export default ImageMove;
