import React from "react";
import Premiums from "../../components/premiumCard/Premiums";

const PremiumPlatinum = () => {
  const prices = [
    { title: "Popular", duration: "1 week", price: "20.00" },
    { title: "1 Month", duration: "1 Month", price: "10.99" },
    { title: "Best value", duration: "6 Months", price: "5.99" },
  ];

  return <Premiums title="FRIENDZONE Platinum" color="zinc" prices={prices} />;
};

export default PremiumPlatinum;
