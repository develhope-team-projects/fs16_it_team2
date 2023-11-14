import React from "react";
import Premiums from "../components/premiumCard2/Premiums";


const PremiumGold = () => {
  const prices = [
    { title: "Popular", duration: "1 week", price: "20.00" },
    { title: "1 Month", duration: "1 Month", price: "10.99" },
    { title: "Best value", duration: "6 Months", price: "5.99" },
  ];

  return <Premiums title="FRIENDZONE GOLD" color="yellow" prices={prices} />;
};

export default PremiumGold;
