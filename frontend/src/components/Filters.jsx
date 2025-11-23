import React from "react";

const Filters = ({ category, setCategory, categories }) => {
  return (
    <div style={styles.filterBox}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.select}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  filterBox: {
    margin: "20px 0",
  },
  select: {
    padding: "10px",
    width: "200px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
};

export default Filters;
