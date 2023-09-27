import React from "react";

import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Sale from "./components/sale/Sale";
// import Favorite from "./components/favorite/Favorite";
import FavoriteMarkup from "./components/FavoriteMarkup/FavoriteMarkup";
import Download from "./components/download/Download";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";
import CardMarkup from "./components/CardMarkup/CardMarkup";


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <CardMarkup />
      <Sale />
      <FavoriteMarkup />
      <Download />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
