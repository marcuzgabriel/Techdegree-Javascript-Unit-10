import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import components
import Header from '../../header/Header';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                    <div>
                        <form>
                        <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value="" /></div>
                        <div><input id="password" name="password" type="password" className="" placeholder="Password" value="" /></div>
                        <div className="grid-100 pad-bottom">
                            <button className="button" type="submit">Sign In</button>
                            <Link title="Welcome" to="/" className="button button-secondary">Cancel</Link>
                        </div>
                        </form>
                    </div>
                    <p>&nbsp;</p>
                    <p>Don't have a user account?
                         <Link to="/sign-up"> Click here</Link> to sign up!
                    </p>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default {
    component: Signin
}