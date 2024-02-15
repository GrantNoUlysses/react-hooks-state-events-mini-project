import React, { useState } from "react";

function CategoryFilter({ categories, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button 
          key={category} 
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
