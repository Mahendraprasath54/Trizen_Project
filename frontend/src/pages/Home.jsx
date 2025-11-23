import { useEffect, useState } from "react";
import API from "../api";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductsGrid from "../components/ProductsGrid";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [category, setCategory] = useState("");

  // ⭐ NEW: Search state added
  const [search, setSearch] = useState("");

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

  const handleCategoryChange = (selected) => {
    setCategory(selected);

    if (selected === "") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === selected));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* ⭐ Pass search + setSearch + products */}
      <Header 
        search={search}
        setSearch={setSearch}
        products={products}
      />

      <Hero />
      
      <Filters 
        category={category}
        setCategory={handleCategoryChange}
        categories={categories}
      />

      <ProductsGrid products={filtered} />
    </>
  );
};

export default Home;
