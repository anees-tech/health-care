import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not_found">
            <div>
                <i class="far fa-frown"></i>
                <h1>4O4</h1>
                <h2>Page not found</h2>
                <p>The Page you are looking for doesn't exist or another arror occurred.</p>
                <Link to="/home"><i class="fas fa-long-arrow-alt-left"></i>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;