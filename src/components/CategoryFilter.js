import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((c) => 
      <button className={c===selectedCategory ? "selected":""} onClick={()=> onSelectCategory(c)} key={c}>{c}</button>
      )} 
    </div>
  );
}

export default CategoryFilter;
