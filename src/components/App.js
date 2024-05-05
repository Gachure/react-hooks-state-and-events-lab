import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial state for dark mode toggle

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light"; // Determine the class based on state

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> {/* Toggle button */}
      </header>
      <ShoppingList items={itemData} /> {/* Pass the item data */}
    </div>
  );
}

export default App;
