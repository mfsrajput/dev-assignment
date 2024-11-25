import React from "react";
import ImageLocation from "../../Assets/images/location.png";
import ImageOrder from "../../Assets/images/order.png";
import ImagePay from "../../Assets/images/pay.png";
import ImageMeals from "../../Assets/images/meals.png";

const steps = [
  {
    imgSrc: ImageLocation,
    title: "Select location",
    description: "Choose the location where your food will be delivered.",
    alt: "Location",
  },
  {
    imgSrc: ImageOrder,
    title: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food.",
    alt: "Order",
  },
  {
    imgSrc: ImagePay,
    title: "Pay advanced",
    description: "It's quick, safe, and simple. Select several methods of payment.",
    alt: "Pay",
  },
  {
    imgSrc: ImageMeals,
    title: "Enjoy meals",
    description: "Food is made and delivered directly to your home.",
    alt: "Meals",
  },
];

const HowDoesItWork = () => {
  return (
    <section className="py-0 bg-primary-gradient">
      <div className="container">
        <div className="row justify-content-center g-0">
          <div className="col-xl-9">
            <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
              <h5 className="fw-bold text-p-color fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
            </div>
            <div className="row">
              {steps.map((step, index) => (
                <div key={index} className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center">
                    <img className="shadow-icon border-white" src={step.imgSrc} height="112" alt={step.alt} />
                    <h5 className="mt-4 fw-bold">{step.title}</h5>
                    <p className="mb-md-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
