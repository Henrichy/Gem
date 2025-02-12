import React from 'react';
import Navbar from './Navbar';
import { FaPlusCircle } from "react-icons/fa";
import Elipses from "../Assets/elipses.png";
import Lappy from "../Assets/lappy.png";
import { IoIosMore } from "react-icons/io";
import Contact from "./Contact";
import Footer from './Footer';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const Blogs = () => {
    const [mockdata, setMockdata] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setData()
    }, []);

    async function setData() {
        try {
            await axios.get('http://127.0.0.1:8000/api/v1/blogs')
                .then((res) => {
                    // console.log(res.data.data);
                    setMockdata(res.data.data.reverse());
                })
        } catch (error) {
            // console.log(error.toJSON().message);
            setErrorMessage(error.toJSON().message)
        }
    }

    return (
        <div className='blog-container'>
            <Navbar />

            <div className='blog-case-left'>
                <div className='blog-page-one'>
                    <h3 className='newly'>Stay ahead of the curve with our blog featuring expert insights, industry news, and upcoming events</h3>
                    <div className='blog-hr'>
                    </div>
                </div>

                {mockdata !== 'undefined' && mockdata.map((blog, index) => {
                    const blogID = blog.id
                    return (
                        <Link style={{ textDecoration: "none" }} key={index} to={`/blogs/${blogID}`} >
                            <motion.div whileHover={{ scale: 1.03 }} className='blogs-page-one'>
                                <div className='blog-one-row'>
                                    <div className='bor-content'>
                                        <div className='bor-content-row'>
                                            <img src={Elipses} className='elip' alt="elipses"></img>
                                            <h5 className='writer'>{blog.authorName}</h5>
                                        </div>
                                        <h3 className='new-sms'>{blog.topic} </h3>

                                        <p className='blog-summary'>
                                            <FroalaEditorView model={blog.summary} />...
                                        </p>
                                    </div>

                                    <img className='bor-image' src={`http://127.0.0.1:8000/storage/${blog.image}`} alt='lappy'></img>
                                </div>
                                <div className='last-bor'>
                                    <div className='last-bor-one'>
                                        <button className="dummy-button">
                                            {blog.category}
                                        </button>
                                        <h5 className='writer-two'>{blog.dateCreated}</h5>
                                        <h5 className='header-five'>3 min read</h5>
                                        <h5 className='header-five'>Selected for you</h5>
                                    </div>

                                    <div className='last-bor-two'>
                                        <IoIosMore style={{
                                            marginRight: "4.8rem",
                                            fontSize: "1.2rem",
                                            color: "black"
                                        }} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Blogs
