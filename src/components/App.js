import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(false)
 
  const appClass = darkMode ? "App dark" : "App light"
  function clickToDark(event){
    if(darkMode === false){
      let buttonText = event.target
      buttonText.innerText = "Light Mode"
      setDarkMode(true)
    } else if(darkMode !== false){
      let buttonText = event.target
      buttonText.innerText = "Dark Mode"
      setDarkMode(false)
    }
  } 





  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={(event) => clickToDark(event)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
