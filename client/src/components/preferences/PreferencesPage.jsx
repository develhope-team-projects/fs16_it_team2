import React, { useState } from "react";
import AgeRangeInput from "./AgeRangeInput";
import DistanceSlider from "./DistanceSlider";
import LocationPicker from "../../components/location/LocationPicker";

const PreferencesPage = () => {
  const [distance, setDistance] = useState(0);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(30);
  const [minHeight, setMinHeight] = useState(150);
  const [maxHeight, setMaxHeight] = useState(180);

  return (
    <div className="container mx-auto p-4 z-10 w-4/5">
      <h1 className="text-3xl font-bold mb-10">Preferences</h1>

      <LocationPicker />

      <DistanceSlider />

      {/* Distance Slider */}

      <AgeRangeInput />
      {/* Age Range */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Save Preferences
      </button>
    </div>
  );
};

export default PreferencesPage;
