import React from "react";

const DiscountSection = ({ cards }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row h-100 gx-2 mt-7">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4"
            >
              <div className="card card-span h-100 border-light">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-3 w-100"
                    src={card.imgSrc}
                    alt={card.alt || "Discount Item"}
                  />
                  <div className="bg-warning px-4 for-radius position-absolute bottom-0">
                    <div className="d-flex">
                      <div className="text-white fs-1 fw-bolder mb-2 align-items-center">
                        {card.discount}
                      </div>
                      <div className="text-white fw-normal fs-5 d-flex flex-column mt-2 align-items-center">
                        <span>%</span>
                        <span className="adjustment-span">Off</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="fw-bold fs-6 text-1000 text-truncate">
                    {card.title}
                  </h5>
                  <span className="badge p-background py-2 px-3">
                    <span className="fs-6 text-p-color">{card.remaining}</span>
                  </span>
                </div>
                <a className="stretched-link" href={card.link}></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
