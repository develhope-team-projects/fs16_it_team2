import React, { useState } from "react";
import SelectionList from "./SelectionList";

const Zodiac = () => {
  const [selectedZodiacs, setSelectedZodiacs] = useState([]);
  const zodiacList = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  return (
    <SelectionList
      title="Zodiac"
      items={zodiacList}
      selectedItems={selectedZodiacs}
      onItemChange={setSelectedZodiacs}
    />
  );
};

export default Zodiac;
