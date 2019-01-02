import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';

// Local styles
import {
    ErrorContainer,
    ErrorMessage,
    InputField,
    Error,
    Success
} from './styles';
import { createUser } from '../../../actions';
import { create } from 'domain';

class UserSignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Static states used for handling data
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    // RenderFields is a redux form approach, which is neccesary
    renderFields({ input, meta: { touched, error }, ...otherProps}) {
        const hasError = touched && error !== undefined;

        // Different field components
        return (
            <div>
                
                { 
                    input.name === "firstName" ?
                        <InputField
                            error={hasError}
                            type="text"
                            placeholder={"First name"}
                            {...input}
                        />
                    :
                    input.name === "lastName" ? 
                        <InputField
                            error={hasError}
                            type="text"
                            placeholder={"Last name"}
                            {...input}
                        />
                    :
                    input.name === "emailAddress" ? 
                        <InputField 
                            error={hasError}
                            type="email"
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
                    input.name === "confirmPassword" ?
                        <InputField 
                            error={hasError}
                            type="password"
                            placeholder={"Repeat password"}
                            {...input}
                        />
                    : 
                "" }

                {/* Error handler */}
                {hasError &&
                    <ErrorContainer>
                        {error}
                    </ErrorContainer>
                }
                
            </div>
        )

    }    

    // Submit form and run the action
    submitForm(props) {

        const { createUserReducer } = this.props;
        createUserReducer(props);

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    // Reset data is used with the handleRequest
    resetStates() {
        this.setState({
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        });
    }

    // Handle data function
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

    // This ensures that everytime data is updated, then the handle data function runs
    componentDidUpdate(prevProps, prevState) {
        
        const { createUserState } = this.props;
        if (createUserState && this.state.isLoading) {
            this.handleRequest(createUserState);
        }
    }

    render() {

        const { handleSubmit } = this.props;

        // If the state isSuccess then we want to reset all of the values in the form
        return (
            
            <form id="create_user_form" onSubmit={handleSubmit(props => this.submitForm(props))} >
                <Field name="firstName" component={this.renderFields} />
                <Field name="lastName" component={this.renderFields} />
                <Field name="emailAddress" component={this.renderFields} />
                <Field name="password" component={this.renderFields} />
                <Field name="confirmPassword" component={this.renderFields} />
                <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">{this.state.isLoading ? "Loading..." : "Sign up"}</button>
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

    // First name
    if (!values.firstName || values.firstName.trim() === '') {
        errors.firstName = 'Please fill in your firstname'
    }

    // Lastnae
    if (!values.lastName || values.lastName.trim() === '') {
        errors.lastName = 'Please fill in your lastname'
    }

    // Email

    if (!values.emailAddress || values.emailAddress.trim() === '') {
        errors.emailAddress = 'Please fill in your email address'
    }

    // Check email format
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (!validateEmail(values.emailAddress)) {
        errors.emailAddress = 'Wrong email format'
    }

    // Password
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Please fill in your password'
    }

    // If the passwords length is less than 3
    if (values.password && values.password.length <= 3) {
        errors.password = 'The length of your password should be more than 3 characters'
    }

    // Repeat password
    if (!values.confirmPassword || values.confirmPassword.trim() === '') {
        errors.confirmPassword = 'Please confirm your password'
    }

    // If the two passwords dont match
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'The two passwords dont match'
    }
    
    return errors;

}

export default reduxForm({
    form: 'UserSignUpForm',
    validate
})(withRouter(UserSignUpForm));