import React, { useState } from "react";
import SelectionList from "./SelectionList";

const Passions = () => {
  const [selectedPassions, setSelectedPassions] = useState([]);
  const passionsList = ["Reading", "Coding", "Traveling", "Cooking"];

  return (
    <div>
   
      <SelectionList
        title="Passions"
        items={passionsList}
        selectedItems={selectedPassions}
        onItemChange={setSelectedPassions}
      />

      {/* ... other sections ... */}
    </div>
  );
};

export default Passions;
