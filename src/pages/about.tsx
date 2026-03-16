import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(90deg, #000000, #1f2937)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">About Us</h1>
          <p className="lead mt-3">
            Learn more about who we are and what we offer
          </p>
        </div>
      </section>
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              My Ecommerce is an online shopping platform committed to bringing
              quality products at affordable prices. We carefully select items
              across multiple categories to ensure value, reliability, and
              customer satisfaction.
            </p>

            <p className="text-muted">
              Our goal is to make online shopping simple, secure, and enjoyable
              for everyone.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/about.jpg"
              alt="About"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: "400px" }}
            />
          </div>

        </div>
      </section>
      <section className="container my-5">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p className="text-muted mb-0">
                To provide customers with high-quality products, competitive
                prices, and a seamless online shopping experience.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h4 className="fw-bold mb-3">Our Vision</h4>
              <p className="text-muted mb-0">
                To become a trusted e-commerce destination known for reliability,
                innovation, and excellent customer service.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className="container my-5 text-center">
        <h2 className="fw-bold mb-5">Why Choose Us</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div
              className="text-white p-4 rounded-4 shadow"
              style={{
                background:
                  "linear-gradient(90deg, #1f2937, #111827)",
              }}
            >
              <h5 className="fw-bold">Quality Products</h5>
              <p className="mt-3 mb-0">
                We source products that meet quality standards and customer expectations.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-white p-4 rounded-4 shadow"
              style={{
                background:
                  "linear-gradient(90deg, #1f2937, #111827)",
              }}
            >
              <h5 className="fw-bold">Secure Payments</h5>
              <p className="mt-3 mb-0">
                Your transactions are protected with trusted and secure payment methods.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-white p-4 rounded-4 shadow"
              style={{
                background:
                  "linear-gradient(90deg, #1f2937, #111827)",
              }}
            >
              <h5 className="fw-bold">Customer Support</h5>
              <p className="mt-3 mb-0">
                Our support team is always ready to assist you with queries and concerns.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}