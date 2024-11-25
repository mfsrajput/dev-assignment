import React from 'react';
import ImageSearchPizza from "../../Assets/images/search-pizza.png";
import ImageBurger from '../../Assets/images/burger.png';
import ImageNoodles from '../../Assets/images/noodles.png';
import ImageSubSandwich from '../../Assets/images/sub-sandwich.png';
import ImageChowmein from '../../Assets/images/chowmein.png';
import ImageSteak from '../../Assets/images/steak.png';

const foodItems = [
  {
    img: ImageSearchPizza,
    name: 'Pizza'
  },
  {
    img: ImageBurger,
    name: 'Burger'
  },
  {
    img: ImageNoodles,
    name: 'Noodles'
  },
  {
    img: ImageSubSandwich,
    name: 'Sub-sandwiches'
  },
  {
    img: ImageChowmein,
    name: 'Chowmein'
  },
  {
    img: ImageSteak,
    name: 'Steak'
  }
];

const FoodCarousel = () => {
  return (
    <section className="py-lg-5 overflow-hidden mt-lg-5 py-5">
      <div className="container">
        <div className="row flex-center mb-4">
          <div className="col-lg-7">
            <h5 className="fw-bolder fs-2 fs-lg-5 lh-sm text-center text-lg-start">Search by Food</h5>
          </div>
          <div className="col-lg-4 text-lg-end text-center">
            <a href="#" className="btn fw-bold">VIEW ALL</a>
            <a className="btn me-2" href="#carouselSearchByFood" role="img">
              <svg data-bs-target="#carouselSearchByFood" data-bs-slide="prev" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle primry-color rounded-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </a>
            <a className="btn" href="#carouselSearchByFood" role="img">
              <svg data-bs-target="#carouselSearchByFood" data-bs-slide="next" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle primry-color rounded-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12">
            <div className="carousel slide" id="carouselSearchByFood" data-bs-touch="false" data-bs-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="row h-100 align-items-center">
                    {foodItems.map((food, index) => (
                      <div key={index} className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card h-100 rounded-circle border-0">
                          <img className="img-fluid rounded-circle h-100" src={food.img} alt={food.name} />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">{food.name}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Repeat for other carousel items if necessary */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodCarousel;
