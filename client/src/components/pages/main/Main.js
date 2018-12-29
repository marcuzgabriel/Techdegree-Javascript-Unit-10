import React, { Component } from 'react' // In order to
import { connect } from "react-redux"; // Connect to states - a react redux method
import { testReducer } from '../../actions';
import { Wrapper } from '../../../../public/css/Global';
import { userAuth } from "../../actions";
import privateRoute from "../../hocs/privateRoute";
// Components
import MainContent from '../subpages/Maincontent/MainContent';

/* Readme AUTH_USER
This Main component is the AUTH activator. It initializes the auth reducer and
creates the auth prop with content. In order to use this mechanism, then the
user needs to be redirected to the Main component directly after a successful
login or a successful user creation. First then can the reducer be called and 
the auth prop be created so it is directly accessible within in any other component
by calling props.auth. It should be mentioned that redirecting to a component 
that is both accessible with an authenticated user and a not-authenticated user 
(which I have in this assignment) is for future reference not recommended. 
All browsers except IE11 accepts this behaviour. In order to make it work correctly
with IE11 a HOC (higher-order-component) should be created, which renders the auth
prop more nicely. At the same time the authenticated user should be redirected 
to a 'private-only' component - ex. /profile. By doing so IE11 can not take mistake
of wether there is an authentication or not. */

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
           
        }
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
                <Wrapper>
                    <MainContent />
                </Wrapper>  
            </div>
         );
    }
}

// Makes sure that we can get the auth as a prop
function mapStateToProps({auth, logout}) {
    return {auth, logout};
}
 
export default {
    component: connect(mapStateToProps, {userAuth})(privateRoute(Main))
}
