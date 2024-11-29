import React, { useState } from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import Form from "./Form";
import Item from "./Item";
import PackingList from "./PackingList";
// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];
 
function App() {
  const [items, setItems] = useState([]); // Initialise with empty array
 
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]); // Callback function - latest state variable updated
  }
 
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Filter out the item with the id that we want to delete
  }
 
  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
 
 
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem}/>
      <PackingList
      items={items}
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}
     
      />
      <Stats />
    </div>
  );
}
 
export default App;