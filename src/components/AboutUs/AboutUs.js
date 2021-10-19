import React from "react";


import aboutTop from "../../images/aboutus/about-top.jpg";
import about1 from "../../images/aboutus/about1.png"
import doc1 from "../../images/aboutus/doc1.jpg"
import doc2 from "../../images/aboutus/doc2.jpg"
import doc3 from "../../images/aboutus/doc3.jpg"
import doc4 from "../../images/aboutus/doc4.jpg"

const AboutUs = () => {
    return (
        <div className="container">
            <img className="img-fluid mb-5" src={aboutTop} alt="" />
            <div className="d-flex justify-content-center row">

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                    <img className="img-fluid me-3" src={about1} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <h4>
                        Praesent massa orci, condimen vitae mattis quis, imperdiet
                        non massa.
                    </h4>
                    <p>
                        Health care in the United States is provided by many
                        distinct organizations, made up of insurance companies,
                        healthcare providers, hospital systems, and independent
                        providers. ... Healthcare coverage is provided through a
                        combination of private health insurance
                    </p>
                </div>

            </div>

            <div className="mt-5">
                <h2 className="bottom_underline text-center mb-4">Our Doctor Team</h2>
                <div>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={doc1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr Johnathan Treat</h5>
                                    <p className="card-text">
                                        Healthcare coverage is provided through a combination of private health insurance
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={doc2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Edwin Spindrift</h5>
                                    <p className="card-text">
                                        Healthcare coverage is provided through a combination of private health insurance
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={doc3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr Johnathan Treat</h5>
                                    <p className="card-text">
                                        Healthcare coverage is provided through a combination of private health insurance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
