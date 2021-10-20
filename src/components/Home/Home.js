import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Doctor from '../Doctor/Doctor';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div id="home">
            <Slider></Slider>
            <Services></Services>
            <Doctor></Doctor>
        </div>
    );
};

export default Home;