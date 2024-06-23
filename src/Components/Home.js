import React from 'react';
import Navbar from './Navbar';
import { FaArrowRightLong } from "react-icons/fa6";
import Ion from "../Assets/ion.png";
import Vec from "../Assets/vector.png";
import Love from "../Assets/love.png";
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Service from './Service';
import { TbReportAnalytics } from "react-icons/tb";
import { useEffect } from 'react';
import { color, easeIn, motion, useScroll } from "framer-motion";
import Cyber from "../Assets/cybersecurity.png";


const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "./Script.js";
        script.type = "text/jsx";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-contents'>
                <div className='page-one'>
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{
                        opacity: 1,
                        x: 0
                    }}
                        transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: .025,
                            duration: 0.35
                        }} className='home-text'>
                        <h4 style={{
                            color: "#223ac0",
                            fontWeight: 600
                        }}>Telecoms Value Added Service Aggregator</h4>

                        <h2 className='hoht'>Reach More, Engage Better.</h2>

                        <h2 className='hohta'>
                            Innovative <span style={{
                                color: "#083a8f",
                                display: 'inline-block',
                                wordWrap: 'break-word'
                            }}> VAS and Bulk SMS</span> Solutions for Nigeria
                        </h2>

                        <p style={{ color: "#ffffff", fontWeight: 500, marginTop: "1rem" }}>we empower businesses of all sizes to connect with their customers. Our cutting-edge VAS and Bulk SMS platforms are designed to streamline communication, boost engagement, and help you achieve your marketing goals.</p>

                        <div className='center-butt'>
                            <Link to="/services" element={<Service />} style={{ textDecoration: "none" }}>
                                <button className="conta">
                                    <span style={{
                                        marginRight: ".5rem"
                                    }}>
                                        Learn More
                                    </span> <FaArrowRightLong style={{
                                        marginTop: ".15rem"
                                    }} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: 100, opacity: 0 }} animate={{
                        opacity: 1,
                        x: 0
                    }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 1,
                        duration: 2
                    }} className='home-image'>
                    </motion.div>
                </div>

                <div className='header-one'>
                    <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.4,
                        duration: 3
                    }}>
                        Businesses trust us for a reason. From <span style={{ color: "#244886" }}>retail </span>and <span style={{ color: "#244886" }}>cyber security</span> to the <span style={{ color: "#244886" }}>financial sector</span>, we deliver results.
                    </motion.h3>
                </div>

                <div className='slider'>
                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='unit'>
                        <motion.img initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.04,
                            duration: 0.5
                        }} style={{
                            objectFit: "contain",
                            height: "4.5rem",
                            width: "30%",
                            maxWidth: "30%",
                            alignSelf: "center",
                            marginBottom: 0
                        }} src={Cyber} alt="cybersecurity" />
                        <h3>Reliability and Security</h3>
                        <p>Our infrastructure is built for maximum uptime and message delivery</p>
                    </motion.div>
                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.04,
                        duration: 0.5
                    }} className='unit'>
                        <motion.img initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.04,
                            duration: 0.5
                        }} style={{
                            objectFit: "contain",
                            height: "4.5rem",
                            width: "30%",
                            maxWidth: "30%",
                            alignSelf: "center"
                        }} src={Vec} alt="" />
                        <h3>Seamless integration</h3>
                        <p>We offer an effortless integration with our VAS and Bulk SMS platforms</p>
                    </motion.div>
                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} whileHover={{ scale: 1.12 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.02,
                        duration: 0.5
                    }} className='unit'>
                        <motion.img initial={{ y: -100, opacity: 0 }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.04,
                            duration: 0.5
                        }} style={{
                            objectFit: "contain",
                            height: "4.5rem",
                            width: "30%",
                            maxWidth: "30%",
                            alignSelf: "center"
                        }} src={Love} alt="" />
                        <h3>Expert support</h3>
                        <p>Our dedicated team is on hand to provide technical assistance whenever your business requires it</p>
                    </motion.div>

                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.02,
                        duration: 0.5
                    }} whileHover={{ scale: 1.12 }} className='unit'>
                        <TbReportAnalytics style={{
                            color: "#244886", height: "4.75rem",
                            width: "30%",
                            maxWidth: "30%",
                            alignSelf: "center"
                        }} />

                        <h3>Real-time reporting</h3>
                        <p>Track delivery status and gain valuable insights into your SMS campaigns</p>
                    </motion.div>
                </div>
            </div>
            <About />
            <Services />
            <Blog />
            <Contact />
            <Footer />
        </div >
    )
}

export default Home
