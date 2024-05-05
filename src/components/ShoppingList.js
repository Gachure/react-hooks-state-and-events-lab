import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial state for category filter

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update the state when filter changes
  };

  // Filter the items based on the selected category
  const displayedItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}> {/* Event handler for filter */}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
