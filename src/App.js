import React from "react";

import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Card from "./components/card/Card";
import Sale from "./components/sale/Sale";
import Favorite from "./components/favorite/Favorite";
import Download from "./components/download/Download";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footel";




function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Card />
      <Sale />
      <Favorite />
      <Download />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
