import React from 'react'
import HeroHeader from "../../Assets/images/hero-header.png"
import IconTab1 from "../../Assets/images/icon/Tab 1.png"
import IconTab2 from "../../Assets/images/icon/Tab 2.png"
import IconLocation from "../../Assets/images/location.png"

const HeroSection = () => {
  return (
    <div>
        <section className="py-lg-2 overflow-hidden bg-warning" id="home">
            <div className="container">
                <div className="row align-items-center g-lg-0">

                    <div className="col-md-5 col-lg-6   order-md-2 mb-lg-1 mb-md-0 text-center">
                        <a className="icon-link icon-link-hover" href="#" aria-hidden="true">

                            <img src={HeroHeader} alt="Hero Header Image"
                                className=" hover-scale la-header w-75 px-lg-5 img-fluid w-auto"/>
                        </a>
                    </div>

                    <div className="col-md-7 col-lg-6 order-md-1 py-3 py-md-0  text-center text-md-start">
                        <h1 className=" text-light display-4 fw-bolder p-lg-2 ">Are you starving?</h1>
                        <h1 className="fw-bold mb-lg-3  mb-md-5 fs-3 text-secondary fw-bold p-lg-2">Within a few clicks, find meals
                            that<br className=""/>are accessible near you</h1>
                        <div className="bg-light  p-lg-2 mb-sm-3 rounded-2   ">
                            <div className="">
                                <nav>
                                    <div className="nav nav-tabs  " id="nav-tab" role="tablist">
                                        <button class=" mb-lg-3 border-light" id="nav-home-tab"
                                            data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                                            aria-controls="nav-home" aria-selected="true">
                                            <img src={IconTab1} alt="Tab 1 Icon"
                                                className="img-fluid"/>
                                        </button>
                                        <button className="mx-lg-3 mx-sm-2 mx-md-2 mb-lg-3 mb " id="nav-profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-profile" type="button" role="tab"
                                            aria-controls="nav-profile" aria-selected="false">
                                            <img src={IconTab2} alt="Tab 2 Icon"
                                                className="img-fluid"/>
                                        </button>
                                    </div>
                                    <div className="tab-content mt-lg-2 mt-sm-2 " id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                            aria-labelledby="nav-home-tab">
                                            <form className="row  align-items-center hover-upward">
                                                <div className="col-12 row-cols-md-6 col-lg-9 mb-3 mb-md-0">
                                                    <div className=" input-group">
                                                        <div><a>
                                                                <i className="las la-map-marker fs-5 text-p-color"></i>
                                                            </a></div>
                                                        <div> <label className="visually-hidden"
                                                                for="inputDelivery">Address</label>
                                                            <input className=" border-0 px-2" id="" type="text"
                                                                src={IconLocation}
                                                                placeholder="Enter Your Address"/>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="d-grid gap-1 col-sm-auto">
                                                    <button className="btn primry-color text-light" type="submit">Find
                                                        Food</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </nav>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection