import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import Contacts from './Contacts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Serve from "../Assets/smartphone.png";
import Prods from "../Assets/bulks.png";
import Tels from "../Assets/ivr.png";

const Services = () => {
    return (
        <div className='service-contents'>
            <div className='service-header-one'>
                <h2>Services</h2>
                <h5>Our products and services are designed to help you meet your business needs</h5>
            </div>

            <div className='service-slider'>
                <motion.div whileHover={{ scale: 1.04 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.04,
                    duration: 0.5
                }} className='service-one'>
                    <img src={Prods} className='serve-image' alt='service'></img>
                    <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.4,
                        duration: 0.5
                    }}>Bulk SMS</motion.h3>

                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.04,
                    duration: 0.5
                }} className='service-two'>
                    <img src={Serve} className='serve-image' alt='service'></img>
                    <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.6,
                        duration: 0.5
                    }}>Short codes and USSD menus </motion.h3>

                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.04,
                    duration: 0.5
                }} className='service-three'>
                    <img src={Tels} className='serve-image' alt='service'></img>
                    <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.8,
                        duration: 0.5
                    }}>Interactive voice response</motion.h3>
                </motion.div>
            </div>

            <div className='choose-page'>
                <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{
                    opacity: 1,
                    x: 0
                }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.04,
                    duration: 0.5
                }}>Why choose us</motion.h2>

                <div className='choose-row'>
                    <div className='left-choose'>
                        <p>
                            We don't just offer bulk SMS, we are experts in it. Our connections with multiple carriers ensure industry-leading delivery rates, guaranteeing your messages reach the right inboxes
                            <br /><br />
                            Navigating SMS marketing regulations can be complex. We provide expert guidance to ensure your campaigns are compliant, while our dedicated support team is always there to answer your questions.
                        </p>

                        <Link to="/contact-us" element={<Contacts />} style={{ textDecoration: "none" }}>
                            <button className="about-butt">
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
                            <li> <HiOutlinePlus className='outline-plu' />Bulk SMS Expertise & High Deliverability Rates</li>
                            <li> <HiOutlinePlus className='outline-plu' />Compliance & Support You Can Trust</li>
                            <li> <HiOutlinePlus className='outline-plu' />Measurable Results & Campaign Optimization</li>
                        </ul>
                    </div>
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
                <h5>A team of passionate problem-solvers who think outside the box to provide the best services to our clients.</h5>
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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3>Olufemi Olumodeji</h3>
                                <h5 className='expert-hid'>Co-founder & CEO</h5>
                            </div>

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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3>Fidel Abowei</h3>
                                <h5 className='expert-hid'>CO-founder</h5>
                            </div>
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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3>Victory Ikuomola</h3>
                                <h5 className='expert-hid'>Tech Lead</h5>
                            </div>
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
