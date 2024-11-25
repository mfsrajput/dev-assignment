import React from 'react';
import ImagePhoe from "../../Assets/images/phone-cta-one.png";
import ImagePlayStore from "../../Assets/images/google-play.svg"
import ImageAppStore from "../../Assets/images/app-store.svg";
import ImageDiscount from "../../Assets/images/icon/discounts.png";
import ImageLiveTracking from "../../Assets/images/icon/live-tracking.png";
import ImageQuickDelivery from "../../Assets/images/icon/quick-delivery.png";

// Sample data for dynamic content
const features = [
  {
    id: 1,
    icon: ImageDiscount,
    alt: 'Discounts',
    title: 'Daily Discounts',
  },
  {
    id: 2,
    icon: ImageLiveTracking,
    alt: 'Live Tracking',
    title: 'Live Tracking',
  },
  {
    id: 3,
    icon: ImageQuickDelivery,
    alt: 'Quick Delivery',
    title: 'Quick Delivery',
  },
];

const FeaturesApp = () => {
  return (
    <section>
      <div className="bg-holder pt-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="card card-span shadow-warning rounded-3">
                <div className="card-body py-5">
                  <div className="row justify-content-evenly">
                    {features.map((feature) => (
                      <div key={feature.id} className="col-md-3 hr-vertical">
                        <div className="d-flex flex-md-column flex-xl-row justify-content-evenly justify-content-lg-between align-items-center">
                          <img src={feature.icon} width="100" alt={feature.alt} />
                          <h2 className="fw-bolder text-1000 mb-0 text-gradient">{feature.title}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-center mt-md-8">
            <div className="col-lg-5 d-none d-lg-block mb-0">
              <img className="w-100" src={ImagePhoe} alt="App Image" />
            </div>
            <div className="col-lg-5">
              <h1 className="text-p-color">Install the app</h1>
              <p>It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
              <a className="pe-2" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={ImageAppStore} width="160" alt="Download from App Store" />
              </a>
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                <img src={ImagePlayStore} width="160" alt="Download from Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesApp;
