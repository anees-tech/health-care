import React from 'react';
import useAuth from '../hooks/useAuth';
import Service from './Service';

const Services = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-center mt-5 bottom_underline">Our Healthcare Service</h2>
            {
                // user.map(user => <Service user={user}></Service>)
            }
        </div>
    );
};

export default Services;