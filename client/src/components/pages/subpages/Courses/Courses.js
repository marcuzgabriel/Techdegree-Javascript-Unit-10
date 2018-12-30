import React, { Component } from 'react' // In order to
import { connect } from "react-redux"; // Connect to states - a react redux method
import { Wrapper } from '../../../../../public/css/Global';
import { getCourses, userAuth } from "../../../actions";

// Components
import MainContent from '../../subpages/Maincontent/MainContent';
// Import components

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
           
        }
    }

    renderReducers() {
        const { getCourses, userAuth } = this.props;
        getCourses();
        userAuth();
    }

    componentDidMount() {
        this.renderReducers();
    }

    render() { 
        
        return (
            <div>
                <Wrapper>
                    <MainContent 
                        auth={this.props.auth}
                        courses={this.props.courses}
                    />
                </Wrapper>  
            </div>
         );
    }
}

// Makes sure that we can get the auth as a prop
function mapStateToProps({auth, courses}) {
    return {auth, courses};
}
 
export default {
    component: connect(mapStateToProps, {getCourses, userAuth})(Main)
}
