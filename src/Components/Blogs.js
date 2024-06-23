import React from 'react';
import Navbar from './Navbar';
import { FaPlusCircle } from "react-icons/fa";
import Elipses from "../Assets/elipses.png";
import { IoIosMore } from "react-icons/io";
import Contact from "./Contact";
import Footer from './Footer';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { saveSessionData } from './helpers/SessionHelper';



const Blogs = () => {
    const [mockdata, setMockdata] = useState([]);

    useEffect(() => {
        setData()
    }, [])

    async function setData() {
        try {
            await axios.get('http://127.0.0.1:8000/api/v1/blogs')
                .then((res) => {
                    console.log(res.data.data);
                    setMockdata(res.data.data);
                })
        } catch (error) {
            console.error(error);
        }
    }


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

            {mockdata !== 'undefined' && mockdata.map((blog, index) => {
                const blogID = blog.id
                return (
                    <motion.div key={index} whileHover={{ scale: 1.03 }} className='blogs-page-one'>
                        <div className='blog-one-row'>
                            <div className='bor-content'>
                                <div className='bor-content-row'>
                                    <img src={Elipses} className='elip' alt="elipses"></img>
                                    <h5 className='writer'>{blog.authorName}</h5>
                                    <h5 className='writer-two'>4 hours ago</h5>
                                </div>
                                <h3 className='new-sms' onClick={() => {
                                    saveSessionData('blogid', blogID)
                                    window.location.href = "http://localhost:3000/blogs/blog";
                                }}>{blog.topic} </h3>
                                <p className='new-sms-body' >
                                    {blog.body}
                                </p>
                            </div>
                            <div className='bor-image'>
                            </div>
                        </div>
                        <div className='last-bor'>
                            <div className='last-bor-one'>
                                <button className="dummy-button">
                                    {blog.category}
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

                );
            })}
            <Contact />
            <Footer />
        </div >
    )
}

export default Blogs
