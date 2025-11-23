import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductsGrid from "../components/ProductsGrid";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  // Fetch All Products
  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products);
      setFiltered(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const categories = [...new Set(products.map((p) => p.category))];

  // CATEGORY FILTER
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // 🔥 SEARCH + CATEGORY FILTER COMBINED
  useEffect(() => {
    let updated = [...products];

    // Apply Category Filter
    if (category) {
      updated = updated.filter((p) => p.category === category);
    }

    // Apply Search Filter
    if (search.trim()) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(updated);
  }, [search, category, products]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home-container">

      <div className="home-header">
        <Header
          search={search}
          setSearch={setSearch}
          products={products}
        />
      </div>

      <div className="home-hero">
        <Hero />
      </div>

      <div className="home-content">
        <div className="home-filters-section">
          <Filters
            category={category}
            setCategory={handleCategoryChange}
            categories={categories}
          />
        </div>

        <div className="home-products-section">
          <div className="home-results-header">
            <h2 className="home-results-title">
              {category ? category : "All Products"}
            </h2>
            <p className="home-results-count">
              Showing {filtered.length}{" "}
              {filtered.length === 1 ? "result" : "results"}
            </p>
          </div>

          <ProductsGrid products={filtered} />
        </div>
      </div>

      <footer className="home-footer">
        <div className="home-footer-content">
          <div className="home-footer-grid">
            <div className="home-footer-column">
              <h3>About</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h3>Help</h3>
              <ul>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h3>Policy</h3>
              <ul>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h3>Social</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="home-footer-bottom">
            © 2024 ShopHub. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
