// // //

// ITEM COMPONENT ----------✅✅✅
export default function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      {/* ⏺ remember it's call the function only when the event happens */}
    </li>
  );
}
// ----------⛔️⛔️⛔️
