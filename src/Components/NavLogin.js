import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/logo.png";
import Home from './Home';
import Contacts from './Contacts';
import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Arrow from "../Assets/vec.png";
import { motion } from 'framer-motion';

const NavLogin = () => {
    const [cont, setCont] = useState(false);


    return (
        <nav className='log-nav'>
            <div className="nav-logo-container">
                <Link to="/" element={<Home />} style={{ textDecoration: "none" }}>
                    <img style={{
                        objectFit: "contain",
                        height: "3.5rem"
                    }} src={Logo} alt="" />
                </Link>

            </div>
            <div className="contact">
                <Link to="/contact-us" element={<Contacts />} style={{ textDecoration: "none" }}>
                    <button className={cont ? "contact-button-active" : "contact-button"}>
                        <span style={{
                            marginRight: ".5rem"
                        }}>
                            Contact Us
                        </span> <FaArrowRightLong style={{
                            marginTop: ".15rem"
                        }} />
                    </button>
                </Link>

                <motion.img initial={{ opacity: 0, scale: 0.02 }} whileInView={{ opacity: 1, scale: 1 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.08,
                    duration: 0.5
                }} style={{
                    objectFit: "contain",
                    height: "3.5rem",
                    marginBottom: "2rem"
                }} src={Arrow} alt=""></motion.img>
            </div>
        </nav>
    )
}

export default NavLogin
