import Item from "./Item";

// Parent Component
export default function PackingList({ items, onDeleteItem, onUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item 
            item={item} 
            onDeleteItem={onDeleteItem} 
            onUpdateItem={onUpdateItem} 
            key={item.id} />
          ))}
        </ul>
      </div>
    );
  }