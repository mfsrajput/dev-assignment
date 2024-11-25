import React from "react";
import DiscountSection from "../components/DiscountSection";
import DiscountImage1 from "../../Assets/images/discount-item-1.png";
import DiscountImage2 from "../../Assets/images/discount-item-2.png";
import DiscountImage3 from "../../Assets/images/discount-item-3.png";
import DiscountImage4 from "../../Assets/images/discount-item-4.png";

const DynamicCards = () => {
  const discountCards = [
    {
      imgSrc: DiscountImage1,
      discount: 15,
      title: "Greys Vage",
      remaining: "6 days Remaining",
      link: "#",
      alt: "Discount Item 1",
    },
    {
      imgSrc: DiscountImage2,
      discount: 10,
      title: "Greys Vage",
      remaining: "6 days Remaining",
      link: "#",
      alt: "Discount Item 2",
    },
    {
      imgSrc: DiscountImage3,
      discount: 25,
      title: "Greys Vage",
      remaining: "6 days Remaining",
      link: "#",
      alt: "Discount Item 3",
    },
    {
      imgSrc: DiscountImage4,
      discount: 20,
      title: "Greys Vage",
      remaining: "6 days Remaining",
      link: "#",
      alt: "Discount Item 4",
    },
  ];

  return (
    <div>
      <DiscountSection cards={discountCards} />
    </div>
  );
};

export default DynamicCards;
