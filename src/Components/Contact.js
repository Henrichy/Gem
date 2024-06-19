import React from 'react';
import { useState } from 'react';
import Success from './Success';
import Note from "../Assets/memo.png";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fail from "../Assets/failed.png";
import axios from 'axios';
import Failed from "./Failed";


const Contact = () => {
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
            console.log(response.data.message);
            setIsSuccessOpen(!isSuccessOpen);
        }).catch(response => {
            console.log(response.response.data.message);
            setErrorMessage(response.response.data.message)
        });
    };

    return (
        <div className='contact-contents'>
            <div style={{ display: "flex" }}>
                <h2>Get In <span style={{
                    color: "#244886"
                }}>Touch</span></h2><motion.img src={Note} animate={{ rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360] }} transition={{ repeat: Infinity, duration: 2.5 }} className='memo' alt="notepad"></motion.img>
            </div>

            <p className='contact-body'>
                Please feel free to contact us to speak with one of our consultants. whether you are looking for our aggregator platform or seeking new ideas and solution to transform your telecommunication business
            </p>

            <form className='contact-form' onSubmit={onSubmit} action="/Contact.js" method="post">
                <label style={{
                    fontFamily: "poppins",
                    fontSize: "0.75rem",
                    color: "red"
                }}>*</label>
                <input type="text" placeholder='Name' name="fullname" required value={name} onChange={(e) => setName(e.target.value)} />
                <label style={{
                    fontFamily: "poppins",
                    fontSize: "0.75rem",
                    color: "red"
                }}>*</label>
                <input type="email" placeholder='Email' name="emailaddress" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label style={{
                    fontFamily: "poppins",
                    fontSize: "0.75rem",
                    color: "red"
                }}>*</label>
                <input type="tel" required placeholder='Phone number' name="phonenumber" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label style={{
                    fontFamily: "poppins",
                    fontSize: "0.75rem",
                    color: "#8D8D8D"
                }}>Message <span style={{ color: "red" }}>*</span></label>
                <input style={{
                    border: "none",
                    borderBottom: "1px solid #8D8D8D"
                }} type="text" placeholder='Write your message..' name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

                {/* {errorMessage && <div style={{ color: "#f56a6a", fontSize: "0.75rem", marginBottom: "0.5rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: errorMessage }}></div>} */}
                <input type="submit" value="Send Message " />
            </form>
            <Success isOpen={isSuccessOpen} onClose={
                () => {
                    setIsSuccessOpen(!isSuccessOpen)
                    window.location.reload(false)
                    window.scrollTo(0, 0);
                }
            }>
                <img src={Note} className='memo' alt="notepad"></img>
                <h3 className='over-head'>Thank you for contacting us!</h3>

                <p className='overlay-body'>
                    Your message has been received. An administrator will respond via the email provided
                </p>
                <button className='career-sub' onClick={
                    () => {
                        setIsSuccessOpen(!isSuccessOpen)
                        window.location.reload(false)
                        window.scrollTo(0, 0);
                    }
                }>close this window</button>
            </Success>

            <Failed isOpen={isFailedOpen} onClose={
                () => {
                    setIsFailedOpen(!isFailedOpen)
                    window.location.reload(false)
                    window.scrollTo(0, 0);
                }
            }>
                <img src={fail} className='memo' alt="notepad"></img>
                <h3 className='over-head'>Request Failed</h3>
                <p className='overlay-body'>
                    {errorMessage}
                </p>
                <button className='career-red' onClick={
                    () => {
                        setIsFailedOpen(!isFailedOpen)
                        window.location.reload(false)
                        window.scrollTo(0, 0);
                    }
                }>close this window</button>
            </Failed>
        </div >
    )
}

export default Contact
