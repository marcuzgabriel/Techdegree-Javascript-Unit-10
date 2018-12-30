
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

// Import styles
import {
    Success,
    Error
} from '../subpages/Signup/styles';

/* Readme 
For the logout we need to initialize a logoutUser reducer. For that 
it is best to create a class component. Personally, I also like class
components more than stateless components when handling click events. */

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logoutBtn(e) {
        e.preventDefault();
        const { logoutUser } = this.props;
        logoutUser();

        // Wait 2 sec then redirect
        setTimeout(() => {
            this.props.history.push("/signin");
        }, 2000);
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
                    {this.props.logout ? <Error>{this.props.logout.message}</Error> : null }
                </nav>
                </div>
          </div>
        );
    }
}
 
function mapStateToProps({auth, logout, signin}) {
    return { auth, logout, signin };
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));