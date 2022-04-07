import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

 const Navbar = () => {
     const state =useSelector((state)=>state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
                <div className="container">
                    <img src='https://images.pngnice.com/download/2007/Pegasus-Transparent-Background.png' height="100px" width="150px" />
                    <NavLink className="logo fw-bold fs-1" to="/">LA COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item active fw-bolder">
                                <NavLink className=" nav-link active text-white " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item active fw-bolder">
                                <NavLink className=" nav-link text-white" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item active fw-bolder">
                                <NavLink className="  nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item active fw-bolder">
                                <NavLink className=" nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <NavLink to="/login" className="btn btn-lg  btn-dark">
                               <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                            <NavLink to="/signup" className="btn btn-lg btn-dark ms-2">
                               <i className="fa fa-user-plus me-1"></i> Signup</NavLink>
                            <NavLink to="/cart" className="btn btn-lg btn-dark ms-2">
                               <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
