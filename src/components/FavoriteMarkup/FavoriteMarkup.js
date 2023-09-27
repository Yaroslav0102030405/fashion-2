import React from "react";
// import "./card.css";
import Favorite from "../favorite/Favorite";

import Promo04 from "./../../image/images/promo-04.jpg";
import Promo05 from "./../../image/images/promp-05.jpg";

const FavoriteMarkup = () => {
  return (
    <>
      <section className="favorite">
        <div className="container">
          <h2 className="favorite__title">Young’s Favourite</h2>
          <ul className="favorite__wrapper">
            <li>
              <Favorite
                img={Promo04}
                title="Trending on instagram"
                text="Explore Now!"
              />
            </li>
            <li>
              <Favorite
                img={Promo05}
                title="All Under $40"
                text="Explore Now!"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FavoriteMarkup;
