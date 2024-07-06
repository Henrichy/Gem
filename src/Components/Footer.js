import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Home from './Home';
import { Link } from 'react-router-dom';
import Abouts from './Abouts';
import Service from './Service';
import Blogs from './Blogs';
import Careers from './Careers';
import Privacy from './Privacy';



const Footer = () => {
    return (
        <div className='footer-contents'>
            <div className='footer-rowone'>
                <div className='rowone-a'>
                    <FaPhone className='io-mail' />
                    <div className='row-content'>
                        <h3>+234-9058895393</h3>
                    </div>
                </div>
                <div className='rowone-b'>
                    <CiMail className='io-mails' />
                    <div className='row-content'>
                        <h3>contact@geminigroupng.com</h3>
                    </div>
                </div>
                <div className='rowone-c'>
                    <IoLocationSharp className='io-mai' />
                    <div className='row-content'>
                        <h3>House 4, a close, off first avenue Gwarimpa, Abuja, Nigeria.</h3>

                    </div>
                </div>
            </div>

            <div className='footer-hr'>
            </div>

            <div className='footer-rowtwo'>
                <div className='rowtwo-a'>
                    <div className='rowtwo-background'>
                    </div>
                    <p>
                        Let us help you leverage the reach and effectiveness of SMS to achieve your business goals in Nigeria.
                    </p>
                    <div className='rowtwologos'>
                        <CiFacebook className='facebook' />
                        <BsTwitterX className='twitter' />
                        <TiSocialLinkedinCircular className='linkedin' />
                    </div>
                </div>
                <div className='rowtwo-b'>
                    <h3 style={{
                        marginBottom: "1.5rem",

                        fontSize: "1.053rem",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#FFFFFF"
                    }}>PAGES</h3>
                    <ul className='rowtwolist'>
                        <Link to="/" element={<Home />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Home</li>
                        </Link>
                        <Link to="/about" element={<Abouts />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> About</li>
                        </Link>
                        <Link to="/services" element={<Service />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Services</li>
                        </Link>
                        <Link to="/blog" element={<Blogs />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Blog</li>
                        </Link>
                        <Link to="/careers" element={<Careers />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Career</li>
                        </Link>

                        <Link to="/privacy" element={<Privacy />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Privacy</li>
                        </Link>



                    </ul>
                </div>
                <div className='rowtwo-c'>
                    <h3 style={{
                        marginBottom: "1.5rem",

                        fontSize: "1.053rem",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#FFFFFF"
                    }}>SERVICES</h3>
                    <ul className='rowsecondlist'>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Bulk SMS</li>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Value added services (VAS)</li>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Interactive voice response (IVR)</li>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> SMS reseller solution</li>
                        {/* <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Telecom Consulting</li> */}
                    </ul>
                </div>
            </div>

            <div style={{
                marginBottom: "5.5vh"
            }}>
                <h4 style={{

                    fontSize: "0.9rem",
                    fontWeight: 200,
                    textAlign: "center",
                    color: "#ffffff"
                }}>©2024 Gemini Engineering Consult LTD – All right reserved.</h4>
            </div>
        </div >
    )
}

export default Footer
