import React, { useState } from "react";
import "./HighlightItem.css";

function HighlightItem() {
  const categories = ["All", "Electronics", "Clothing", "Books", "Sports"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default HighlightItem;
