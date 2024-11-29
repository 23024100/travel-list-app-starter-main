export default function Stats({ items }) { // pass item prop
    const numItems = items.length; // total number of items
    const numPacked = items.filter((item) => item.packed).length; // will only keep items with packed = true (hence, item.pacled)
    const percentage = Math.round((numPacked / numItems) * 100); 
    if (percentage === 100) {
      return (
        <footer className="stats">
          <em>
            You got everything!
          </em>
        </footer>
      );
    }
    
    return (
      <footer className="stats">
        <em>
          {/* percentage === 100 ? "You got everything!" : */}
          You have {numItems} items in the list. You already packed {numPacked} ({percentage}%).
        </em>  
      </footer>
    );
  }
  