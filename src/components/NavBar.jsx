import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            {/* we'll not use <a> tag bcz it reload page so we use <Link> tag of react router dom it'll not reload page */}
            {/* <Link to='/'> Home </Link>
            <a href="/"> Home </a>
            <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
            <Link to="/contact"> Contact </Link> */}

        <br/>
            {/* we can also use <NavLink> tag so it looks more cool as we can add exta attributes in it */}

            <NavLink exact to='/' activeClassName="active"> Home </NavLink>
            <NavLink exact to='/about' activeClassName="active"> About </NavLink>
            <NavLink exact to='/services' activeClassName="active"> Services </NavLink>
            <NavLink exact to='/contact' activeClassName="active"> Contact </NavLink>
            <NavLink exact to='/users' activeClassName="active"> Users </NavLink>
            <NavLink exact to='/search/:id/:querry' activeClassName="active"> Search </NavLink>
            <NavLink exact to='/note' activeClassName="active"> Project </NavLink>
        </div>
    )
}

export default NavBar;