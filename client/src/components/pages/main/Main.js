import React, { Component } from 'react' // In order to
import { connect } from "react-redux"; // Connect to states - a react redux method
import { testReducer } from '../../actions';
import { Wrapper } from '../../../../public/css/Global';
import { userAuth, logoutUser } from "../../actions";
import { withRouter } from 'react-router-dom';

// Components
import Header from '../header/Header';
import MainContent from '../subpages/Maincontent/MainContent';


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
    // CLICK HANDLERS        //
    ///////////////////////////

    logoutBtn(e) {
        e.preventDefault();
        const { logoutUser } = this.props;
        logoutUser();
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
                    <Header 
                        auth={this.props.auth}
                        logout={this.logoutBtn.bind(this)}
                        logoutUser={this.props.logout}
                    />
                    <MainContent />
                </Wrapper>  
            </div>
              

         );
    }
}

// Stores the user auth
function loadData(store){
    return store.dispatch(userAuth());
}

// Makes sure that we can get the auth as a prop
function mapStateToProps({auth, logout}) {
    return {auth, logout};
}
 
export default {
    loadData,
    component: connect(mapStateToProps, {userAuth, logoutUser})(withRouter(Main)) 
}
