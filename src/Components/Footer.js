import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
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
import Admin from './Admin';



const Footer = () => {
    return (
        <div className='footer-contents'>
            <div className='footer-rowone'>
                <div className='rowone-a'>
                    <FaPhone className='io-mail' />
                    <div className='row-content'>
                        <h3>+234-9058895393</h3>
                        <h4>Hotline 24/7</h4>
                    </div>
                </div>
                <div className='rowone-b'>
                    <IoMailOpen className='io-mail' />
                    <div className='row-content'>
                        <h3>contact@geminigroupng.com</h3>
                        <h4>Free consult</h4>
                    </div>
                </div>
                <div className='rowone-c'>
                    <IoLocationSharp className='io-mail' />
                    <div className='row-content'>
                        <h3>House 4, A close, off first Avenue Gwarimpa.</h3>
                        <h4>Abuja, Nigeria.</h4>
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
                        we rely on our strategic partnerships and industry knowledge to provide our clients with pragmatic solutions and comprehensive analysis.
                    </p>
                    <div className='rowtwologos'>
                        <CiFacebook className='facebook' />
                        <BsTwitterX className='twitter' />
                        <TiSocialLinkedinCircular className='linkedin' />
                        <FaWhatsapp className='whatsapp' />
                    </div>
                </div>
                <div className='rowtwo-b'>
                    <h3 style={{
                        marginBottom: "1.5rem",
                        fontFamily: "Space Grotesk",
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
                        <Link to="/admin/login" target="_blank" rel="noopener noreferrer" element={<Admin />} style={{ textDecoration: "none" }}>
                            <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Admin</li>
                        </Link>
                    </ul>
                </div>
                <div className='rowtwo-c'>
                    <h3 style={{
                        marginBottom: "1.5rem",
                        fontFamily: "Space Grotesk",
                        fontSize: "1.053rem",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#FFFFFF"
                    }}>SERVICES</h3>
                    <ul className='rowsecondlist'>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Value Added Services (VAS)</li>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Hardware And Software development</li>
                        <li> <MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Telecom Consulting</li>
                    </ul>
                </div>
            </div>

            <div style={{
                marginBottom: "5.5vh"
            }}>
                <h4 style={{
                    fontFamily: "Istok Web",
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
