import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { withRouter } from "react-router-dom";
import { signinUser } from '../../../actions';
import { connect } from 'react-redux';

import {
    ErrorContainer,
    InputField,
    Error,
    Success
} from '../UserSignUp/styles';

class UserSignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Static states when handling data
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    // RenderFields is a redux-form appraoach which is neccesary.
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

    // Submit form and run the reducer    
    submitForm (props) {

        const {  loginUserReducer } = this.props;
        loginUserReducer(props);
        //loginUserReducer.login(props); // A reducer that calls the API and checks if there is a user

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    // Reset states is used for the handlerequest
    resetStates() {
        this.setState({
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        });
    }

    // This function handles the data correctly
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

    // This ensures correct datahandling everytime data is updated
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

// Redux form validation
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
    form: 'UserSignInForm',
    validate
})(withRouter(UserSignInForm));