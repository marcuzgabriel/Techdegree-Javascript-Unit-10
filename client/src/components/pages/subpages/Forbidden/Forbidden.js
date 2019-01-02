import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden = () => {
    return (
        <div>
            <div className="bounds">
                <h1>Forbidden</h1>
                <p>Oh oh! You can't access this page. Please <Link to="/signin">sign in.</Link></p>
            </div>
        </div>
    );
}
 
export default {
    component: Forbidden
}