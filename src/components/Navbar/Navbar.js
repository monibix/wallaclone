import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="https://image.winudf.com/v2/image/Y29tLndhbGxhcG9wYmF1eWFuZHNlbGwuYnV5YW5kc2VsbC5mcmVlZ3VpZGUyMDE3X3NjcmVlbl8wXzE1MTEwOTYwMjRfMDUw/screen-0.jpg?fakeurl=1&type=.jpg" alt="logo"/>
                </Link>
            </div>
            <div className="navbar-menu">
                <input type="text" placeholder="search a product" id="searchbar" />
            </div>
            <div className="navbar-end">
                <ul className="navbar-list">
                    <Link to=""><li className="navbar-item">Mensajes</li></Link>
                    <Link to="/auth/dashboard"><li className="navbar-item">Regístrate o inicia sesión</li></Link>
                    <Link to=""><li className="navbar-item">Subir producto</li></Link>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;