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
      <div style={styles.container}>
        {/* Company Logo/Name */}
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Trizen</h1>
        </div>

        {/* Search Bar */}
        <div style={styles.searchWrapper}>
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
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: "20px",
    background: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    flexShrink: 0,
  },
  logoText: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#2874f0",
    margin: 0,
    paddingLeft: "0px"

  },
  searchWrapper: {
    flex: 1,
    position: "relative",
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
    top: "55px",
    left: "0",
    right: "0",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 10,
  },
  suggestion: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #f0f0f0",
  },
};

export default Header;