import React from "react";
// import "./card.css";
import Favorite from "../favorite/Favorite";

import { motion } from "framer-motion";

import Promo04 from "./../../image/images/promo-04.jpg";
import Promo05 from "./../../image/images/promp-05.jpg";

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const FavoriteMarkup = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="favorite"
      >
        <div className="container">
          <motion.h2
            custom={1}
            variants={Animation}
            className="favorite__title"
          >
            Young’s Favourite
          </motion.h2>
          <ul className="favorite__wrapper">
            <motion.li custom={2} variants={Animation}>
              <Favorite
                img={Promo04}
                title="Trending on instagram"
                text="Explore Now!"
              />
            </motion.li>
            <motion.li custom={3} variants={Animation}>
              <Favorite
                img={Promo05}
                title="All Under $40"
                text="Explore Now!"
              />
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default FavoriteMarkup;
