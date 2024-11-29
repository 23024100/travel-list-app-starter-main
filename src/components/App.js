import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]); // Initialise with empty array
  
  // Add item
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]); // Callback function - latest state variable updated 
  }

  // Delete item
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Filter out the item with the id that we want to delete
  }

  // Update packed status of an item
  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Sort items by quantity (descending)
  function sortItemsByQuantity() {
    const sortedItems = [...items].sort((a, b) => b.quantity - a.quantity); // Sort descending by quantity
    setItems(sortedItems); // Update the state with the sorted array
  }

  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <button className="sort-button" onClick={sortItemsByQuantity}>Sort by Quantity</button>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
