import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchValue] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
    console.log(searchInput)
  }

    const itemsToDisplay = items.filter((item) => {
      if (searchInput === "") {
        if (selectedCategory === "All") {
              return true;
            } else {return item.category === selectedCategory;}
      } else if (searchInput !== "") {
           if (selectedCategory === "All" || item.category === selectedCategory) {
             return item.name.includes(searchInput);
           }
      }
    })

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") {
  //     return true;
  //   } else {return item.category === selectedCategory;}    
  // });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchInput} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
