import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import Contacts from './Contacts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Service from './Service';

const Services = () => {
    return (
        <div className='service-contents'>
            <div className='service-header-one'>
                <h1>Our Products and Services</h1>
                <h2>Our products and services are designed to help you meet your business needs</h2>
            </div>

            <div className='service-slider'>
                <Link to="/services" element={<Service />} className="service-link">
                    <motion.div whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='service-one'>
                        <div className='with-blur-backdrops'>
                            <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} transition={{
                                y: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                delay: 0.4,
                                duration: 0.5
                            }}>Products</motion.h3>
                            <ul className='service-list'>
                                <li>SMSC/SMPP SMS Gateway</li>
                                <li>API SMS Gateway</li>
                                <li>USSD Gateway</li>
                            </ul>
                        </div>
                    </motion.div>
                </Link>
                <Link to="/services" element={<Service />} className="service-link">
                    <motion.div whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='service-two'>
                        <div className='with-blur-backdrops'>
                            <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} transition={{
                                y: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                delay: 0.6,
                                duration: 0.5
                            }}>Services</motion.h3>
                            <ul className='service-list'>
                                <li>2-Way SMS</li>
                                <li>SMS Routing services</li>
                                <li>SMS Marketing</li>
                                <li>Interactive voice response</li>
                                <li>USSD or Short code services</li>
                            </ul>
                        </div>
                    </motion.div>
                </Link>
                <Link to="/services" element={<Service />} className="service-link">
                    <motion.div whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='service-three'>
                        <div className='with-blur-backdrops'>
                            <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} transition={{
                                y: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                delay: 0.8,
                                duration: 0.5
                            }}>Telecom Consulting</motion.h3>
                            <ul className='service-list'>
                                <li>Strategy development</li>
                                <li>Infrastructure optimization</li>
                                <li>Strategic partnership</li>
                                <li>VAS business model design</li>
                            </ul>
                        </div>
                    </motion.div>
                </Link>
            </div>

            <div className='choose-page'>
                <div className='left-choose'>
                    <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }}>Why Choose Us</motion.h2>
                    <p>
                        we provide efficient and reliable VAS aggregator service. We focus on helping our clients, leverage technology and meet business challenges and meet strategic goals . <br /><br />
                        We rely on partnerships and industry knowledge to provide our clients with pragmatic solutions and comprehensive analysis.
                    </p>

                    <Link to="/contact-us" element={<Contacts />} style={{ textDecoration: "none" }}>
                        <button className="about-button">
                            <span style={{
                                marginRight: ".5rem"
                            }}>
                                Contact Us
                            </span> <FaArrowRightLong style={{
                                marginTop: ".15rem"
                            }} />
                        </button>
                    </Link>

                </div>
                <div className='right-choose'>
                    <ul className='choose-list'>
                        <motion.li initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.8,
                            duration: 0.5
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Quality Assurance</motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.8,
                            duration: 0.5
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Technical Support</motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.8,
                            duration: 0.5
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Standard Delivery</motion.li>
                    </ul>
                </div>
            </div>

            <div className='expert-page'>
                <motion.h2 initial={{ scale: 0.01 }} whileInView={{ scale: 1 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.08,
                    duration: 0.5
                }}>We Have Expert Team</motion.h2>
                <p>Meet our expert management team members in technology and consulting areas.</p>
                <div className='expert-slider'>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.008,
                        duration: 0.225
                    }} className='expert-one'>
                        <div className='expert-image-one'>
                        </div>
                        <div className='expert-info'>
                            <div className='expert-content'>
                                <h3>Dr Femi Olumodeji</h3>
                                <h5>CEO</h5>
                            </div>
                            <div className='expert-contact'>
                                <IoLogoLinkedin style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <BsTwitterX style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <IoLogoFacebook style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.008,
                        duration: 0.225
                    }} className='expert-two'>
                        <div className='expert-image-two'>
                        </div>
                        <div className='expert-info'>
                            <div className='expert-content'>
                                <h3>Dr Fidel Abowei</h3>
                                <h5>COO</h5>
                            </div>
                            <div className='expert-contact'>
                                <IoLogoLinkedin style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <BsTwitterX style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <IoLogoFacebook style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0,
                        duration: 0.225
                    }} className='expert-three'>
                        <div className='expert-image-three'>
                        </div>
                        <div className='expert-info'>
                            <div className='expert-content'>
                                <h3>Victory Ikuomola</h3>
                                <h5>Tech Lead</h5>
                            </div>
                            <div className='expert-contact'>
                                <IoLogoLinkedin style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <BsTwitterX style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                                <IoLogoFacebook style={{
                                    fontSize: "2.5rem",
                                    color: "#244886", marginRight: "0.5rem",
                                    cursor: "pointer"
                                }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Services
