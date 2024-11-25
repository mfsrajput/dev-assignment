import React from 'react';


// Subcomponents for reuse
const ListColumn = ({ title, items }) => (
  <div className="col-6 col-md-4 col-lg-auto mb-3">
    <h5 className="lh-lg fw-bold text-light">{title}</h5>
    <ul className="list-unstyled mb-md-4 mb-lg-0">
      {items.map((item, index) => (
        <li className="lh-lg" key={index}>
          <a className="text-light text-decoration-none" href="#!">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const cityColumns = [
    ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
    ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
    ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
    ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
    ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"],
  ];

  const companyLinks = ["About Us", "Team", "Careers", "Blog"];
  const contactLinks = ["Help & Support", "Partner with us", "Ride with us"];
  const legalLinks = ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"];
  const socialIcons = [
    { icon: "twitter-x", href: "#!" },
    { icon: "facebook", href: "#!" },
    { icon: "instagram", href: "#!" },
  ];

  return (
    <section className="py-0 pt-7 bg-dark">
      <div className="container">
        <div className="row justify-content-lg-between">
          <h5 className="lh-lg fw-bold text-light">OUR TOP CITIES</h5>
          {cityColumns.map((cities, idx) => (
            <ListColumn key={idx} title="" items={cities} />
          ))}
        </div>

        <hr className="border border-light" />

        <div className="row">
          <ListColumn title="COMPANY" items={companyLinks} />
          <ListColumn title="CONTACT" items={contactLinks} />
          <ListColumn title="LEGAL" items={legalLinks} />
        </div>

        <hr className="border border-light" />

        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-4">
            <h5 className="lh-lg fw-bold text-light">FOLLOW US</h5>
            <div className="social-links">
              {socialIcons.map((social, index) => (
                <a href={social.href} className="me-2 text-light" key={index}>
                  <i className={`bi bi-${social.icon}`} style={{ fontSize: "1.5rem" }}></i>
                </a>
              ))}
            </div>

            <h3 className="text-light my-4">Receive exclusive offers and discounts in your mailbox</h3>
            <div className="row input-group mb-5">
              <div className="col-auto position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope position-absolute top-50 mx-2 translate-middle-y text-dark" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <input className="form-control input-box border-0 ps-5" type="email" placeholder="Enter Email" aria-label="email" />
              </div>
              <div className="col-auto">
                <button className="btn btn-warning" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border border-light" />

        <div className="row gx-0 pb-lg-3">
          <div className="col-md-6">
            <p className="text-light">All rights Reserved © Your Company, 2024</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light">
              Made with &nbsp;
              <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFB30E" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
              &nbsp; by <a className="text-light fw-bold text-decoration-none" href="https://themewagon.com/" target="_blank">MF-Rajput</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
