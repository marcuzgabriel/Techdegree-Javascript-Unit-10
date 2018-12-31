/**
 * Grunden til at denne komponent har et lille forbogstav er at den
 * exporterer en funktion. 
 * 
 * Det som funtionen gør, er at den tjekker om brugeren er authenticated. Hvis vedkommende er det,
 * bliver child component renderet, med de props komponenten har. Elleres redirected brugeren til root. 
 */
import React, { Component } from 'react'; 
import { connect } from "react-redux";
import { Route } from 'react-router';
import { Redirect, withRouter } from "react-router-dom";
import NotFound from "../pages/subpages/NotFound/NotFound";
import {
    Loader 
} from '../../../public/css/Global';
export default (ComposedComponent) => {
    class ProtectedRoute extends Component {
        render() {
            console.log(this.props.auth);
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
