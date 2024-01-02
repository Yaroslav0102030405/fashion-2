import React from "react";
import "./sale.css";
import SaleImg from './../../image/sale/sale-remove.png';

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

const Sale = () => {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="sale"
        id="lifestyle"
      >
        <div className="overlay">
          <div className="container">
            <div className="wrapper">
              <motion.div custom={1} variants={Animation} className="sale__img">
                <img className="sale__img" src={SaleImg} alt="sale" />
              </motion.div>
              <motion.div
                custom={2}
                variants={Animation}
                className="sale__right"
              >
                <h2 className="sale__title">payday sale now</h2>
                <p className="sale__text">
                  Spend minimal $100 get 30% off voucher code for your next
                  purchase
                </p>
                <span className="sale__date">1 June - 10 June 2021</span>
                <p className="sale__text-text">*Terms & Conditions apply</p>
                <button className="sale__btn">shop now</button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    );
};

export default Sale;
