import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import RangeChkbox from './RangeChkbox';

const DistanceSlider = () => {
  const [distance, setDistance] = useState(0); // Initial distance value
  const [filterEnabled, setFilterEnabled] = useState(false);

  const handleDistanceChange = (newDistance) => {
    setDistance(newDistance);
  };
  const handleFilterChange = (isChecked) => {
    setFilterEnabled(isChecked);
  };
  return (
    <div className="relative mb-6">
      <label htmlFor="distance-slider" className="flex justify-between md:text-lg text-gray-500 dark:text-gray-400 mb-2 ">
        Distance
        <div className="flex justify-between">
        <span className="md:text-lg text-gray-500 dark:text-gray-400">{distance} km</span>
      </div>
      </label>
      <Slider
        min={0}
        max={160}
        step={1}
        value={distance}
        onChange={handleDistanceChange}
        className="w-full"
      />
      <div className="flex justify-between mt-2">
        <span className="md:text-lg text-sm text-gray-500 dark:text-gray-400">Min (0 km)</span>
        <span className="md:text-lg text-sm text-gray-500 dark:text-gray-400">Max (160 km)</span>
      </div>
    
      <RangeChkbox onChange={handleFilterChange} />
    </div>
  );
};

export default DistanceSlider;
