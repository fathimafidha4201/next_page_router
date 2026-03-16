import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../services/productServices";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProducts();

        if (Array.isArray(data)) {
          setProducts(data.slice(0, 3)); // Only 3 featured
        } else {
          setProducts([]);
        }
      } catch (err) {
        setError("Failed to load featured products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2 className="mb-4 fw-semibold">Featured Products</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center">
        <h2 className="mb-4 fw-semibold">Featured Products</h2>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2 className="mb-4 fw-semibold">Featured Products</h2>
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-semibold">Featured Products</h2>

      <div className="row g-4">
        {products.map((product: any) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}