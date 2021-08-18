import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer w-100 p-3 d-flex align-items-center flex-column ">
            <div className="input d-flex  flex-row w-100 justify-content-center align-items-center">
                <input className="border-0" type="email" id="" />
                <button className="px-2 btn-secondary ml-1" type="submit">Submit</button>
            </div>
            <div className="icons d-flex mb-1">
                <i className="bi bi-facebook mx-3 h2"></i>
                <i className="bi bi-twitter mx-3 h2"></i>
                <i className="bi bi-instagram mx-3 h2"></i>
                <i className="bi bi-linkedin mx-3 h2"></i>
            </div>
            <div className="location d-flex text-secondary">
                <i className="bi bi-geo-alt-fill px-3 "></i>
                <small className="pt-1">PO.Box 00100, Nairobi CBD, Nairobi</small>
            </div>
            <div className="copyright mt-2">
                &copy; &nbsp;
                <small className="text-secondary"
                >
                    2021-2021 WPEngine, Inc All Rights reserved</small
                >
            </div>
        </footer>
    )
}

export default Footer
