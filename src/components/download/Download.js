import React from "react";
import "./download.css";

import { motion } from "framer-motion";

import Vouch from "./../../image/images/vouchers-img.png";
import AppStore from "./../../image/icons/app-store.png";
import GooglePlay from "./../../image/icons/google-play.png";

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

const Download = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="download"
      id="catalogue"
    >
      <div className="container">
        <div className="wrapper">
          <motion.div custom={1} variants={Animation}>
            <h2 className="download__title">
              DOWNLOAD APP & <br />
              GET THE VOUCHER!
            </h2>
            <p className="download__text">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>

            <ul className="download__list">
              <li>
                <img
                  className="download__app-store"
                  src={AppStore}
                  alt="app-store"
                />
              </li>
              <li>
                <img
                  className="download__google-play"
                  src={GooglePlay}
                  alt="google-play"
                />
              </li>
            </ul>
          </motion.div>
          <motion.div custom={2} variants={Animation}>
            <img className="download__google-phone" src={Vouch} alt="vouch" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Download;
