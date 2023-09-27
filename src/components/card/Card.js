import React from "react";
import "./card.css";
import PropTypes from "prop-types";

const Card = ({ img, title, text }) => {
  return (
    <>
      <img className="card__img" src={img} alt="card" width="484" />
      <h3 className="card__last-name">{title}</h3>
      <p className="card__desc">{text}</p>
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
