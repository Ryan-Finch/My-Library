import React from 'react';
import {Link} from 'react-router-dom'

function Header(props){

    let header = props.user ?
    <div>
        <Link to='' onClick={props.handleLogout}>Log Out</Link>
    </div>
    :
    <div>
        <Link to="/login">Login</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to="/signup">Sign Up</Link>
    </div>

    return(
        <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand">My Library</h1>
            {header}
        </nav>
    )
}

export default Header;