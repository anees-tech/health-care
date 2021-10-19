import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    console.log("sr--", services);


    return (
        <div>
            <h2>Service details:-- {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;