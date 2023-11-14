import React, { useState } from "react";
import SelectionList from "./SelectionList";

const CommunicationStyle = () => {
  const [selectedCommunicationStyles, setSelectedCommunicationStyles] =
    useState([]);
  const communicationStylesList = [
    "Assertive",
    "Passive",
    "Aggressive",
    "Collaborative",
    "Direct",
    "Indirect",
    "Listener",
    "Speaker",
  ];

  return (
    <SelectionList
      title="Communication Style"
      items={communicationStylesList}
      selectedItems={selectedCommunicationStyles}
      onItemChange={setSelectedCommunicationStyles}
    />
  );
};

export default CommunicationStyle;
