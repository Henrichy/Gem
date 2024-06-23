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
                    <h4 className='header-sam-two' >We are a blend of young professionals with a strong work ethic and a collaborative spirit. We're dedicated to maintaining reliable SMS infrastructure, expanding our customer base, and helping businesses achieve their goals.</h4>
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
                            Easy set up
                        </motion.h3>
                        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            We prioritize getting you started fast! Our streamlined onboarding process involves signing your contract, whitelisting your Sender ID (if applicable), and integrating our user-friendly platform. Throughout this process, our dedicated technical support team is by your side, ensuring a smooth setup. Their commitment to excellent service delivery means you'll be sending impactful SMS campaigns with confidence in no time.
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
                            Reliable software and high delivery rates                        </motion.h3>
                        <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            Our Bulk SMS and VAS platforms takes care of the heavy lifting, ensuring your messages reach their target audience with unmatched reliability. No need to worry about message failures or technical hiccups. Instead, focus on crafting maximizing the engagement you deserve. With us, you're guaranteed a smooth and stress-free experience
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
                            Competitive Pricing
                        </motion.h3>
                        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.08,
                            duration: 0.5
                        }} className='header-sam-three-p'>
                            Stretch your marketing budget further with our cost-effective bulk SMS solutions. We meticulously analyse competitor pricing and adjust ours to ensure you get the best value. This commitment to affordability means you can reach more customers without breaking the bank.
                        </motion.p>
                    </div>
                </div>
                <div className='abouts-blank'>
                </div>

            </div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Abouts
