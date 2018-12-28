import React from 'react';
import Header from '../../header/Header';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="bounds">
                <h1>Not Found</h1>
                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
        </div>
    );
}
 
export default {
    component: NotFound
}