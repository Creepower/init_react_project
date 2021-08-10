import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import {ScreenListener} from '../../assets/Functions'


export const Navbar = () => {
    const class_justify ="justify-content-lg-end justify-content-sm-around justify-content-between";
    
    const active_link = "border-bottom border-warning";

    var [showNav, showNavState] = useState(true);
    var screenSize = ScreenListener();

    const collapse = () =>{
        if(screenSize === 992){
            showNavState(false);   
        }
        if(showNav === false){
            showNavState(true);
        }
        else{
            showNavState(false);
        }
    }

    useEffect (() => {
        if(screenSize <=992){
            showNavState(false)
        }else{
            showNavState(true)
        }
    },[screenSize]);

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className=" navbar_logo">
                <Link to="" className="navbar-brand " href="/">CREE<span>POWER</span><i className="fa fa-bolt"></i></Link>
                {/* empty styling div */}
                <div></div>
            </div>
            <button onClick={collapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                showNav &&
                <div class={`collapse navbar-collapse d-flex  ${class_justify}`} id="navbarNavAltMarkup">
                    {/* links */}
                    <div class="navbar-nav col-lg-auto col-sm-4">
                        <li className={`nav-item  ${active_link}`}>
                            <Link to="/" className="nav-link active border-5" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About us</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" href="/">projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contacts" className="nav-link" href="/">Contacts</Link>
                        </li>
                       
                        {/* <Link to="" a className="nav-link" href="/">Contact</Link> */}
                    </div>
                    <div className="buttons mx-3 d-flex flex-column flex-lg-row col-lg-auto col-sm-6">
                        <Link to="/login" className="btn btn-primary text-uppercase mx-1 ">sign-in</Link>
                        <Link to="/signup" className="btn btn-outline-warning text-uppercase  mx-2 ">sign-up</Link>
                    </div>

                    {/* buttons */}
                </div>
            }
           
        </div>
    </nav>
    );
}


