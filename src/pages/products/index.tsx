import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProducts, Product } from "../../services/productServices";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts =
    filter === "cheap"
      ? products.filter((p) => p.price <= 100)
      : filter === "expensive"
      ? products.filter((p) => p.price > 100)
      : products;

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h4>Loading products...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center text-danger">
        <h4>{error}</h4>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center fw-semibold mb-4">Our Products</h1>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <button
          className={`btn ${
            filter === "all" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`btn ${
            filter === "cheap" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("cheap")}
        >
          Cheap (&lt; $100)
        </button>

        <button
          className={`btn ${
            filter === "expensive" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter("expensive")}
        >
          Expensive (&gt; $100)
        </button>
      </div>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}