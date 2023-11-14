import React, { useState } from "react";
import SelectionList from "./SelectionList";

const Pets = () => {
  const [selectedPets, setSelectedPets] = useState([]);
  const petsList = ["Dog", "Cat", "Fish", "Bird", "Reptile", "Small Mammal", "No Pets"];

  return (
    <SelectionList
      title="Pets"
      items={petsList}
      selectedItems={selectedPets}
      onItemChange={setSelectedPets}
    />
  );
};

export default Pets;
