import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { withRouter } from "react-router-dom";

// Import components
import { Loader } from '../../../../../public/css/Global';
// Local styles
import {
    ErrorContainer,
    InputField,
    TextArea,
    Error,
    Success
} from '../Signup/styles';


class CreateCourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Static states for data handling
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    // A redux-form approach which is neccesary
    renderFields({ input, meta: { touched, error }, ...otherProps}) {
        const hasError = touched && error !== undefined;

        // Different field components
        return (
            <div>

                {
                    input.name === "title" ?
                        <InputField
                            error={hasError}
                            className="input-title course--title--input" 
                            type="text"
                            placeholder={"Course Title..."}
                            {...input}
                        />
                    : 
                    input.name === "description" ?
                        <TextArea 
                            error={hasError}
                            placeholder={"Course description..."}
                            {...input}
                        />
                    :
                    input.name === "estimatedTime" ?
                        <InputField
                            error={hasError}
                            className="course--time--input"
                            type="text"
                            placeholder={"Hours"}
                            {...input}
                        />
                    :
                    input.name ="materialsNeeded" ?
                        <TextArea 
                            error={hasError}
                            placeholder={"List materials..."}
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

    // Submit the form and run the action
    submitForm(props){
        
        const { createCourseReducer } = this.props;
        createCourseReducer(props);

        // Start the loader
        this.setState({
            isLoading: true
        });
    }

    // Reset states - used for request handling
    resetStates() {
        this.setState({
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        });
    }

    // Handle the data
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

    // Ensures that data is handled everytime the component updates
    componentDidUpdate(prevProps, prevState) {
        const { createCourseState } = this.props;
        if (createCourseState && this.state.isLoading) {
            this.handleRequest(createCourseState);
        } 
    }


    render() { 
        
        /* It is commonly good practice to set a loader before the prop you use to ensure
        that they render before they are being called */

        const { auth } = this.props;
        if (!auth) {
            return <div><Loader>Loading...</Loader></div>
        }

        const { handleSubmit } = this.props;

        return (
            <form id="create_course_form" onSubmit={handleSubmit(props => this.submitForm(props))} >
                <div className="grid-66">
                <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    
                    <Field name="title" component={this.renderFields} />
                    <p>By {this.props.auth.firstName} {this.props.auth.lastName}</p>
                    
                </div>
                <div className="course--description">
                    <Field name='description' component={this.renderFields} />              
                </div>
                </div>
                <div className="grid-25 grid-right">
                <div className="course--stats">
                    <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <Field name="estimatedTime" component={this.renderFields} />
                    </li>
                    <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <Field name="materialsNeeded" component={this.renderFields} />
                        
                    </li>
                    </ul>
                </div>
                </div>
                <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">{this.state.isLoading ? "Loading..." : "Create course"}</button>
                    <Link title="Welcome" to="/" className="button button-secondary">Cancel</Link>
                </div>
                {this.state.isError ? <Error>{this.state.statusMsg}</Error> : null}
                {this.state.isSuccess ? <Success>{this.state.statusMsg}</Success> : null} 
            </form>
        );
    }
}

// Validation - a redux-form approach
const validate = values => {
    const errors = {}

    // Title
    if (!values.title || values.title.trim() === '') {
        errors.title = 'Please fill in a title'
    }

    // Description
    if (!values.description || values.description.trim() === '') {
        errors.description = 'Please write a description'
    }

    // Hours
    if (!values.estimatedTime || values.estimatedTime.trim() === '') {
        errors.estimatedTime = 'Please write the estimated time for this couse.'
    }

    // Materials needed
    if (!values.materialsNeeded || values.materialsNeeded.trim() === '') {
    errors.materialsNeeded = 'Please write the materials needed for this course.'
    }

    return errors;
}
 
export default reduxForm({
    form: 'createCourseForm',
    validate
})(withRouter(CreateCourseForm));