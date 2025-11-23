import React, { useState, useEffect } from "react";

const Header = ({ search = "", setSearch, products = [] }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!search?.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = products
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5);

    setSuggestions(filtered);
  }, [search, products]);

  const handleSelect = (name) => {
    setSearch(name);
    setSuggestions([]);
  };

  return (
    <header style={styles.header}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {suggestions.length > 0 && (
        <div style={styles.dropdown}>
          {suggestions.map((item) => (
            <div
              key={item._id}
              onClick={() => handleSelect(item.name)}
              style={styles.suggestion}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    padding: "20px",
    background: "#fff",
    position: "relative",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  search: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  dropdown: {
    position: "absolute",
    top: "70px",
    left: "20px",
    right: "20px",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 10,
  },
  suggestion: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default Header;
