import React, { useState } from "react";

export function HookStateArray() {
  const [items, setItems] = useState([]);
  //Make a copy of array of items using spread operator
  // and append an item to array by passing as element to the setItems function
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <div
      style={{
        margin: "10px",
        padding: "20px",
        border: "2px solid brown",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>
        <button className="btn btn-primary" onClick={addItem}>
          Add an Number
        </button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
