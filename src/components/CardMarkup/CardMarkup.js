import React from "react";
// import CardMarkup from "../CardMarkup/CardMarkup";
import Card from "../Card/Card";

import { motion } from "framer-motion";

import cardOne from "./../../image/categories/card-01.jpg";
import cardTwo from "./../../image/categories/card-02.jpg";
import cardThree from "./../../image/categories/card-03.jpg";

import "../Card/card.css";

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

const CardMarkup = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="card"
        id="fashion"
      >
        <div className="container">
          <motion.h2 custom={1} variants={Animation} className="card__title">
            new arrivals
          </motion.h2>
          <ul className="card__list">
            <motion.li custom={2} variants={Animation}>
              <Card
                img={cardOne}
                title="Hoodies & Sweetshirt"
                text="Explore Now!"
              />
            </motion.li>
            <motion.li custom={3} variants={Animation}>
              <Card img={cardTwo} title="Explore Now!" text="Explore Now!" />
            </motion.li>
            <motion.li custom={4} variants={Animation}>
              <Card
                img={cardThree}
                title="Tees & T-Shirt"
                text="Tees & T-Shirt"
              />
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default CardMarkup;
