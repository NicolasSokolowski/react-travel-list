import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackagingList from "./PackagingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Do you really want to delete all items on the list ?"
    )

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form 
        onAddItem={handleAddItem}
      />
      <PackagingList 
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats 
        items={items}
      />
    </div>
  )
}

 

 

 