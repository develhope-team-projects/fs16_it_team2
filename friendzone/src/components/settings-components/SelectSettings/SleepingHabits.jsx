import React, { useState } from "react";
import SelectionList from "./SelectionList";

const SleepingHabits = () => {
  const [selectedSleepPatterns, setSelectedSleepPatterns] = useState([]);
  const sleepPatterns = [
    "Early Riser",
    "Night Owl",
    "Regular Sleeper",
    "Irregular Sleeper",
  ];

  return (
    <SelectionList
      title="Sleeping Habits"
      items={sleepPatterns}
      selectedItems={selectedSleepPatterns}
      onItemChange={setSelectedSleepPatterns}
    />
  );
};

export default SleepingHabits;
