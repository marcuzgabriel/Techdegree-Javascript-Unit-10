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
    ErrorMessage,
    InputField,
    TextArea,
    Error,
    Success
} from '../Signup/styles';


class CreateCourseForm extends Component {
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

    
    submitForm = async ( props ) => {
        const { createCourseReducer } = this.props;
        await createCourseReducer(props);

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
        
        const { createCourseState } = this.props;

        /* If isLoading is true and the createCourseState is not null state 
        then the user has pressed the submit button */
        if (createCourseState && this.state.isLoading) {

            if (createCourseState.status !== 201) {
                    this.setState({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    statusMsg: createCourseState.message
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
                    statusMsg: createCourseState.message
                });        

                this.props.reset();               

                /* As you dont do any redirection then it is important that you reset
                that states after the success message has shown. Otherwise isSuccess state
                will remain true and no new success messages will be shown */

                setTimeout(() => {
                    this.setState({
                        isSuccess: false
                    });

                    this.props.history.push("/"); // Push the user to the main page

                }, 2000);
            }
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