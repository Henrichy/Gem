import React from 'react';
import Bl from '../Assets/blog2.jpg';
import Bl1 from '../Assets/blog1.jpg';
import { Link } from 'react-router-dom';
import Blogs from './Blogs';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <div className='blog-contents'>
            <motion.h1 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.08,
                duration: 1
            }} className='blog-header'>Blog</motion.h1>

            <div className='blog-slider'>
                <div className='blog-one'>
                    <Link to="/blog" element={<Blogs />} style={{ textDecoration: "none" }}>
                        <motion.img initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.0008,
                            duration: 0.9
                        }} className='blog-imaje' src={Bl1} alt="" />
                    </Link>

                    <div className='blog-details'>
                        <p>Jun 25, 2024</p>
                        <p style={{ cursor: "pointer" }}>Paul Delamo</p>
                    </div>

                    <div className='blog-title'>
                        <Link to="/blog" element={<Blogs />} style={{ textDecoration: "none" }}>
                            <motion.h4 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                delay: 0.0008,
                                duration: 0.9
                            }}>5 ways to leverage SMS messaging to accelerate business growth</motion.h4>
                        </Link>
                    </div>
                </div>
                <div className='blog-two'>
                    <Link to="/blog" element={<Blogs />} style={{ textDecoration: "none" }}>
                        <motion.img initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.0008,
                            duration: 0.9
                        }} className='blog-imaje' src={Bl} alt="" />
                    </Link>
                    <div className='blog-details'>
                        <p>Jun 25, 2024</p>
                        <p style={{ cursor: "pointer" }}>Paul Delamo</p>
                    </div>
                    <div className='blog-title'>
                        <Link to="/blog" element={<Blogs />} style={{ textDecoration: "none" }}>
                            <motion.h4 initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                delay: 0.0008,
                                duration: 0.9
                            }}>How international brands are fuelling local demand for messaging services</motion.h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog

