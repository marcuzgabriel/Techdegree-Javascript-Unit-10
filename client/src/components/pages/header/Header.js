/* Readme
TeamTreeHouse wants a logout route but this can actully be avoided with 
react-redux. Rather than making extra code and a route then I call the 
logoutUser reducer and runs it when a click happends. */


import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

// Import styles
import {
    Error
} from '../subpages/Signup/styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Static states through the app used for handling data
            isLoading: false,
            isErrror: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    // Logout button
    logoutBtn(e) {
        e.preventDefault();

        // Initialise the logout request reducer
        const { logoutUser } = this.props;
        logoutUser();

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    // Reset states - used for handling data
    resetStates() {
        this.setState({
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        });
    }

    // Handle logout request
    handleRequest(req) {
        switch(req.data.status) {
            case (201): // Success 
                this.setState({
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    statusMsg: req.data.message
                });
                setTimeout(() => {
                    this.resetStates();
                    this.props.history.push("/signin");
                }, 2000);
            break;
            case (205): // Loading
            break;
            case (404): // We have an error
                this.setState({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    statusMsg: req.data.message
                });

                setTimeout(() => {
                    this.resetStates(); // You need to reset the states 
                }, 2000);
            break;
            case (500): // We have an internal error
                this.props.history.push("/error");
            break;
            default: // If we have any other error which is not defined
                this.props.history.push("/error");
        }
    }

    /////////////////////////
    // COMPONENT LIFECYCLE //
    /////////////////////////

    componentDidUpdate(prevProps, prevState) {
        
        // Run the handleRequest function each time the component updates
        const { logout } = this.props;
        if (logout && this.state.isLoading) {
            this.handleRequest(logout);
        }
    }

    render() { 

        return ( 
            <div className="header">
                <div className="bounds">
                <Link title="Welcome" to="/">
                    <h1 className="header--logo">Courses</h1>
                </Link>
                <nav>
                    {this.props.auth ? <span className="user--login">{`Welcome ${this.props.auth.firstName} ${this.props.auth.lastName} `}</span> : <Link title="Sign up" to="/signup" >Sign Up</Link> }
                    {this.props.auth ? <span className="user--login" onClick={this.logoutBtn.bind(this)}>Sign out</span> : <Link title="Sign in" to="/signin" >Sign In</Link> }
                    {this.state.isError ? <Error>{this.state.statusMsg}</Error> : null}
                    {this.state.isSuccess ? <Error>{this.state.statusMsg}</Error> : null} 
                </nav>
                </div>
          </div>
        );
    }
}
 
// Get your props from the reducer
function mapStateToProps({auth, logout, signin}) {
    return { auth, logout, signin };
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));