import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {
  
const [newItemName, setNewItemName] = useState("");
const [newItemCategory, setNewItemCategory] = useState("Produce");

function handleNewItemNameChange(e) {
  // console.log("new item name: " + e.target.value)
  setNewItemName(e.target.value);
}

function handlenewItemCategory(e) {
  // console.log("new item category: " + e.target.value)
  setNewItemCategory(e.target.value);
  // console.log(newItem);
} 

const newItem = {
  id: uuid(),
  name: newItemName,
  category: newItemCategory,
};
  
  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit(newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handlenewItemCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
