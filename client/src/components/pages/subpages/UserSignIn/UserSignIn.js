import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../actions';
import { connect } from 'react-redux';

// import components
import UserSignInForm from './UserSignInForm';

class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }    
    
    render() { 
        return ( 
            <div>
                <div className="bounds">
                    <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                    <div>
                        <UserSignInForm
                            loginUserReducer={this.props.userLogin} // Signin user reducer
                            loginUserState={this.props.login} // Check the user state
                            getUserAuth={this.props.userAuth}
                            auth={this.props.auth}
                        />
                    </div>
                    <p>&nbsp;</p>
                    <p>Don't have a user account?
                         <Link to="/signup"> Click here</Link> to sign up!
                    </p>
                    </div>
                </div>
            </div>

        );
    }
}
 
function mapStateToProps({auth, logout, login}) {
    return { 
        auth, 
        logout,
        login
    };
}

export default {
    component: connect(mapStateToProps, { userLogin })(UserSignIn)
}