import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    const handleDark = () => {
        console.log('nada');
    }
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class=" navbar-toggler navBarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

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
                </div>
            </div>
        </nav>
    )
}