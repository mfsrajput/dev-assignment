import React from 'react';
import FoodWorld from "../../Assets/images/food-world.png";
import FoodWorldLogo from "../../Assets/images/food-world-logo.png";
import PizzaHub from "../../Assets/images/pizza-hub.png";
import PizzaHubLogo from "../../Assets/images/pizzahub-logo.png";
import DonutHut1 from "../../Assets/images/donutshut2.png";
import DonutHutLogo1 from "../../Assets/images/donutshutlogo2.png";
import DonutHut2 from "../../Assets/images/donuthut1.png";
import DonutHutLogo2 from "../../Assets/images/donuthutlogo1.png";
import ImageRubyTuesday from "../../Assets/images/ruby-tuesday.png";
import ImageRubyTuesdayLogo from "../../Assets/images/ruby-tuesday-logo.png";
import ImageKuakata from "../../Assets/images/kuakata.png";
import ImageKuakataLogo from "../../Assets/images/kuakata-logo.png";
import ImageRedSquare from "../../Assets/images/red-square.png";
import ImageRedSquareLogo from "../../Assets/images/red-square-logo.png";
import ImageTacoBell from "../../Assets/images/taco-bell.png";
import ImageTacoBellLogo from "../../Assets/images/taco-bell-logo.png";




// Sample data (You can fetch this from an API or define it statically)
const restaurants = [
  {
    id: 1,
    name: 'Food World',
    image: FoodWorld,
    logo: FoodWorldLogo,
    discount: '20% off',
    rating: 46,
    status: 'Opens Tomorrow',
    badge: 'Fast',
  },
  {
    id: 2,
    name: 'Pizza Hub',
    image: PizzaHub,
    logo: PizzaHubLogo,
    discount: '10% off',
    rating: 40,
    status: 'Opens Tomorrow',
    badge: 'Fast',
  },
  {
    id: 3,
    name: 'Donuts Hut',
    image: DonutHut1,
    logo: DonutHutLogo1,
    discount: '15% off',
    rating: 20,
    status: 'Opens Now',
    badge: 'Fast',
  },
  {
    id: 4,
    name: 'Donuts Hut',
    image: DonutHut2,
    logo: DonutHutLogo2,
    discount: '15% off',
    rating: 50,
    status: 'Opens Now',
    badge: 'Fast',
  },
  {
    id: 5,
    name: 'Ruby tuesday',
    image: ImageRubyTuesday,
    logo: ImageRubyTuesdayLogo,
    discount: '10% off',
    rating: 46,
    status: 'Opens Now',
    badge: 'Fast',
  },
  {
    id: 6,
    name: 'Kuakata Fried Chicken',
    image: ImageKuakata,
    logo: ImageKuakataLogo,
    discount: '10% off',
    rating: 40,
    status: 'Opens Now',
    badge: 'Fast',
  },
  {
    id: 7,
    name: 'Red Square',
    image: ImageRedSquare,
    logo: ImageRedSquareLogo,
    discount: '15% off',
    rating: 20,
    status: 'Opens Now',
    badge: 'Fast',
  },
  {
    id: 8,
    name: 'Taco Bell',
    image: ImageTacoBell,
    logo: ImageTacoBellLogo,
    discount: '15% off',
    rating: 50,
    status: 'Opens Now',
    badge: 'Fast',
  },
];

const FeaturedRestaurants = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center mb-4">
            <h5 className="fw-bolder fs-2 fs-lg-5 lh-sm mb-3">Featured Restaurants</h5>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-4 gy-5">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="col mb-4">
              <div className="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
                <img className="card-img-top rounded-3" src={restaurant.image} alt={restaurant.name} />
                <div className="card-img-overlay ps-0">
                  <span className="badge primry-color p-2 ms-3">
                    <img className="position-absolute icon-move-down mt-xxl-3 icon-move" src={restaurant.logo} alt={`${restaurant.name} logo`} />
                    <span className="fs-6">{restaurant.discount}</span>
                    <span className="fs-0 bg-warning rounded-3 ms-2 p-2 move-left">
                      <i className="las la-tachometer-alt fs-6"></i> {restaurant.badge}
                    </span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex flex-column">
                    <span className="need-extra-padding-left">
                      <h5 className="m-sm-0 fw-bold text-dark">{restaurant.name}</h5>
                      <span className="mb-0 text-warning">
                        <i className="las la-star"></i> {restaurant.rating}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-between ">
                <span className="badge p-background p-2">
                  <span className="fw-bold fs-5 text-p-color">{restaurant.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
