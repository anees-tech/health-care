import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

import slider1 from "../../images/s1.jpg";
import slider2 from "../../images/s3.jpg";
import slider3 from "../../images/s5.jpg";

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="slider_text">
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="slider_text">
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="slider_text">
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
