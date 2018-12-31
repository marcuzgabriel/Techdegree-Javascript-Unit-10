import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signinUser } from '../../../actions';
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
                            signinUserReducer={this.props.signinUser} // Signin user reducer
                            signinUserState={this.props.signin} // Check the user state
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
 
function mapStateToProps({auth, logout, signin}) {
    return { auth, logout, signin };
}

export default {
    component: connect(mapStateToProps, { signinUser })(Signin)
}