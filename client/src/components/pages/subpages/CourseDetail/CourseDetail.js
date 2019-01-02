import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getCourseById, userAuth, deleteCourseById } from '../../../actions';
import {
    Loader
} from "../../../../../public/css/Global";

import {
    Error
} from '../Signup/styles';

class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

            hasError: false,
            isLoading: false,
            isError: false,
            isSuccess: false,
            statusMsg: ""
        }
    }

    // Render auth
    renderAuth() {
        const { userAuth } = this.props;
        userAuth();
    }

    // Render the course
    renderCourse(id) {
        const { getCourseById } = this.props;
        getCourseById(id);
    }

   
    // Delete auth upon click
    deleteCourse = async (e) => {
        e.preventDefault();
        const { single_course, deleteCourseById } = this.props;
        if (single_course) {
            deleteCourseById(single_course._id);

            // Start the loader
            this.setState({
                isLoading: true
            });
        }
    }

    // User for handleRequest
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
        switch(req.status) {
            case (200): // Success 
                this.setState({
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    statusMsg: req.message
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
                    statusMsg: req.message
                });

                setTimeout(() => {
                    this.props.history.push("/notfound");
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

    componentDidMount() {
        this.renderCourse(this.props.match.params.id); // Render the course
        this.renderAuth(); // Render the auth
    }

    componentDidUpdate(prevProps, prevState) {
        
        // Ensures that the handle data request always is running
        const { delete_course } = this.props;
        if (delete_course && this.state.isLoading) {
            this.handleRequest(delete_course);
        }
    }

    render() { 
    
        const { single_course, auth } = this.props;

        // If its not true, start the loader
        if (!single_course) {
            return <div className="loaderDiv"><p>Loading...</p><Loader/></div>
        } 

        // If no courses can be found redirect
        if (single_course.status === 404) {
           return <Redirect to="/notfound"></Redirect>
        }
    
        ///////////////////////////////////////////
        // SHOWS THE MATERIALS NEEDED IN AN LIST //
        ///////////////////////////////////////////

        /* I could use the plugin Teamtreehouse has recommended, but I decided 
        to make my own javascript manipulation */

        function Item(props) {
            return <li>{props.description}</li>;
        }

        
        function TodoList() {

            // If its true then we want to show the materials if not then show a message that says "No materials needed"
            if (single_course.materialsNeeded) {
                let str = single_course.materialsNeeded;
                str = str.split('\n');
                return (
                <ul>
                    {str.map((desc, index) => <Item key={index} description={desc} />)}
                </ul>
                );
            } else {
                return (
                    <ul>
                        <Item description={"No materials needed"} />
                    </ul>
                )
            }
        }

        ////////////////////////////////////
        // CHECKS IF ITS THE USERS COURSE //
        ////////////////////////////////////

        // This function creates the header possibility for the user to either delete or update a course created by that user.
        function checkUserCourse(a, c, deleteCourse) {
            
            // A stands for auth
            // C stands for course

            // If there is no auth we want to return nothing
            if (!a) {
                return <span></span>
            
            // If there is an auth then we want to compare it with the course creator and give the user the possibility to udpate or delete the course
            } else if (a.emailAddress === c.user.emailAddress) {

                return (
                    <span>
                        <Link className="button" to={`/courses/${c._id}/update`}>Update Course</Link>
                        <a className="button" onClick={deleteCourse.bind(this)}>Delete Course</a>
                    </span>
                );
            } else {
                // If there is a user but the user do not own that course, then we want to show nothing.
                return <span></span>
            }          
        }

        return (
            <div>
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            {checkUserCourse(auth, single_course, this.deleteCourse)}
                            <Link title="Welcome" to="/" className="button button-secondary">Return to list</Link>
                        </div>
                    </div>
                    </div>
                    <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{single_course.title}</h3>
                        <p>By {!single_course || !single_course.user ? null : single_course.user.firstName } {!single_course || !single_course.user ? null : single_course.user.firstName}</p>
                        </div>
                        <div className="course--description">
                        <p>{single_course.description}</p>
                        </div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                        <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{single_course.estimatedTime}</h3>
                            </li>
                            <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            {TodoList()}
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {this.state.isError ? <Error>{this.state.statusMsg}</Error> : null}
                {this.state.isSuccess ? <Error>{this.state.statusMsg}</Error> : null} 
            </div>
        );
    }
} 

// Get different props from the reducer
function mapStateToProps({auth, single_course, delete_course}) {
    return {auth, single_course, delete_course};
}
 
export default {
    component: connect(mapStateToProps, { getCourseById, userAuth, deleteCourseById })(CourseDetail)
}