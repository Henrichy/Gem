import React from 'react';
import Navbar from './Navbar';
import Teamwork from "../Assets/teamss.png";
import { FaLocationDot } from "react-icons/fa6";
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import InCareer from './InCareer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../App';
import { saveSessionData } from './helpers/SessionHelper';
import Trusted from "../Assets/trusted.png";
import Learn from "../Assets/learn.png";
import Skills from "../Assets/skills.png";


const Careers = () => {
    const [mockdata, setMockdata] = useState([]);
    const { value } = useContext(AppContext);
    const [jobid, setJobid] = value;


    useEffect(() => {
        setData()
    }, [])

    async function setData() {
        try {
            await axios.get('http://127.0.0.1:8000/api/v1/jobs')
                .then((res) => {
                    // res.json()
                    const data = res.data.data;
                    // console.log(res.data)
                    setMockdata(res.data.data);
                })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='careers-container'>
            <Navbar />
            <div className='careers-page-one'>
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='page-one-content'>
                    <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.0008,
                        duration: 0.9
                    }} className='head-one'>Career at Gemini</motion.h2>
                    <h3 className='head-two'>Shape the Future with Us</h3>
                    <p className='one-body'>
                        <strong>Are you a passionate individual who thrives in a collaborative environment? </strong>Do you seek constant learning and growth opportunities? Then look no further! At Gemini we are constantly searching for passionate and talented individuals to help us drive innovation and make real impact.
                    </p>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='page-one-image'>
                </motion.div>
            </div>

            <div className='careers-page-two'>
                <div className='cpt-side-a'>

                    <h3 className='head-three'>Why you Should Join Our Team</h3>
                    <p style={{
                        fontFamily: "Rubik",
                        fontSize: ".88rem",
                        color: "#001833",
                        marginBottom: "1rem"
                    }}>Be part of the future – join our team of forward-thinking professionals.</p>
                </div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='cpt-side-b'>
                    <div className='cpt-bone'>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-one'>
                            <img className='team-work' src={Teamwork} alt="teamwork"></img>
                            <h4 className='head-four'>
                                One Team
                            </h4>
                            <p className='two-body' >Work alongside inspiring colleagues: Be part of a passionate team dedicated to pushing boundaries and achieving excellence. Contribute to meaningful work that shapes the future of our industry.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-two'>
                            <img className='team-work' src={Trusted} alt="teamwork"></img>
                            <h4 className='head-four'>
                                Career Growth
                            </h4>
                            <p className='two-body'>
                                <strong>Fuel your career growth:</strong> We invest in our people, providing opportunities for professional development and advancement.
                            </p>
                        </motion.div>

                    </div>
                    <div className='cpt-btwo'>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-one'>
                            <img className='team-work' src={Learn} alt="teamwork"></img>
                            <h4 className='head-four'>
                                Learning and Development
                            </h4>
                            <p className='two-body'>
                                We encourage <strong>continuous learning:</strong> Our dynamic environment fosters a culture of innovation, mentorship and skill development.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-two'>
                            <img className='team-work' src={Skills} alt="teamwork"></img>
                            <h4 className='head-four'>
                                Flexibility
                            </h4>
                            <p className='two-body'>
                                Your work style, your way: We offer a range of flexible benefits so you can design a work schedule that fits your life
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div >

            <div className='careers-page-three'>
                <motion.h2 initial={{ scale: 0.05 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 60, ease: "easeIn", delay: 0.0008, duration: 0.02 }} className='head-five'>Open Roles</motion.h2>

                {mockdata !== 'undefined' && mockdata.map((user, index) => {
                    const job = user.id;
                    return (
                        <motion.div key={index} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.0008,
                            duration: 0.9
                        }} className='role-one'>
                            <div style={{
                                display: "flex",
                                flexDirection: "Column",
                                justifyContent: "center"
                            }}>
                                <h4 className='head-six'>{user.title}</h4>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "Column",
                                justifyContent: "center"
                            }}>
                                <h5 className='head-seven'>Experience Level</h5>
                                <h3 className='head-eight'>{user.experience}</h3>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "Column",
                                justifyContent: "center"
                            }}>
                                <h5 className='head-seven'>Deadline</h5>
                                <h3 className='head-eight'>{user.deadline}</h3>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <FaLocationDot className='location-dot' />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "Column",
                                    justifyContent: "center"
                                }}>
                                    <h5 className='head-seven'>Location</h5>
                                    <h3 className='head-eight'>{user.location}</h3>
                                </div>
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "Column",
                                justifyContent: "center"
                            }}>
                                <button onClick={() => {
                                    saveSessionData('jobid', job)
                                    window.location.href = "http://localhost:3000/careers/career";

                                }} className='apply-button'>
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    );
                })}

                {/*  */}
            </div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Careers