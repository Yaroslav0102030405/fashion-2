import React from "react";
import "./promo.css";
import PromoImg from "./../../image/images/header-img.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
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
          </div>
          <div className="promp__img">
            <img src={PromoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
