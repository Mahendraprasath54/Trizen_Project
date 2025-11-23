import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
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

  // FILTER + SEARCH
  useEffect(() => {
    let updated = [...products];

    if (category) {
      updated = updated.filter((p) => p.category === category);
    }

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
        <Header search={search} setSearch={setSearch} products={products} />
      </div>

      <div className="home-hero">
        <Hero />
      </div>

      <div className="home-content">
        <div className="home-filters-section">
          <Filters 
            category={category}
            setCategory={setCategory}
            categories={categories}
          />
        </div>

        <div className="home-products-section">
          <div className="home-results-header">
            <h2 className="home-results-title">
              {category ? category : "All Products"}
            </h2>
            <p className="home-results-count">
              Showing {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </p>
          </div>

          <ProductsGrid products={filtered} />
        </div>
      </div>

      {/* Footer Component */}
      <Footer />

    </div>
  );
};

export default Home;
