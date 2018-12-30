import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getCourseById, userAuth, deleteCourseById } from '../../../actions';
import {
    Loader
} from "../../../../../public/css/Global";

import {
    ErrorContainer,
    ErrorMessage,
    InputField,
    TextArea,
    Error,
    Success
} from '../Signup/styles';

class ShowCourse extends Component {
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
            await deleteCourseById(single_course._id);

            // Start the loader
            this.setState({
                isLoading: true
            });
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

        const {delete_course} = this.props;
        if (delete_course && this.state.isLoading) {
            if (delete_course.status !== 204) {
                this.setState({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    statusMsg: delete_course.message
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
                    statusMsg: delete_course.message
                });        

                /* As you dont do any redirection then it is important that you reset
                that states after the success message has shown. Otherwise isSuccess state
                will remain true and no new success messages will be shown */

                setTimeout(() => {
                    this.setState({
                        isSuccess: false
                    });

                    this.props.history.push("/"); // Redirect the user to the main page

                }, 2000);
            }
        }
    }

    render() { 
    
        const { single_course, auth, deleteCourseById, delete_course } = this.props;

        // If its not yet true start a loader
        if (!single_course) {
            return <div className="loaderDiv"><p>Loading...</p><Loader/></div>
        } 

        // If there is any errors
        if (single_course.status === 404 || single_course.status === 409) {
            return <Redirect to="/not-found" />
        }

        ///////////////////////////////////////////
        // SHOWS THE MATERIALS NEEDED IN AN LIST //
        ///////////////////////////////////////////

        function Item(props) {
            return <li>{props.description}</li>;
        }

        function TodoList() {
            let str = single_course.materialsNeeded;
            str = str.split('\n');
            return (
              <ul>
                {str.map((desc, index) => <Item key={index} description={desc} />)}
              </ul>
            );
        }

        ///////////////////////////////////
        // CHECK IF ITS THE USERS COURSE //
        ///////////////////////////////////

        function checkUserCourse(a, c, deleteCourse) {
            
            if (!a) {
                return <span></span>
            } else if (a.emailAddress === c.user.emailAddress) {

                return (
                    <span>
                        <a className="button" href="update-course.html">Update Course</a>
                        <a className="button" onClick={deleteCourse.bind(this)}>Delete Course</a>
                    </span>
                );
            } else {
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

// Makes sure that we can get the auth as a prop
function mapStateToProps({auth, single_course, delete_course}) {
    return {auth, single_course, delete_course};
}
 
export default {
    component: connect(mapStateToProps, { getCourseById, userAuth, deleteCourseById })(ShowCourse)
}