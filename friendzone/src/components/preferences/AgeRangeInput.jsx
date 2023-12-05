import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import RangeChkbox from  "./RangeChkbox"// Adjust the path based on your project structure

const AgeRangeInput = () => {
  const [ageRange, setAgeRange] = useState([18, 99]);
  const [filterEnabled, setFilterEnabled] = useState(false);

  const handleAgeChange = (newRange) => {
    const [newMinAge, newMaxAge] = newRange;

    if (newMinAge + 3 <= newMaxAge) {
      setAgeRange(newRange);
    } else {
      setAgeRange([newMinAge, newMinAge + 3]);
    }
  };

  const handleFilterChange = (isChecked) => {
    setFilterEnabled(isChecked);
  };

  return (
    <div className="relative mb-6">
      <label htmlFor="age-range-input" className="flex justify-between md:text-lg text-gray-500 dark:text-gray-400 mb-2">
        Age Range
        <div className="flex  mt-2">
        <span className="md:text-xl text-sm text-gray-500 dark:text-gray-400"> {ageRange[0]}-</span>
        <span className="md:text-xl text-sm text-gray-500 dark:text-gray-400">{ageRange[1]}</span>
      </div>
      </label>
      <Slider
        range
        min={18}
        max={99}
        step={1}
        value={ageRange}
        onChange={handleAgeChange}
        className="w-full"
      />
      <div className="flex justify-between mt-2">
        <span className="md:text-xl text-sm text-gray-500 dark:text-gray-400">Min (18)</span>
        <span className="md:text-xl text-sm text-gray-500 dark:text-gray-400">Max (99+)</span>
      </div>

      <RangeChkbox onChange={handleFilterChange} />

     
    </div>
  );
};

export default AgeRangeInput;
