import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { addToCart } = useCart();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");   // ✅ redirect after adding
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h4>Loading product...</h4>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h4>Product not found</h4>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0 rounded-4 p-4">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bg-light rounded-4 p-5 text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="col-md-6">
            <h1 className="fw-semibold mb-3">
              {product.title}
            </h1>

            <h2 className="text-success fw-bold mb-3">
              $ {product.price}
            </h2>

            <p className="text-muted mb-3">
              ⭐ {product.rating} | Brand: {product.brand}
            </p>

            <p className="text-secondary">
              {product.description}
            </p>

            <div className="mt-4">
              <button
                className="btn btn-warning px-4 py-2 fw-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}