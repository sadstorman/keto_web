import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    const handleDark = () => {
        console.log('nada');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center">
            <div className="navbar-collapse">
                <div className="navbar-nav text-center">
                    <Link

                        className="navbar-brand hidden-xs mx-1"
                        to="/"
                    >
                        Lista Keto
                    </Link>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link "
                        exact
                        to="/info"
                    >
                        +info
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-info"> </span>
                    <a
                        activeClassName="active"
                        className="nav-item nav-link pointer"
                        onClick={handleDark}
                    >
                        Light/Dark
                    </a>
                </ul>
            </div>
        </nav>
    )
}