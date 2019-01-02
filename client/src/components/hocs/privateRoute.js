/* Readme
This HOC will look for an authentication. If there user is authenticated then nothing will happend.
If a user is not authenticated, then the user will be redirect to a forbidden page which tells the user
that a signin is needed. */

import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Loader 
} from '../../../public/css/Global';
export default (ComposedComponent) => {
    class ProtectedRoute extends Component {
        render() {
           
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/forbidden" />
                break;
                case null:
                    return <div className="loaderDiv"><p>Loading...</p><Loader/></div>
                default:
                    return <ComposedComponent {...this.props} />
            }
        }
    }

    function mapStateToProps({auth}){
        return {auth};
    }
    return connect(mapStateToProps)(ProtectedRoute);
};
