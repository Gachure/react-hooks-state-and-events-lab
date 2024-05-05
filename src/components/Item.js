import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false); // Initial state for in-cart status

  const toggleCartStatus = () => {
    setIsInCart(!isInCart); // Toggle the in-cart status
  };

  return (
    <li className={isInCart ? "in-cart" : ""}> {/* Set class based on in-cart status */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"} {/* Button label based on status */}
      </button>
    </li>
  );
}

export default Item;
