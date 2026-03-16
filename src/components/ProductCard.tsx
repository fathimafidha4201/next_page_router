import Link from "next/link";

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div
        className="d-flex justify-content-center align-items-center bg-light"
        style={{ height: "220px" }}
      >
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          style={{
            maxHeight: "180px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="card-body text-center">
        <h6 className="fw-semibold">
          {product.title.length > 40
            ? product.title.substring(0, 40) + "..."
            : product.title}
        </h6>

        <p className="fw-bold fs-5 mb-3">
          $ {product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="btn btn-dark btn-sm px-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}