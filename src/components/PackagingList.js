import { useState } from "react";
import Item from "./Item.js";

export default function PackagingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") 
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "quantity") 
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.quantity) - Number(b.quantity));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem}/>
        ))}
      </ul>

      <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">
              Sort by input order
            </option>
            <option value="description">
              Sort by description
            </option>
            <option value="packed">
              Sort by packed status
            </option>
            <option value="quantity">
              Sort by quantity
            </option>
          </select>
          <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  )
}