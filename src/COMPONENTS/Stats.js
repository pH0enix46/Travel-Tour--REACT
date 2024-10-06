// // //

// STATS COMPONENT ----------✅✅✅
export default function Stats({ items }) {
  // ⏺ Guard Clause
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🤔</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go 🚎"
            : `🎉 You have ${numItems} items on your list, and you already pack ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
}
// ----------⛔️⛔️⛔️
