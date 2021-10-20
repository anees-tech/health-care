import React from 'react';


import doc1 from "../../images/aboutus/doc1.jpg"
import doc2 from "../../images/aboutus/doc2.jpg"
import doc3 from "../../images/aboutus/doc3.jpg"


const Doctor = () => {
    return (
        <div id="doctors" className="container mt-5 mb-5">
            <div className="mt-5 mb-5">
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

export default Doctor;