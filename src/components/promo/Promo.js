import React from "react";
import "./promo.css";
import PromoImg from "./../../image/images/header-img.png";

import { motion } from "framer-motion";

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


const Promo = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="promo">
      <div className="container">
        <div className="promo__content">
          <motion.div custom={1} variants={Animation} className="promo__text">
            <h1 className="promo__title">
              <span className="promo__highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="promo__highlight-yellow">
                <span> UNIQUE</span>
              </span>
              CLOTHES.
            </h1>
            <p className="promo__desc">
              Live for Influential and Innovative fashion!
            </p>
            <span className="promo__btn-wrapper">
              <button className="promo__btn" type="button">
                Shop Now
              </button>
            </span>
          </motion.div>
          <motion.div custom={2} variants={Animation} className="promo__img">
            <img src={PromoImg} alt="Promo" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Promo;
