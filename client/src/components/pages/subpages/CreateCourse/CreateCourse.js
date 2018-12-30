import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAuth, createCourse } from "../../../actions";
import privateRoute from '../../../hocs/privateRoute';

// Import component
import CreateCourseForm from './CreateCourseForm';


/* Readme
If a component is dependent on an authenticated through a HOC. Then you need to 
run the getUserAuth reducer on componentDidMount. This reducer ensures to call
the API and render the component. If you dont call the reducer, then the component
will not know what props.auth is. */

class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    ///////////////////////////
    // REDUCERS              //
    ///////////////////////////

    /* Ensures that we make a call to the database to check for userAuth each time we load
    this component. If there is an auth then we want it to affect the state for later manipulation
    with the update component lifecycle. */
    getUserAuth() {
        const { userAuth } = this.props;
        userAuth();
    }

    ///////////////////////////
    // COMPONENT LIFE CYCLES //
    ///////////////////////////

    componentDidMount() {
        this.getUserAuth(); // Get the user auth
    }

    render() { 
        return (
            <div>
                <div className="bounds course--detail">
                    <h1>Create Course</h1>
                    <div>
                       <CreateCourseForm 
                            auth={this.props.auth} // Parse through the auth props
                            createCourseReducer={this.props.createCourse} // Create course reducer
                            createCourseState={this.props.create_course} // Checks wether the course is uploadet or not
                       />
                    </div>
                </div>
            </div>

          );
    }
}

function mapStateToProps({auth, create_course}) {
    return {auth, create_course};
}
 
export default {
    component: connect(mapStateToProps, {userAuth, createCourse})(privateRoute(CreateCourse))
}