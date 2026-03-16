export default function BannerCarousel() {
  return (
    <div className="container-fluid p-0">
      <div
        id="homeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/banner1.jpg"
              className="d-block w-100"
              alt="Banner 1"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/banner2.jpg"
              className="d-block w-100"
              alt="Banner 2"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/banner3.jpg"
              className="d-block w-100"
              alt="Banner 3"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}