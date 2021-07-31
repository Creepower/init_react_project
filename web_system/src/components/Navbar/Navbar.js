import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

export const Navbar = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className=" navbar_logo">
                <Link to="" className="navbar-brand " href="/">CREE<span>POWER</span><i className="fa fa-bolt"></i></Link>
                {/* empty styling div */}
                <div></div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                {/* links */}
                <div class="navbar-nav ">
                    <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
                    <Link to="/about" className="nav-link" href="/">About us</Link>
                    <Link to="/projects" className="nav-link" href="/">projects</Link>
                    <Link to="/contacts" className="nav-link" href="/">Contacts</Link>
                    {/* <Link to="" a className="nav-link" href="/">Contact</Link> */}
                </div>
                <div className="buttons mx-3">
                    <Link to="/login" className="btn btn-primary text-uppercase mx-1">sign-in</Link>
                    <Link to="/signup" className="btn btn-outline-warning text-uppercase  mx-2">sign-up</Link>
                </div>

                {/* buttons */}
            </div>
        </div>
    </nav>
