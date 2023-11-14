import React, { useState } from "react";
import SelectionList from "./SelectionList";

const EducationLevel = () => {
  const [selectedEducationLevels, setSelectedEducationLevels] = useState([]);
  const educationLevelsList = ["High School", "Bachelor's Degree", "Master's Degree", "Ph.D.", "Other"];

  return (
    <SelectionList
      title="Education Level"
      items={educationLevelsList}
      selectedItems={selectedEducationLevels}
      onItemChange={setSelectedEducationLevels}
    />
  );
};

export default EducationLevel;
