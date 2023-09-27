import React from "react";
import "./card.css";
import cardOne from "./../../image/categories/card-01.jpg";
import cardTwo from "./../../image/categories/card-02.jpg";
import cardThree from "./../../image/categories/card-03.jpg";

const Card = () => {
  return (
    <section className="card">
      <div className="container">
        <h2 className="card__title">new arrivals</h2>

        <ul className="card__list">
          <li>
            <img className="card__img" src={cardOne} alt="cardOne" />
            <h3 className="card__last-name">Hoodies & Sweetshirt</h3>
            <p className="card__desc">Explore Now!</p>
          </li>
          <li>
            <img className="card__img" src={cardTwo} alt="cardTwo" />
            <h3 className="card__last-name">Explore Now!</h3>
            <p className="card__desc">Explore Now!</p>
          </li>
          <li>
            <img className="card__img" src={cardThree} alt="cardThree" />
            <h3 className="card__last-name">Tees & T-Shirt</h3>
            <p className="card__desc">Tees & T-Shirt</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
