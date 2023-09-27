import React from "react";
import "./download.css";
import Vouch from "./../../image/images/vouchers-img.png";
import AppStore from "./../../image/icons/app-store.png";
import GooglePlay from "./../../image/icons/google-play.png";
const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <div className="wrapper">
          <div>
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
          </div>
          <div>
            <img src={Vouch} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
