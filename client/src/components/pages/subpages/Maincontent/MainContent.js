import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
    Loader
} from '../../../../../public/css/Global';

const MainComponent = (props) => {
    
    const { courses } = props;

    if (!courses) {
        return <div className="loaderDiv"><p>Loading...</p><Loader/></div>
    } else {
        if (courses.length > 0) {
            return (
                <div className="bounds main-content">
                    {
                        courses.map((course, index) =>
                        <div className="grid-33" key={index}>
                            <a className="course--module course--link" href={`/courses/${course._id}`}>
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{course.title}</h3>
                            </a> 
                        </div>
                        )
                    }
                    <div className="grid-33">
                        <Link className="course--module course--add--module" to="/courses/create">
                            <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                            </svg>New Course</h3>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="bounds main-content">
                    <div className="no_courses">No courses has yet been created.</div>
                    <div className="grid-33">
                        <Link className="course--module course--add--module" to="/courses/create">
                            <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                            </svg>New Course</h3>
                        </Link>
                    </div>
                </div>
            );   
        }
    } 
}
 
export default MainComponent;