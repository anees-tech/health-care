import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import Service from './Service';
import './Services.css';

const Services = () => {
    const [ services ] = useServices();

    return (
        <div id="services" className="container mb-5">
            <h2 className="text-center mt-5 bottom_underline">Our Healthcare Service</h2>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {
                    services.map(user => <Service key={user.id} user={user}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;