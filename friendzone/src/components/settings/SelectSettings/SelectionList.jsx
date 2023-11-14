import React, { useState } from "react";

const SelectionList = ({ title, items, selectedItems, onItemChange }) => {
  const handleItemChange = (item) => {
    if (selectedItems.includes(item)) {
      onItemChange(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      onItemChange([...selectedItems, item]);
    }
  };

  return (
    <div className="flex flex-col ">
      <div>
        <h3 className="mt-5 mb-4 text-lg font-semibold gray-text ">{title}</h3>
      </div>
      <div>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${
              selectedItems.includes(item)
                ? "border-2 border-purple-500 bg-transparent  text-purple-500"
                : "border border-gray-600 bg-transparent"
            } rounded-3xl gray-text px-4 py-2 m-1 cursor-pointer focus:outline-none`}
            onClick={() => handleItemChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionList;
