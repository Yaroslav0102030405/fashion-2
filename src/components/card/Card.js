import React from "react";
import "./card.css";
import PropTypes from "prop-types";
// import CardDates from './../../CardDate.json'
// import cardOne from "./../../image/categories/card-01.jpg";
// import cardTwo from "./../../image/categories/card-02.jpg";
// import cardThree from "./../../image/categories/card-03.jpg";

const Card = ({ url, title, text}) => {
  return (
    <section className="card">
      <div className="container">
        <h2 className="card__title">new arrivals</h2>

         <ul className="card__list">
          <li>
            <img className="card__img" src={url} alt="cardOne" />
            <h3 className="card__last-name">{title}</h3>
            <p className="card__desc">{text}</p>
          </li>
        </ul>
        
      </div>
    </section>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card;
