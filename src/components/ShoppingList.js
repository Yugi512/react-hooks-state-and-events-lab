import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemList, setItemList] = useState(items) 
  const [selectCategory, setCategory] = useState("All")


  function changeCategory(event){
    let currentCat = event.target.value
    setCategory(currentCat)
  }

  const itemsToDisplay = itemList.filter((item) => {
    if(selectCategory === "All" ){
      return true
    } else {
      return item.category === selectCategory
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(event) => changeCategory(event)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
