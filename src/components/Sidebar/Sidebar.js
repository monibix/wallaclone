import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/profile.png';
import Products from '../../assets/products.png';
import './Sidebar.css'


function Sidebar() {

    return (
        <div class="sidebar">

            <Link to="/profile">
                <img src={Profile} alt="profile"/>
                <p>Profile</p>
            </Link>
            <Link to="/products">
                <img src={Products} alt="products"/>
                <p>Products</p>
            </Link>
        </div>
    )
}
export default Sidebar;