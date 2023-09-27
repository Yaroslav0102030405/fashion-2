import React from "react";
import "./brands.css";
import hm from './../../image/brands/hm.png'
import obey from "./../../image/brands/obey.png";
import sporify from "./../../image/brands/shopify.png";
import lacoste from "./../../image/brands/lacoste.png";
import levis from "./../../image/brands/levis.png";
import amazon from "./../../image/brands/amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li className="brands__items">
            <a href="#!">
              <img src={hm} alt="hm" />
            </a>
          </li>
          <li className="brands__items">
            <a href="#!">
              <img src={obey} alt="obey" />
            </a>
          </li>
          <li className="brands__items">
            <a href="#!">
              <img src={sporify} alt="sporify" />
            </a>
          </li>
          <li className="brands__items">
            <a href="#!">
              <img src={levis} alt="levis" />
            </a>
          </li>
          <li className="brands__items">
            <a href="#!">
              <img src={lacoste} alt="lacoste" />
            </a>
          </li>
          <li className="brands__items">
            <a href="#!">
              <img src={amazon} alt="amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
