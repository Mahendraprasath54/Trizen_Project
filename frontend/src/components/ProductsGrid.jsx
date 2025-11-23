import React from "react";

const ProductsGrid = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}
    >
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "0.2s",
            cursor: "pointer"
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />

          <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
          <p>₹ {product.price}</p>
          <p>⭐ {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
