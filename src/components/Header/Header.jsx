import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

function Header(props){

    let header = props.user ?  
    <nav className="navbar header">
        <h1 className="">{props.user.name}'s Library</h1>
        <div>
            <Link to='/books'>Search</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='/library'>Library</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='/'>About</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout}>Log Out</Link>
        </div>
    </nav>
    :
    <nav className="navbar header">
    <h1 className="">My Library</h1>
        <div>
            <Link to='/'>About</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/signup">Sign Up</Link>
        </div>
    </nav>


    return(
        <>
        {header}
        </>
    )
}

export default Header;