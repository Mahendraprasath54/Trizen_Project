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
          className="product-card"
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
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

          <h3 style={{ marginTop: "10px", fontSize: "16px", color: "#333" }}>
            {product.name}
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#2874f0", margin: "8px 0" }}>
            ₹ {product.price}
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            ⭐ {product.rating}
          </p>
        </div>
      ))}

      <style>{`
        .product-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default ProductsGrid;