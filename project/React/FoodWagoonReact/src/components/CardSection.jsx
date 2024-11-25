import React from "react";
import ImageCrispySandwiches from "../../Assets/images/crispy-sandwiches.png";
import ImageFriedChicken from "../../Assets/images/fried-chicken.png";
import ImagePizza from "../../Assets/images/pizza.png";

// Sample data for cards
const cardData = [
  {
    imgSrc: ImageCrispySandwiches,
    title: "Best deals Crispy Sandwiches",
    description: "Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.",
    buttonText: "PROCEED TO ORDER",
  },
  {
    imgSrc: ImageFriedChicken,
    title: "Celebrate parties with Fried Chicken",
    description: "Get the best fried chicken smeared with a lip-smacking lemon chili flavor. Check out best deals for fried chicken.",
    buttonText: "PROCEED TO ORDER",
  },
  {
    imgSrc: ImagePizza,
    title: "Wanna eat hot & spicy Pizza?",
    description: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    buttonText: "PROCEED TO ORDER",
  },
];

// Reusable Card component
const Card = ({ imgSrc, title, description, buttonText, isImageRight }) => {
  return (
    <div className="card mb-3 shadow-lg">
      <div className="row g-0 align-items-center">
        {/* Conditionally render image on the right or left */}
        {isImageRight ? (
          <>
            {/* Text Section First */}
            <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
              <h1 className="card-title mt-xl-5 mb-lg-2 fw-bold">
                {title.split(" ")[0]} <span className="text-warning">{title.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="fs-6">{description}</p>
              <div className="d-grid">
                <a
                  href="#!"
                  className="btn btn-lg bg-warning text-light mt-xxl-0 fs-6 fw-bold m-lg-4"
                >
                  {buttonText}
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
            {/* Image Section Second */}
            <div className="col-md-5 col-xl-7 col-xxl-8">
              <img
                src={imgSrc}
                className="img-fluid w-100 h-100 object-fit-lg-cover rounded-top rounded-md-end rounded-md-top-0"
                alt={title}
              />
            </div>
          </>
        ) : (
          <>
            {/* Image Section First */}
            <div className="col-md-5 col-xl-7 col-xxl-8">
              <img
                src={imgSrc}
                className="img-fluid w-100 h-100 object-fit-lg-cover rounded-top rounded-md-end rounded-md-top-0"
                alt={title}
              />
            </div>
            {/* Text Section Second */}
            <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
              <h1 className="card-title mt-xl-5 mb-lg-2 fw-bold">
                {title.split(" ")[0]} <span className="text-warning">{title.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="fs-6">{description}</p>
              <div className="d-grid">
                <a
                  href="#!"
                  className="btn btn-lg bg-warning text-light mt-xxl-0 fs-6 fw-bold m-lg-4"
                >
                  {buttonText}
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
          </>
        )}
      </div>
    </div>
  );
};

// Main Component
const CardSection = () => {
  return (
    <section className="py-lg-5">
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-12" key={index}>
              <Card
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                isImageRight={index % 2 === 0} // Alternate the image position
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
