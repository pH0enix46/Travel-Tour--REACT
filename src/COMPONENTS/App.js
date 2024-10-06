// // //

// IMPORTED FILE ----------✅✅✅
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// ⏺ Always use default export in React
// ----------⛔️⛔️⛔️

// DEMO DATA ----------✅✅✅
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
// ----------⛔️⛔️⛔️

// MAIN/HEAD COMPONENT ----------✅✅✅
export default function App() {
  // ⏺ Always remember🤯 In React, a child component cann't directly access or modify the parent component’s state or props. its only goes parent to child by props

  // const [items, setItems] = useState(initialItems);
  const [items, setItems] = useState([]); // ⏺ "Lifting State Up" in React is when you move the State from a child component to a common parent component, allowing multiple child components to share and sync the same State. Sync means keeping the State consistent across multiple components so that changes in one component immediately reflect in others

  function handleAddItems(item) {
    // console.log(item);
    setItems((items) => [...items, item]); // ⏺ we know react is all about immutability, so we have to create a new array
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id)); // ⏺ mane jeta milbe na seta will no loner be part of the new array. And that's how we delete an item
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    ); // ⏺ confirm() method/function displays a dialog box with a specified message and “OK” and “Cancel” buttons, returning true if “OK” is clicked and false if “Cancel” is clicked.
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
// ----------⛔️⛔️⛔️
