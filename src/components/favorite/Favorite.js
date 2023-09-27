import React from "react";
import "./favorite.css";
import Promo04 from "./../../image/images/promo-04.jpg";
import Promo05 from "./../../image/images/promp-05.jpg";

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <h2 className="favorite__title">Young’s Favourite</h2>
        <ul className="favorite__wrapper">
          <li>
            <img className="favorite__img" src={Promo04} alt="Promo04" />
            <h3 className="favorite__text">Trending on instagram</h3>
            <span></span>
            <p>Explore Now!</p>
          </li>
          <li>
            <img className="favorite__img" src={Promo05} alt="Promo05" />
            <h3 className="favorite__text">All Under $40</h3>
            <span></span>
            <p>Explore Now!</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Favorite;
