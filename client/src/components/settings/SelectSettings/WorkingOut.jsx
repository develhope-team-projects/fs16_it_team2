import React, { useState } from "react";
import SelectionList from "./SelectionList";

const WorkingOut = () => {
  const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState([]);
  const workoutTypes = [
    "Cardio",
    "Strength Training",
    "Yoga",
    "Pilates",
    "HIIT",
    "Crossfit",
    "Running",
    "Swimming",
  ];

  return (
    <SelectionList
      title="Working Out"
      items={workoutTypes}
      selectedItems={selectedWorkoutTypes}
      onItemChange={setSelectedWorkoutTypes}
    />
  );
};

export default WorkingOut;
