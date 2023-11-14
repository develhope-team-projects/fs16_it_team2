import React, { useState } from "react";
import SelectionList from "./SelectionList";

const DrinkingHabits = () => {
  const [selectedDrinking, setSelectedDrinking] = useState([]);
  const drinkingOptions = [
    "Non-Drinker",
    "Social Drinker",
    "Moderate Drinker",
    "Heavy Drinker",
  ];

  return (
    <div>
   
      <SelectionList
        title="Drinking Habits"
        items={drinkingOptions}
        selectedItems={selectedDrinking}
        onItemChange={setSelectedDrinking}
      />
    </div>
  );
};

export default DrinkingHabits;
