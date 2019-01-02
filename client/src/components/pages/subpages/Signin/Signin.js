import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../actions';
import { connect } from 'react-redux';

// import components
import SigninForm from './SigninForm';

class Signin extends Component {
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
                        <SigninForm 
                            loginUserReducer={this.props.loginUser} // Signin user reducer
                            loginUserState={this.props.login} // Check the user state
                            getUserAuth={this.props.userAuth}
                            auth={this.props.auth}
                        />
                    </div>
                    <p>&nbsp;</p>
                    <p>Don't have a user account?
                         <Link to="/sign-up"> Click here</Link> to sign up!
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
    component: connect(mapStateToProps, { loginUser })(Signin)
}