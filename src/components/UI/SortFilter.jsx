import React from "react";

const SortFilter = ({ onSortChange, currentSort = "", options }) => {
  const defaultOptions = [
    { value: "", label: "Default" },
    { value: "price_low_to_high", label: "Price, Low to High" },
    { value: "price_high_to_low", label: "Price, High to Low" },
    { value: "likes_high_to_low", label: "Most Liked" },
  ];

  const sortOptions = options || defaultOptions;

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    if (onSortChange) {
      onSortChange(selectedSort);
    }
  };

  return (
    <div>
      <select id="filter-items" value={currentSort} onChange={handleSortChange}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
