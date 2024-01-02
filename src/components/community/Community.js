import React from "react";
import "./community.css";

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

const Community = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="community"
    >
      <div className="container">
        <motion.h2 custom={1} variants={Animation} className="community__title">
          join shopping community to get monthly promo
        </motion.h2>
        <motion.p custom={2} variants={Animation} className="community__text">
          Type your email down below and be young wild generation
        </motion.p>

        <motion.form custom={3} variants={Animation}>
          <input
            className="community__input"
            type="name"
            name="name"
            placeholder="Add your email here"
          />
          <button className="community__btn" type="button">
            Send
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Community;
