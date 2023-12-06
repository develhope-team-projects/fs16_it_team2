import React, { useState } from "react";
import SelectionList from "./SelectionList";

const DietaryPreferences = () => {
  const [selectedDiets, setSelectedDiets] = useState([]);
  const diets = ["Vegetarian", "Vegan", "Gluten-Free", "Keto", "Paleo", "Pescatarian"];

  return (
    <SelectionList
      title="Dietary Preferences"
      items={diets}
      selectedItems={selectedDiets}
      onItemChange={setSelectedDiets}
    />
  );
};

export default DietaryPreferences;
