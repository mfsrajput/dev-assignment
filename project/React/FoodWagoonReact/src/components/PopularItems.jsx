import React from "react";
import CheeseBurger from "../../Assets/images/cheese-burger.png";
import ToffeCake from "../../Assets/images/toffes-cake.png";
import Dancake from "../../Assets/images/dancake.png";
import CrispySandwitch from "../../Assets/images/crispy-sandwitch.png";
import ThaiSoup from "../../Assets/images/thai-soup.png";
import IconLocation from "../../Assets/images/location.png"


const items = [
  {
    imgSrc: CheeseBurger,
    title: "Cheese Burger",
    location: "Burger Arena",
    price: "$3.88",
  },
  {
    imgSrc: ToffeCake,
    title: "Toffe's Cake",
    location: "Top Sticks",
    price: "$4.00",
  },
  {
    imgSrc: Dancake,
    title: "Dancake",
    location: "Cake World",
    price: "$1.99",
  },
  {
    imgSrc: CrispySandwitch,
    title: "Crispy Sandwitch",
    location: "Fastfood Dine",
    price: "$3.00",
  },
  {
    imgSrc: ThaiSoup,
    title: "Thai Soup",
    location: "Foody Man",
    price: "$2.79",
  },
];

const PopularItems = () => {
  return (
    <section className="py-lg-5 overflow-hidden">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
            <h5 className="fw-bolder fs-2 fs-lg-5 lh-sm">Popular items</h5>
          </div>
          <div className="col-12">
            <div
              className="carousel slide p-2"
              id="carouselPopularItems"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="row gx-3 h-100 align-items-center">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="col-sm-6 col-md-4 col-xl mb-5 h-100"
                      >
                        <div>
                          <img
                            className="img-fluid rounded-4"
                            src={item.imgSrc}
                            alt={item.title}
                          />
                          <div className="ps-0">
                            <h5 className="fw-bold text-1000 mb-1">
                              {item.title}
                            </h5>
                            <div>
                              <div>
                                <a>
                                  <img
                                    className="logo-size"
                                    src={IconLocation}
                                    alt="Location"
                                  />
                                </a>
                              </div>
                              <span className="text-warning">{item.location}</span>
                            </div>
                            <span className="text-1000 fw-bold">{item.price}</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg primry-color text-light"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-control-prev carousel-control-prev-icon bg-warning hover-upward rounded-circle button-test"
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="prev"
                >
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next carousel-control-next-icon bg-warning hover-upward rounded-circle button-test"
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="next"
                >
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default PopularItems;
