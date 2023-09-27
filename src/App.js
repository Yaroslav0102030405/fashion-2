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
import CardDates from './CardDates.json'

// import CardDateList from "./components/card/CardDateList";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      {/* <CardDateList items={CardDates} /> */}

      <Card
        url={CardDates[0].url}
        title={CardDates[0].title}
        text={CardDates[0].text}
      />
      <Card
        url={CardDates[1].url}
        title={CardDates[1].title}
        text={CardDates[1].text}
      />

      <Sale />
      <Favorite />
      <Download />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
