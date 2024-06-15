import React from 'react';
import Navbar from './Navbar';
import { FaPlusCircle } from "react-icons/fa";
import Elipses from "../Assets/elipses.png";
import { IoIosMore } from "react-icons/io";
import Contact from "./Contact";
import Footer from './Footer';
import { motion } from 'framer-motion';



const Blogs = () => {
    return (
        <div className='blog-container'>
            <Navbar />
            <div className='blog-page-one'>
                <div className='blog-header-one'>
                    <FaPlusCircle className='plus-circle' />
                    <motion.h5 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.0008,
                        duration: 0.9
                    }}>  Keep up with the latest in any topic</motion.h5>
                </div>

                <h3 className='newly'>Newly upload</h3>
                <div className='blog-hr'>
                </div>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} className='blogs-page-one'>
                <div className='blog-one-row'>
                    <div className='bor-content'>
                        <div className='bor-content-row'>
                            <img src={Elipses} className='elip' alt="elipses"></img>
                            <h5 className='writer'>Dr Fidel Abowei</h5>
                            <h5 className='writer-two'>4 hours ago</h5>
                        </div>
                        <h3 className='new-sms'>New development on SMS that you don't Know </h3>
                        <p className='new-sms-body' >
                            JavaScript continues to evolve and undergo new developments. Being a foundational language development, often sees updates and improvements in the form of new features, tools, and libraries. Here are some and developments in JavaScript that you might find interesting...
                        </p>
                    </div>
                    <div className='bor-image'>
                    </div>
                </div>
                <div className='last-bor'>
                    <div className='last-bor-one'>
                        <button className="dummy-button">
                            SMS
                        </button>
                        <h5 className='header-five'>3 min read</h5>
                        <h5 className='header-five'>Selected for you</h5>
                    </div>

                    <div className='last-bor-two'>
                        <IoIosMore style={{
                            marginRight: "4.8rem",
                            fontSize: "1.2rem"
                        }} />
                    </div>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className='blogs-page-one-end'>
                <div className='blog-one-row'>
                    <div className='bor-content'>
                        <div className='bor-content-row'>
                            <img src={Elipses} className='elip' alt="elipses"></img>
                            <h5 className='writer'>Dr Olufemi Olumodeji</h5>
                            <h5 className='writer-two'>4 hours ago</h5>
                        </div>
                        <h3 className='new-sms'>New SMS techniques for promotions</h3>
                        <p className='new-sms-body'>
                            JavaScript continues to evolve and undergo new developments. Being a foundational language development, often sees updates and improvements in the form of new features, tools, and libraries. Here are some and developments in JavaScript that you might find interesting...
                        </p>
                    </div>
                    <div className='bor-image'>
                    </div>
                </div>
                <div className='last-bor'>
                    <div className='last-bor-one'>
                        <button className="dummy-button">
                            SMS
                        </button>
                        <h5 className='header-five'>3 min read</h5>

                        <h5 className='header-five'>Selected for you</h5>
                    </div>

                    <div className='last-bor-two'>
                        <IoIosMore style={{
                            marginRight: "4.8rem",
                            fontSize: "1.2rem"
                        }} />
                    </div>
                </div>
            </motion.div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Blogs
