import React from "react";
// import CardMarkup from "../CardMarkup/CardMarkup";
import Card from "../Card/Card";

import cardOne from "./../../image/categories/card-01.jpg";
import cardTwo from "./../../image/categories/card-02.jpg";
import cardThree from "./../../image/categories/card-03.jpg";

import "../Card/card.css";

const CardMarkup = () => {
  return (
    <>
      <section className="card" id="fashion">
        <div className="container">
          <h2 className="card__title">new arrivals</h2>
          <ul className="card__list">
            <li>
              <Card
                img={cardOne}
                title="Hoodies & Sweetshirt"
                text="Explore Now!"
              />
            </li>
            <li>
              <Card img={cardTwo} title="Explore Now!" text="Explore Now!" />
            </li>
            <li>
              <Card
                img={cardThree}
                title="Tees & T-Shirt"
                text="Tees & T-Shirt"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CardMarkup;
