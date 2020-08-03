import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'



function Header() {
    return (
        <section className="main-nav">
            <NavLink to="/" className="icon__hamburger"     activeClassName="nav__link--active">
            </NavLink>

            <NavLink className="icon__logo" activeClassName="nav__link--active">
            </NavLink> 

            <NavLink to="/" className="icon__login" activeClassName="nav__link--active">
            </NavLink>

            <NavLink to="/" className="icon__bag" activeClassName="nav__link--active">
            </NavLink>
        </section>    
    )
}

export default Header;
