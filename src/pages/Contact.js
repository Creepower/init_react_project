/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import '../assets/css/contact.css'

const Contact = () => {
    return (
        <div className="contact p-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="contact_title">Get in touch</div>
                        <div className="contact_subtitle">Any query?</div>
                    </div>
                </div>
                <div className="row contact_content">
                    <div className="col-lg-5">
                        {/* <div className="contact_text"> */}
                        {/* <p>For any enquiry or query, contact us via this form.</p> */}
                        {/* </div> */}
                        <div className="contact_info">
                            <div className="contact_info_box">i</div>
                            <div className="contact_info_container">
                                <div className="contact_info_content">
                                    <ul>
                                        <li>Address: PO.Box 00100, Nairobi CBD, Nairobi</li>
                                        <li>Phone: +254 795 904 420</li>
                                        <li>Email: creeepower@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="contact_info_social">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact_form_container">
                            <form action="#" id="contact_form" className="clearfix p-3 rounded" >
                                <input id="contact_input_name" className="contact_input contact_input_name border border-dark" type="text" placeholder="Name" required="required" data-error="Name is required." />
                                <input id="contact_input_email" className="contact_input contact_input_email border border-dark" type="text" placeholder="E-mail" required="required" data-error="E-mail is required." />
                                <input id="contact_input_subject" className="contact_input contact_input_subject border border-dark" type="text" placeholder="Subject" />
                                <textarea id="contact_input_message" className="contact_message_input contact_input_message border border-dark" name="message" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row contact_map">
                    {/* <!-- Google Map --> */}

                    <div className="col">
                        <div id="google_map">
                            <div className="map_container">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
