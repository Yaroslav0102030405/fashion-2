import React from "react";
import "./community.css";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <h2 className="community__title">
          join shopping community to get monthly promo
        </h2>
        <p className="community__text">
          Type your email down below and be young wild generation
        </p>

        <form>
          <input
            className="community__input"
            type="name"
            name="name"
            placeholder="Add your email here"
          />
          <button className="community__btn" type="button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Community;
