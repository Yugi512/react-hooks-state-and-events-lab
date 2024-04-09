import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  const itemInCart = inCart ? "in-cart" : ""
  const classBtn = inCart ? "remove" : "add"
  
  function addAndRemove(event){
    if(inCart === false){
      let changeToCart = event.target
      changeToCart.innerText = "Remove from Cart"
      setInCart(true)
    } else if (inCart !== false){
      let changeToCart = event.target
      changeToCart.innerText = "Add to Cart"
      setInCart(false)
    }
  }

  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={(event) => addAndRemove(event)} className={classBtn}>Add to Cart</button>
    </li>
  );
}

export default Item;
