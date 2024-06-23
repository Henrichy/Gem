import React from 'react';
import Navbar from './Navbar';
import { FaArrowRightLong } from "react-icons/fa6";
import Contact from './Contact';
import Footer from './Footer';
import { motion } from 'framer-motion';


const Service = () => {
    return (
        <div className='service-container'>
            <Navbar />
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-one'>
                <h3 className='service-header'>Our Services</h3>
                <h4 className='service-header-two'>We offer a wide variety of technology services</h4>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-two'>
                <h3 className='vas'>Value Added Service (VAS)</h3>
                <h4 className='eliminate'>We eliminate the need for VAS providers and content owners to maintain multiple physical connections to mobile network operators (MNOs) by proving a single connection point.</h4>
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-three'>
                <h3 className='vas-white'>SMS routing services</h3>
                <h4 className='eliminate-white'
                >We eliminate the need for VAS providers and content owners to maintain multiple physical connections to mobile network operators (MNOs) by proving a single connection point.</h4>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-four'>
                <h3 className='vas'>Telecom Consulting</h3>
                <h4 className='eliminate'
                >We eliminate the need for VAS providers and content owners to maintain multiple physical connections to mobile network operators (MNOs) by proving a single connection point.</h4>
            </motion.div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Service
