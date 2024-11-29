// Child Component
export default function Item({ item, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
        />
        <span
        // style={{ textDecoration: item.packed ? "line-through" : "none"}}
        style={item.packed ? { textDecoration: "line-through "} : {}}>
          {item.description} ({item.quantity})
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    );
  }