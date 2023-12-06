import React, { useState } from "react";

const RangeChkbox = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked); // Pass the updated value to the parent component
  };

  return (
    <div className="flex space-between w-full items-center mt-2">
      <label className="relative  cursor-pointer">
        <input
          id="age-filter-checkbox"
          name="ageAutoExpansion"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-purple-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
     
      </label>
      <span className="ms-3 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300">
          Only show people in this range
        </span>
    </div>
  );
};

export default RangeChkbox;
