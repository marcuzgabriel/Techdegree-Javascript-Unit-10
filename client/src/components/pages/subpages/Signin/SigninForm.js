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

    
    submitForm ( props ) {
        /* In order to get a natural flow you need to use the async. When using the async
        then we wait for the signinReducer to be finished before we initialize the get Auth.
        This ensures that when we call upon the get auth prop, then its rendered correctly. */

        const {  loginUserReducer } = this.props;
        loginUserReducer(props); // A reducer that calls the API and checks if there is a user

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    resetStates() {
        this.setState({
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        });
    }

    handleRequest(req) {
        switch(req.data.status) {
            case (200): // Success 
                this.setState({
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    statusMsg: req.data.message
                });
                setTimeout(() => {
                    this.resetStates();
                    this.props.history.push("/");
                }, 2000);
            break;
            case (205): // Loading
                console.log("Loading...");
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
        
        const { loginUserState } = this.props;
        if (loginUserState && this.state.isLoading) {
            this.handleRequest(loginUserState);
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