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
import { userAuth } from "../actions";
import NotFound from "../pages/subpages/NotFound/NotFound";

export default (ComposedComponent) => {
    class ProtectedRoute extends Component {
        render() {
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/forbidden" />
                break;
                case null:
                    <div>Loading...</div>
            
                default:
                    return <ComposedComponent {...this.props} />
            }
        }
    }

    function mapStateToProps({auth}){
        return {auth};
    }
    return connect(mapStateToProps, {userAuth})(ProtectedRoute);
};
