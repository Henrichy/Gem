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

            <div className='service-row'>
                <div className='service-slider'>
                    <div className='service-rows'>

                        <motion.div whileHover={{ scale: 1.04 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.04,
                            duration: 0.5
                        }} className='service-one'>

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

                        </motion.div>

                        <motion.div whileHover={{ scale: 1.04 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.04,
                            duration: 0.5
                        }} className='service-two'>
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

                        </motion.div>

                    </div>


                    <motion.div whileHover={{ scale: 1.04 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='service-three'>

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

                    </motion.div>

                </div>

                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{
                    opacity: 1,
                    x: 0
                }} whileHover={{ scale: 1.04 }}
                    transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: .025,
                        duration: 0.35
                    }} className='service-image'>

                </motion.div>
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
                        We don't just offer bulk SMS, we are experts in it. Our connections with multiple carriers ensure industry-leading delivery rates, guaranteeing your messages reach the right inboxes

                        <br /><br />
                        Navigating SMS marketing regulations can be complex. We provide expert guidance to ensure your campaigns are compliant, while our dedicated support team is always there to answer your questions.
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
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Bulk SMS Expertise & High Deliverability Rates</motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.8,
                            duration: 0.5
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Compliance & Support You Can Trust</motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.8,
                            duration: 0.5
                        }}> <IoMdCheckmarkCircleOutline className='check-mark' />Measurable Results & Campaign Optimization</motion.li>
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
                }}>Meet The Team</motion.h2>
                <p>A team of passionate problem-solvers who think outside the box to provide the best services to our clients.</p>
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
                            <h3>Olufemi Olumodeji</h3>
                            <h5>Co-founder & CEO</h5>
                            <IoLogoLinkedin style={{
                                fontSize: "2.5rem",
                                color: "#244886",
                                cursor: "pointer"
                            }} />
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
                            <h3>Fidel Abowei</h3>
                            <h5>COO</h5>
                            <IoLogoLinkedin style={{
                                fontSize: "2.5rem",
                                color: "#244886",
                                cursor: "pointer"
                            }} />
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
                            <h3>Victory Ikuomola</h3>
                            <h5>Tech Lead</h5>

                            <IoLogoLinkedin style={{
                                fontSize: "2.5rem",
                                color: "#244886",
                                cursor: "pointer"
                            }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Services
