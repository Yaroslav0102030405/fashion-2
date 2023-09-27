import React from "react";
import "./sale.css";
import SaleImg from './../../image/sale/sale-remove.png';

const Sale = () => {
    return (
      <section className="sale">
        <div className="overlay">
          <div className="container">
            <div className="wrapper">
              <div className="sale__img">
                <img className="sale__img" src={SaleImg} alt="sale"/>
              </div>
              <div className="sale__right">
                <h2 className="sale__title">payday sale now</h2>
                <p className="sale__text">
                  Spend minimal $100 get 30% off voucher code for your next
                  purchase
                </p>
                <span className="sale__date">1 June - 10 June 2021</span>
                <p className="sale__text-text">*Terms & Conditions apply</p>
                <button className="sale__btn">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Sale;
