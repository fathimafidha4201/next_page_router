export default function ContactPage() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-white p-5 rounded-4 shadow-sm h-100">
            <h2 className="fw-bold mb-3">Get in Touch</h2>

            <p className="text-muted">
              Have questions or need support? Reach out to us using the details below.
            </p>

            <hr className="my-4" />

            <p><strong>Email:</strong><br />support@myecommerce.com</p>

            <p><strong>Phone:</strong><br />+91 1234567890</p>

            <p>
              <strong>Address:</strong><br />
              My Ecommerce Pvt Ltd<br />
              Kerala, India
            </p>

            <p className="text-muted mt-4">
              Support available Monday – Saturday, 9 AM – 6 PM
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="p-5 rounded-4 shadow h-100 text-white"
            style={{ background: "#000" }}
          >
            <h2 className="fw-bold text-center mb-4">
              Send Us a Message
            </h2>

            <form>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-light px-5 fw-semibold"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}