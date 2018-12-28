import React, { Component } from 'react' // In order to
import { connect } from "react-redux"; // Connect to states - a react redux method
import { testReducer } from '../../actions';
import { Wrapper } from '../../../../public/css/Global';
import { userAuth } from "../../actions";

// Components
import Header from '../header/Header';
import MainContent from '../subpages/Maincontent/MainContent';


class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            auth: this.props.auth,    
            actions: {
                isSearch: false
            },
            testreducer: this.props.testReducer         
        }
    }
    
    //////////////////////////////
    // REDUCERS                 //
    //////////////////////////////
    updateUserInfo(value) {
       let { testreducer } = this.state;
       testreducer(value);
    }

    //////////////////////////////
    // CLICK HANDLERS           //
    //////////////////////////////
   
    searchClick(e) {
        e.preventDefault();
     
        this.setState(prevState => ({
            actions: {
                ...prevState.actions,
                isSearch: !this.state.actions.isSearch
            }
        }));

    }

    componentDidMount() {
        const { userAuth } = this.props;
        
    }

    render() { 
        const {auth} = this.props;

        return (
            <div>
                <Wrapper>
                    <Header 
                        auth={this.props.auth}
                    />
                    <MainContent />
                </Wrapper>  
            </div>
              

         );
    }
}

function loadData(store){
    return store.dispatch(userAuth());
}

function mapStateToProps({auth}) {
    return {auth};
}
 
export default {
    loadData,
    component: connect(mapStateToProps, {userAuth})(Main) 
}
