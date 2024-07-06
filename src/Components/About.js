import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Abouts from './Abouts';
import { easeIn, motion, useScroll } from "framer-motion";

const About = () => {
    return (
        <div className='about-column'>
            <div className='about-contents'>
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{
                    opacity: 1,
                    x: 0
                }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: .025,
                    duration: 0.35
                }} className='about-image'></motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{
                    opacity: 1,
                    x: 0
                }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: .025,
                    duration: 0.35
                }} className='about-text'>
                    <h2>About us</h2>
                    <p>
                        We help businesses leverage the power of Value-Added Services (VAS) and SMS by providing access to our bespoke carrier grade messaging and VAS platforms.
                    </p>
                    <Link to="/about" element={<Abouts />} style={{ textDecoration: "none" }}>
                        <button className="about-button">
                            <span style={{
                                marginRight: ".5rem"
                            }}>
                                Learn More
                            </span> <FaArrowRightLong style={{
                                marginTop: ".15rem"
                            }} />
                        </button>
                    </Link>
                </motion.div>
            </div >
            <p className='abt'>Our platform features extend beyond that of a regular VAS and SMS gateway to provide the following extensive services:
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: "80%" }}>
                <ul className='about-list'>
                    <li> <HiOutlinePlus className='outline-plus' />SMPP Server</li>
                    <li> <HiOutlinePlus className='outline-plus' />HTTP API</li>
                    <li> <HiOutlinePlus className='outline-plus' />Extended messaging application</li>
                </ul>
                <ul className='about-list'>
                    <li> <HiOutlinePlus className='outline-plus' />Billing management</li>
                    <li> <HiOutlinePlus className='outline-plus' />Routing management</li>
                    <li> <HiOutlinePlus className='outline-plus' />USSD gateway</li>
                </ul>
            </div>
        </div>

    )
}

export default About
