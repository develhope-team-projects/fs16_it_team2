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
      <h3 className="mb-4 text-lg font-semibold">Drinking Habits</h3>
      <SelectionList
     
        items={drinkingOptions}
        selectedItems={selectedDrinking}
        onItemChange={setSelectedDrinking}
      />
    </div>
  );
};

export default DrinkingHabits;
