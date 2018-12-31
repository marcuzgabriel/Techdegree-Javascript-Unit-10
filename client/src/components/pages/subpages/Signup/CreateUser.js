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

class CreateUserForm extends Component {
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

    submitForm = async ( props ) => {

        const { createUserReducer, getUserAuth } = this.props;
        await createUserReducer(props);
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
        */
        
        const { createUserState } = this.props;

        /* If isLoading is true and the createUserState is not null state 
        then the user has pressed the submit button */
        if (createUserState && this.state.isLoading) {

            if (createUserState.status !== 201) {
                    this.setState({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    statusMsg: createUserState.message
                });

                /* Reset the states after 2 sec else it will not show any other errors */

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
                    statusMsg: createUserState.data.message
                });        
            }
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
    form: 'createUserForm',
    validate
})(withRouter(CreateUserForm));