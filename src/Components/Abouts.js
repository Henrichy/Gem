import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Abouts = () => {
    return (
        <div className='abouts-container'>
            <Navbar />
            <div className='abouts-contents'>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.08,
                    duration: 0.5
                }} className='abouts-page-one'>
                    <h3 className='header-sam' >About us</h3>
                    <h4 className='header-sam-two' >We are the leading telecommunication innovation company in the Africa with 10+ years experience in the Industry</h4>
                    <p className='header-sam-p'>
                        Gemini eliminate the need for VAS providers and content owners to maintain multiple physical connections to mobile network operators (MNOs) by proving a single connection point.
                    </p>
                </motion.div>
                <div className='abouts-page-two'>
                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.08,
                        duration: 0.5
                    }} className='aptwo-image'></motion.div>
                    <div className='aptwo-contents'>
                        <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three'>
                            Dedicated Teams
                        </motion.h3>
                        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            At Gemini group, we believe that excellence is not just a goal – it's a journey. And on this journey, our dedicated teams stand as beacons of innovation, collaboration, and unwavering commitment to success.
                            Our dedicated teams are the heartbeat of our organization, tirelessly working towards achieving our goals, fulfilling our vision, and exceeding the expectations of our clients and partners. Bringing together individuals with diverse talents and backgrounds united by a common purpose.
                        </motion.p>
                    </div>
                </div>
                <div className='abouts-page-three'>
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.08,
                        duration: 0.5
                    }} className='apthree-image'></motion.div>
                    <div className='apthree-contents'>
                        <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three'>
                            Certified Professionals
                        </motion.h3>
                        <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            What does it mean to be certified by us? It signifies a dedication to mastery, a commitment to staying ahead of industry standards, and a passion for delivering exceptional results. Each member of our Certified Professionals has undergone rigorous training and testing to ensure they possess the knowledge and skills necessary to excel in their respective fields.
                            Whether it's in technology, our Certified Professionals are equipped to handle any challenge with confidence and proficiency.
                        </motion.p>
                    </div>
                </div>
                <div className='abouts-page-four'>
                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.08,
                        duration: 0.5
                    }} className='aptfour-image'></motion.div>
                    <div className='aptfour-contents'>
                        <motion.h3 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three'>
                            24/7 Support Service
                        </motion.h3>
                        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            What sets our 24/7 support team apart is not just their availability, but their unwavering commitment to excellence. Each member is highly trained, experienced, and equipped with the latest tools and resources to address your needs efficiently and effectively. From troubleshooting technical glitches to offering guidance and advice, our support team is dedicated to ensuring your satisfaction and success.
                        </motion.p>
                    </div>
                </div>
                <div className='abouts-blank'>
                </div>
                <Contact />
            </div>
            <Footer />
        </div >
    )
}

export default Abouts
