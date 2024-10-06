// // //

import { useState } from "react";

// FORM COMPONENT ----------✅✅✅
export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // ⏺ Guard Clause
    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    // console.log(newItem);

    handleAddItems(newItem); // ⏺ Inverse Data Flow in React is when a child component sends data to the parent by calling a function passed as a prop, child to parent connection. Here, child update the parent state

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🎒 trip?</h3>

      <select
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      >
        {Array.from(
          {
            length: 10,
          },
          (_, i) => i + 1
        ).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => {
          // console.log(event.target);
          setDescription(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
// ----------⛔️⛔️⛔️
