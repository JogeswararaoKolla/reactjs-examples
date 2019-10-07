import React from "react";

function List({ groceries }) {
  const notpurchased = groceries.filter(grocery => !grocery.purchased);
  return (
    <ul className="list-group">
      {notpurchased.map(element => (
        <li className="list-group-item" key={element.id}>
          {element.id}.{element.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
