import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DynamicCards from "../components/DynamicCards";
import HowDoesItWork from "../components/HowDoesItWork";
import PopularItems from "../components/PopularItems";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import FoodCarousel from "../components/FoodCarousel";
import FeaturesApp from "../components/FeaturesApp";
import CardSection from "../components/CardSection";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

import "../../Assets/Css/bootstrap.min.css"
import "../../Assets/Css/responsive.css"
import "../../Assets/Css/line-awesome.min.css"
import "../../Assets/Css/style.css"


function Home() {
  return (
    <>
     
      <div>
        <NavBar />
        <HeroSection />
        <DynamicCards />
        <HowDoesItWork />
        <PopularItems />
        <FeaturedRestaurants />
        <FoodCarousel />
        <FeaturesApp />
        <CardSection />
        <OrderSection />
        <Footer />

      </div>
    </>
  );
}

export default Home;