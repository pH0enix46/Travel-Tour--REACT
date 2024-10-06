// // //

import { useState } from "react";
import Item from "./Item";

// PACKING-LIST COMPONENT ----------✅✅✅
export default function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // ⏺ localeCompare() method/function checks if one string is before, after, or equal to another string and gives a number to show the result. We use it to compare strings
  // EX:
  // const str1 = "apple";
  // const str2 = "banana";
  // const result = str1.localeCompare(str2);
  // console.log(result); // Outputs: -1 (because "apple" comes before "banana")
  // // • If result is negative: str1 is before str2
  // // • If 0: they are equal
  // // • If positive: str1 is after str2
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +b.packed - +a.packed);

  // ⏺ sort((a, b) => a - b) "Ascending Order"
  // If a is less than b, a - b returns a negative value, which tells the sort() function that a should come before b
  // If a is greater than b, a - b returns a positive value, indicating b should come before a
  // If they are equal, it returns 0, meaning their order does not change
  // ⏺ sort((a, b) => b - a) "Descending Order"
  // If b is less than a, b - a returns a negative value, indicating that b should come after a
  // If b is greater than a, it returns a positive value, suggesting a should come after b
  // If they are equal, it returns 0, keeping their order unchanged
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order !</option>
          <option value="description">Sort by description !</option>
          <option value="packed">Sort by packed status !</option>
        </select>

        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
// ----------⛔️⛔️⛔️
