import React, { useState } from "react";
import SelectionList from "./SelectionList";

const PersonalityType = () => {
  const [selectedPersonalityTypes, setSelectedPersonalityTypes] = useState([]);
  const personalityTypesList = [
    "Introverted",
    "Extroverted",
    "Analytical",
    "Creative",
    "Logical",
    "Empathetic",
    "Adventurous",
    "Reserved",
  ];

  return (
    <SelectionList
      title="Personality Type"
      items={personalityTypesList}
      selectedItems={selectedPersonalityTypes}
      onItemChange={setSelectedPersonalityTypes}
    />
  );
};

export default PersonalityType;
