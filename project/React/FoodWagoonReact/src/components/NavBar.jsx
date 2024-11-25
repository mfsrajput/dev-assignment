import React from 'react'
import NavLogo from "../../Assets/images/Top-Nav/Logo.png";

const NavBar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container ">
                <a className="navbar-brand " href="#">
                    <img src={NavLogo} alt="Food Wagon Logo" className="img-fluid "/>
                </a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link active" aria-current="page">Deliver to:
                                <span className=""><i className="las la-map-marker fs-5 text-p-color"></i></span>
                                <span className="fw-normal">Current Location</span>
                                <span>Mirpur 1 Bus Stand, Dhaka</span>
                            </p>
                        </li>
                        <li className="nav-item">
                            <input className=" me-2 col-lg-10 form-control border-light  bg-1" type="search"
                                placeholder="Search" aria-label="Search"/>
                        </li>
                        <li className="mx-2  ">
                            <button className=" text-p-color  form-control border-light " type="submit">
                                <i className="las la-user "></i>Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar