import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 shadow-sm"
      style={{
        background: "#000",
        height: "70px",
      }}
    >
      <div className="container-fluid">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center fw-semibold fs-4"
        >
          <img
            src="/logo.png"   
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ objectFit: "contain" }}
          />
          My Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-4">

            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/products" className="nav-link text-white">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
           <li className="nav-item position-relative">
            <Link
              href="/cart"
              className="nav-link position-relative d-flex align-items-center"
            >
            <img
              src="/cart-icon.png"
              alt="Cart"
              width="24"
              height="24"
              style={{ objectFit: "contain" }}
            />

            {totalItems >=0 && (
              <span
                className="position-absolute"
                style={{
                  top: "-6px",
                  right: "-10px",
                  background: "#ff3b3b",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "11px",
                  padding: "3px 6px",
                  fontWeight: "600",
                }}
              >
                {totalItems}
              </span>
            )}
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}