import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Create connection to the reducers
import { createUser } from '../../../actions';
 
// Import components 
import Header from '../../header/Header';
import CreateUserForm from './CreateUser';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div> 
                <Header />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <div>
                        <CreateUserForm 
                            createUserReducer={this.props.createUser} // create user reducer
                            createUserState={this.props.create_user} // create user state (check status)
                        />
                    </div>
                    <p>&nbsp;</p>
                    <p>Already have a user account?
                        <Link to="/sign-in"> Click here</Link> to sign in!
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({form, create_user}) {
    return {form, create_user};
}
 
export default {
    component: connect(mapStateToProps, {createUser})(Signup)
}
    