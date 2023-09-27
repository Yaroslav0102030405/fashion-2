import React from "react";
import "./favorite.css";
import PropTypes from "prop-types";
// import FavoriteMarkup from "../FavoriteMarkup/FavoriteMarkup";

const Favorite = ({img, title, text}) => {
  return (
    <>
      <img className="favorite__img" src={img} alt="Promo05" />
      <h3 className="favorite__text">{title}</h3>
      <span></span>
      <p>{text}</p>
    </>
  );
};

Favorite.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Favorite;
