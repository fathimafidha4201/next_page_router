import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function CartPage() {
  const { 
    cart, 
    removeFromCart, 
    increaseQty, 
    decreaseQty, 
    clearCart   
  } = useCart();

  const router = useRouter();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();       
    router.push("/");  
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-semibold">My Cart</h2>

      <div className="row">
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <div className="alert alert-info">
              Your cart is empty 🛒
            </div>
          ) : (
            cart.map((item: any) => (
              <div
                key={item.id}
                className="border rounded-4 p-4 mb-4 bg-white shadow-sm"
              >
                <div className="d-flex justify-content-between align-items-center">
                  
                  <div className="d-flex align-items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      width={100}
                      style={{ objectFit: "contain" }}
                    />

                    <div className="ms-4">
                      <h6 className="fw-semibold mb-2">
                        {item.title}
                      </h6>

                      <p className="mb-2">
                        $ {item.price}
                      </p>

                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </button>

                        <span className="fw-semibold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-danger btn-sm px-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-lg-4">
          <div className="border rounded-4 p-4 bg-white shadow-sm">
            <h4 className="mb-3 fw-semibold">
              Order Summary
            </h4>

            <p className="mb-2">
              Total Items: {totalItems}
            </p>

            <h5 className="fw-bold mb-4">
              Total Price: $ {totalPrice.toFixed(2)}
            </h5>

            <button
              className="btn btn-warning w-100 fw-semibold"
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}