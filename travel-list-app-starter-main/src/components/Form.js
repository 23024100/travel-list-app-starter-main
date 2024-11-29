import React, { useState } from "react";

export default function Form( {onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
   
    function handleChange(e) {
      setDescription(e.target.value);
    }
    function handleQuantityChange(e) {
      setQuantity(Number(e.target.value));
    }
    function handleSubmit(e) {
      e.preventDefault(); // Prevents the default behaviour of the form - Prevents browser from reloading
   
    // If the descripiton is empty, don't need to create a new item
    // When the description is empthy, you don't want empty description objects to be made and populated in the list
    if (!description) return;
   
    // Creates a new JavaScript object
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      }
   
    onAddItems(newItem); // Call the function that was passed in as a prop
   
    // Reset the form
    // Clear the input field after the item has been added to the list
    setDescription("");
    setQuantity(1);
    }
   
    // setItems is the state setter function and it takes prevItems as an argument
    // prevItems is also an empty array - creating a brand new array prevItems
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={handleQuantityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <input
      type="text"
      placeholder="Enter Item here..."
      value={description}
      onChange={handleChange}
      />
      <button type="submit">Add</button>
      </form>
    );
  }