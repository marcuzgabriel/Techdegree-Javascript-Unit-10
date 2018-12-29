import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { withRouter } from "react-router-dom";
import { signinUser } from '../../../actions';
import { connect } from 'react-redux';

import {
    ErrorContainer,
    ErrorMessage,
    InputField,
    Error,
    Success
} from '../Signup/styles';

class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    renderFields({ input, meta: { touched, error }, ...otherProps}) {
        const hasError = touched && error !== undefined;

        // Different field components
        return (
            <div>
                {
                    input.name === "email" ? 
                        <InputField
                            error={hasError}
                            type="text"
                            placeholder={"Email address"}
                            {...input}
                        />
                    :
                    input.name === "password" ?
                        <InputField
                            error={hasError}
                            type="password"
                            placeholder={"Password"}
                            {...input}
                        />
                    : 
                ""}

                {/* Error handler */}
                {hasError &&
                    <ErrorContainer>
                        {error}
                    </ErrorContainer>
                }


            </div>
        )
    }

    
    submitForm = async ( props ) => {
        /* In order to get a natural flow you need to use the async. When using the async
        then we wait for the signinReducer to be finished before we initialize the get Auth.
        This ensures that when we call upon the get auth prop, then its rendered correctly. */

        const { signinUserReducer, getUserAuth } = this.props;
        await signinUserReducer(props); // A reducer that calls the API and checks if there is a user
        await getUserAuth(); // If there is a user then can get the auth property. 

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    /////////////////////////
    // COMPONENT LIFECYCLE //
    /////////////////////////



    componentDidUpdate(prevProps, prevState) {
        
        /* Handle result 
        Check if there is a create user state. If there is and it the status code is 
        anything but 200 then throw the error message else empty the states for success.
        If there is an error then we change the isError state to true and set it back
        to false after 2 seconds with a setTimeout window function. 
        */
        
        const { signinUserState } = this.props;

        /* If isLoading is true and the createUserState is not null state 
        then the user has pressed the submit button */
        if (signinUserState && this.state.isLoading) {

            if (signinUserState.status !== 200) {
                this.setState({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    statusMsg: signinUserState.message
                });

                /* Reset the states after 2 sec else it will not show any other errors
                as the isError state is set to true. It should be mentioned 
                that using setTimeout functions when rendering data is not recommended, but
                if we are here in the codes, then everything should be rendered and uploadet
                correctly. In this example the setTimeout function do not handle or interrupt
                any data sent or recieved from the database - it just handles the state. */
                
                setTimeout(() => {
                    this.setState({
                        isError: false,
                        statusMsg: ""
                    });
                }, 2000);

            } else {
                this.setState({
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    statusMsg: signinUserState.message
                });        
                
                /* It is very important that when pushing / redirecting to another
                route that the auth prop has been properly loadet. Else our HOC 
                (higher-order-component) will get confused. We dont want our HOC 
                to render the auth. We just want it to check if there is an auth or not. */
                if (this.props.auth) {
                    setTimeout(() => {
                        this.props.history.push("/");
                    }, 2000);
                }
            }
        }
    }


    render() { 

        const { handleSubmit } = this.props;

        return (
            <form id="signin-form" onSubmit={handleSubmit(props => this.submitForm(props))}>
                <Field name="email" component={this.renderFields} />
                <Field name="password" component={this.renderFields} />
                <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">{this.state.isLoading ? "Loading..." : "Sign In"}</button>
                    <Link title="Welcome" to="/" className="button button-secondary">Cancel</Link>
                </div>
                {this.state.isError ? <Error>{this.state.statusMsg}</Error> : null}
                {this.state.isSuccess ? <Success>{this.state.statusMsg}</Success> : null} 
            </form>
        );
    }
}

const validate = values => {
    const errors = {}

    // Email

    if (!values.emailAddress || values.emailAddress.trim() === '') {
        errors.emailAddress = 'Please fill in your email address'
    }

    // Check email format
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (!validateEmail(values.email)) {
        errors.email = 'Wrong email format'
    }

     // Password
     if (!values.password || values.password.trim() === '') {
        errors.password = 'Please fill in your password'
    }

    return errors;
}

export default reduxForm({
    form: 'signinUserForm',
    validate
})(withRouter(SigninForm));