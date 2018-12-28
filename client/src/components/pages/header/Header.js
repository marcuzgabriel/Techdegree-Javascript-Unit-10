
import React from 'react';
import { Link } from 'react-router-dom';

// Global fonts
import { 
    Paragraph,
    Header1
} from '../../../../public/css/Fonts';

// Global styling
import {
    ParagraphContainerCenter
} from '../../../../public/css/Global';


const Header = (props) => {
    return ( 
        <div className="header">
            <div className="bounds">
            <Link title="Welcome" to="/">
                <h1 className="header--logo">Courses</h1>
            </Link>
            <nav>
                {props.auth ? <span className="user--login">{`Welcome ${props.auth.firstName} ${props.auth.lastName} `}</span> : <Link title="Sign up" to="/sign-up" >Sign Up</Link> }
                {props.auth ? <span className="user--login">Sign out</span> : <Link title="Sign in" to="/sign-in" >Sign In</Link> }
            </nav>
            </div>
      </div>
    );
}
 
export default Header;