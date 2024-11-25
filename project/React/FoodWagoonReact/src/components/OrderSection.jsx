import React from "react";

const OrderSection = ({ title, buttonText, backgroundClass }) => {
  return (
    <section className="py-0">
      <div className="bg-hold-2 w-100 h-100" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 py-7 text-center">
              {/* Dynamic Title */}
              <h1 className="fw-bold mb-4 text-white fs-3">
                {title || "Are you ready to order"}
                <br /> with the best deals?
              </h1>
              {/* Dynamic Button Text */}
              <a className="btn primry-color text-light m-4 fw-bold" href="#">
                {buttonText || "PROCEED TO ORDER"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right ms-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L11.293 8 5.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
