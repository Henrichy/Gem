import React from 'react';
import { useState } from 'react';
import Success from './Success';
import Note from "../Assets/sand.png";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fail from "../Assets/failed.png";
import axios from 'axios';
import Failed from "./Failed";
import Navbar from './Navbar';
import Footer from './Footer';


const Privacy = () => {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isFailedOpen, setIsFailedOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    async function onSubmit(e) {
        e.preventDefault();

        let url = `${process.env.REACT_APP_URL_NAME}/enquiries`;

        const userData = {
            name: name,
            email: email,
            phone_number: phone,
            message: message
        };

        axios.post(url, userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            setErrorMessage("")
            // console.log(response.data.message);
            setIsSuccessOpen(!isSuccessOpen);
        }).catch(error => {
            console.error(error)
            setErrorMessage(error.data.message)
        });
    };

    return (
        <div className='home-container'>
            <Navbar />
            <div className='privacy-contents'>
                <div style={{ display: "flex" }}>
                    <h2>Work In <span style={{
                        color: "#244886"
                    }}>Progress</span></h2><motion.img src={Note} animate={{ rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360] }} transition={{ repeat: Infinity, duration: 2.5 }} className='memo' alt="notepad"></motion.img>
                </div>

                <p className='contact-body'>
                    Please feel free to contact us to speak with one of our consultants. whether you are looking for our aggregator platform or seeking new ideas and solution to transform your telecommunication business
                </p>
            </div >
            <Footer />
        </div>
    )
}

export default Privacy
