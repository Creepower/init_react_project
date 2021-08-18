import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./navbar.css"
import { ScreenListener } from '../../assets/functions';

const Navbar = (props) => {
    const screenSize = ScreenListener();
    const class_justify = "justify-content-lg-end justify-content-sm-around justify-content-between ";

    const [showDiv, setShowDiv] = useState(true);
    const [currentLink, setCurrentLink] = useState("home");

    const [linkStyle, setLinkStyle] = useState({
        type: "home",
        className: "border-warning border-bottom border-3 "
    })

    // useEffect(() => {
    //     console.log(props)
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    useEffect(() => {

        setLinkStyle({
            ...linkStyle,
            type: currentLink
        })


        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLink])

    useEffect(() => {
        let clean = true
        if (clean) {
            if (screenSize > 992) {
                setShowDiv(true)
            } else {
                setShowDiv(false);
            }
        }


        return () => {
            clean = false
        }
    }, [screenSize])

    const collapseNav = () => {
        if (screenSize === 992) {
            setShowDiv(false);
        }
        if (showDiv === false) {
            setShowDiv(true);
        }
        else {
            setShowDiv(false);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className=" navbar_logo">
                    <Link to="" className="navbar-brand " href="/">CREE<span>POWER</span><i className="fa fa-bolt"></i></Link>
                    {/* empty styling div */}
                    <div></div>
                </div>
                <button className="navbar-toggler" onClick={collapseNav} style={{ outline: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {showDiv &&
                    <>
                        <div className={`collapse navbar-collapse d-flex ${class_justify}`} id="navbarNavAltMarkup">
                            {/* links */}
                            <div className="navbar-nav col-lg-auto col-5">
                                <Link onClick={() => {
                                    setCurrentLink("home");
                                }} to="/" className={linkStyle.type === "home" ? `${linkStyle.className} nav-link active text-warning }` : `nav-link active`} aria-current="page" href="/">Home</Link>

                                <Link onClick={() => {
                                    setCurrentLink("about");
                                }} to="/#about" className={linkStyle.type === "about" ? `${linkStyle.className} nav-link active text-warning` : `nav-link active`} href="/">About us</Link>

                                <Link onClick={() => {
                                    setCurrentLink("projects")
                                }} to="/projects" className={linkStyle.type === "projects" ? `${linkStyle.className} nav-link active text-warning` : `nav-link active`} href="/">projects</Link>

                                <Link onClick={() => {
                                    setCurrentLink("contacts")
                                }} to="/contacts" className={linkStyle.type === "contacts" ? `${linkStyle.className} nav-link active text-warning` : `nav-link active`} href="/">Contacts</Link>
                                {/* <Link to="" a className="nav-link" href="/">Contact</Link> */}
                            </div>
                            <div className="buttons mx-3 col-lg-auto col-6 d-flex flex-lg-row flex-column ">
                                <Link to="/login" className="btn btn-primary text-uppercase mx-1">sign-in</Link>
                                <Link to="/signup" className="btn btn-outline-warning text-uppercase  mx-2 mt-5 mt-lg-0">sign-up</Link>
                            </div>

                            {/* buttons */}
                        </div>
                    </>
                }
            </div>
        </nav >
    )
}

export default withRouter(Navbar)