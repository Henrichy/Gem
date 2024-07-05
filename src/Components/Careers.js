import React from 'react';
import Navbar from './Navbar';
import Teamwork from "../Assets/teamss.png";
import { FaLocationDot } from "react-icons/fa6";
import Contact from './Contact';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Trusted from "../Assets/trusted.png";
import Learn from "../Assets/learn.png";
import Skills from "../Assets/skills.png";


const Careers = () => {
    const [mockdata, setMockdata] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setData()
    }, [])

    async function setData() {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/v1/jobs');
            const data = res.data.data;

            if (data.length === 0) {
                setErrorMessage("NO JOBS AVAILABLE");
                setMockdata([]); // Clear the mock data if no jobs are available
            } else {
                setErrorMessage("");
                setMockdata(data.reverse());
            }
        } catch (error) {
            //setErrorMessage(error.toJSON().message);
            setErrorMessage("NO JOBS AVAILABLE");

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
                    <h4 className='head-two' style={{color:'#083a8f'}}>Shape the Future with Us</h4>
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

                    <h3 className='head-three' style={{color:'#083a8f'}}>Why you Should Join Our Team</h3>
                    <p style={{
                      
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
                            <h4 className='head-four' style={{color:'#083a8f'}}>
                                One Team
                            </h4>
                            <p className='two-body' >Work alongside inspiring colleagues: Be part of a passionate team dedicated to pushing boundaries and achieving excellence. Contribute to meaningful work that shapes the future of our industry.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-two'>
                            <img className='team-work' src={Trusted} alt="teamwork"></img>
                            <h4 className='head-four' style={{color:'#083a8f'}}>
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
                            <h4 className='head-four' style={{color:'#083a8f'}}>
                                Learning and Development
                            </h4>
                            <p className='two-body'>
                                We encourage <strong>continuous learning:</strong> Our dynamic environment fosters a culture of innovation, mentorship and skill development.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='cpt-bone-two'>
                            <img className='team-work' src={Skills} alt="teamwork"></img>
                            <h4 className='head-four' style={{color:'#083a8f'}}>
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
                <motion.h2 initial={{ scale: 0.05 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 60, ease: "easeIn", delay: 0.0008, duration: 0.02 }} className='head-five' style={{color:'#083a8f'}}>Open Roles</motion.h2>
                {errorMessage ? (
                    <div>{errorMessage}</div>
                ) : (
                    mockdata !== undefined && mockdata.length > 0 ? (
                        mockdata.map((user, index) => {
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
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}>
                                        <h4 className='head-six'>{user.title}</h4>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}>
                                        <h5 className='head-seven'>Experience Level</h5>
                                        <h3 className='head-eight'>{user.experience}</h3>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
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
                                            flexDirection: "column",
                                            justifyContent: "center"
                                        }}>
                                            <h5 className='head-seven'>Location</h5>
                                            <h3 className='head-eight'>{user.location}</h3>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}>
                                        <button onClick={() => {
                                            window.location.href = `http://localhost:3001/careers/${job}`;
                                        }} className='apply-button'>
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div>Loading...</div>
                    )
                )}

            </div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Careers