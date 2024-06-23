import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { IoBagCheckSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GiOpenBook } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { WiDayFog } from "react-icons/wi";
import { RxDotFilled } from "react-icons/rx";
import { MdCloudUpload } from "react-icons/md";
import Success from './Success';
import Man from "../Assets/3dman.jpg";
import { motion } from 'framer-motion';
import errorImage from "../Assets/errorImage.png";
import axios from 'axios';
import { saveSessionData } from './helpers/SessionHelper';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import { getSessionData } from './helpers/SessionHelper';
import Failed from "./Failed";
import fail from "../Assets/failed.png";


const InCareer = () => {
    const [mockdata, setMockdata] = useState([]);
    const [resume, setResume] = useState('');
    const [cover, setCover] = useState('');
    const [resumename, setResumename] = useState('');
    const [covername, setCovername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFailedOpen, setIsFailedOpen] = useState(false);
    const navigate = useNavigate();
    const { value } = useContext(AppContext);
    const [jobid, setJobid] = value;


    useEffect(() => {
        setData()
    }, [])

    async function setData() {
        let job = getSessionData('jobid')
        job = parseInt(job);
        const URL = "http://127.0.0.1:8000/api/v1/jobs/" + job;
        try {
            await axios.get(URL)
                .then((res) => {
                    // const data = res.data.data;
                    setMockdata(res.data.data);
                })
        } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message)
        }
    }

    async function onSubmit(e) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_URL_NAME}/applicants`;
        const JobID = mockdata.id;


        const formData = new FormData();

        formData.append("first_name", firstname)
        formData.append("last_name", lastname)
        formData.append("email", email)
        formData.append("resume", resume)
        formData.append("job_id", JobID)
        // formData.append("job_title", "Office 365 Manager") //change to job_id
        formData.append("cover_letter", cover)

        await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            setErrorMessage("")
            console.log(response.data.message);
            setIsSuccessOpen(!isSuccessOpen);
        }).catch(err => {
            const rat = err.response.data.message;
            console.error(err.response.data.message);
            // alert(rat);
            setErrorMessage(err.response.data.message)
        });
    };

    const handleFile = (event) => {
        setErrorMessage("")
        if (event.target.files[0]) {
            setResumename(event.target.files[0].name)
            setResume(event.target.files[0]);
        }
    }

    const handleFiles = (event) => {
        setErrorMessage("")
        if (event.target.files[0]) {
            setCovername(event.target.files[0].name)
            setCover(event.target.files[0]);
        }
    }

    return (
        <div className='careers-container'>
            <Navbar />
            <div className='careers-page-tone'>
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='first-div'>
                    <h2 className='first-header'>{mockdata !== 'undefined' && mockdata.title}</h2>
                    <h4 className='second-header'>Who Are We Looking For</h4>
                    <ul className='first-list'>
                        <li> <RxDotFilled /> {mockdata !== 'undefined' && mockdata.description}</li>
                        <li> <RxDotFilled /> Nullam dictum ligula a gravida porta.</li>
                        <li> <RxDotFilled /> Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                        <li> <RxDotFilled /> Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                        <li> <RxDotFilled /> Nulla non enim eu quam rutrum dictum in non urna.</li>
                        <li> <RxDotFilled /> Integer et felis a purus convallis condimentum nec vel eros.</li>
                        <li><RxDotFilled /> Vestibulum porta libero nec aliquet blandit.</li>
                        <li> <RxDotFilled /> Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                        <li> <RxDotFilled /> Cras ut erat eu ante suscipit rutrum.</li>
                    </ul>

                    <h3 className='head-first'>
                        Educational Requirement
                    </h3>
                    <p className='body-first'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                    </p>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='second-div'>
                    <h4 className='third-header'>Job Summary</h4>
                    <div className='small-row'>
                        <IoBagCheckSharp className='check-sharp' />
                        <div className='small-col'>
                            <h5 className='fourth-header'>Job Type</h5>
                            <h5 className='fifth-header'>{mockdata !== 'undefined' && mockdata.employmentType}</h5>
                        </div>
                    </div>
                    <div className='small-row'>
                        <CiCalendarDate className='check-sharp' />
                        <div className='small-col'>
                            <h5 className='fourth-header'>Date Posted</h5>
                            <h5 className='fifth-header'>1 month ago</h5>
                        </div>
                    </div>
                    <div className='small-row'>
                        <GiOpenBook className='check-sharp' />
                        <div className='small-col'>
                            <h5 className='fourth-header'>Experience</h5>
                            <h5 className='fifth-header'>{mockdata !== 'undefined' && mockdata.experience} years</h5>
                        </div>
                    </div>
                    <div className='small-row'>
                        <BsClock className='check-sharp' />
                        <div className='small-col'>
                            <h5 className='fourth-header'>Working Hours</h5>
                            <h5 className='fifth-header'>9 AM - 6 PM</h5>
                        </div>
                    </div>
                    <div className='small-row'>
                        <WiDayFog className='check-sharp' />
                        <div className='small-col'>
                            <h5 className='fourth-header'>Working Days</h5>
                            <h5 className='fifth-header'>Weekly: 5 days</h5>
                            <h5 className='fifth-header'>Weekend: Saturday, Sunday</h5>
                        </div>
                    </div>
                </motion.div>
            </div>
            <form className='career-form' onSubmit={onSubmit}>
                <div className='career-rows'>
                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.9,
                        duration: 0.9
                    }} className='career-col'>
                        <label className='career-label' htmlFor='firstname'>First Name <span style={{
                            color: "red"
                        }}>*</span></label>
                        <input type="text" className='career-input' name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    </motion.div>

                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.5,
                        duration: 0.9
                    }} className='career-col'>
                        <label className='career-label' htmlFor='lastname'>Last Name <span style={{
                            color: "red"
                        }}>*</span></label>
                        <input type="text" className='career-input' name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    </motion.div>

                    <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        delay: 0.1,
                        duration: 0.9
                    }} className='career-col'>
                        <label className='career-label' htmlFor='emailaddress'>Email Address <span style={{
                            color: "red"
                        }}>*</span></label>
                        <input type="email" className='career-input' name="emailaddress" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </motion.div>
                </div>

                <div className='labow'>
                    <div className='labe'>
                        <label className='career-labels' htmlFor="input-file" >
                            Upload your resume <span style={{
                                color: "red"
                            }}>*</span>
                        </label>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.01,
                            duration: 0.09
                        }} className='file-div' onClick={() => document.querySelector(".input-file").click()}>
                            <input type='file' name='input-file' className='input-file' accept="application/pdf" onChange={handleFile} />
                            {
                                resumename ?
                                    <div>{resumename}</div> : <div className='file-divs'>
                                        <MdCloudUpload style={{ fontSize: "3rem", color: "#244886", marginBottom: 0 }} />
                                        <h3 className='file-upload'> Click to upload</h3>
                                    </div>
                            }
                        </motion.div>
                    </div>
                    <div className='labe'>
                        <label className='career-labels' htmlFor="cover-file" >
                            Add a Cover letter
                        </label>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            delay: 0.01,
                            duration: 0.09
                        }} className='file-div' onClick={() => document.querySelector(".cover-file").click()}>
                            <input type='file' name='cover-file' className='cover-file' accept="application/pdf" onChange={handleFiles} />
                            {
                                covername ?
                                    <div>{covername}</div> : <div className='file-divs'>
                                        <MdCloudUpload style={{ fontSize: "3rem", color: "#244886", marginBottom: 0 }} />
                                        <h3 className='file-upload'> Click to upload</h3>
                                    </div>
                            }
                        </motion.div>
                    </div>
                </div>

                {/* {errorMessage && <div style={{ color: "#f56a6a", fontSize: "1.5rem", marginBottom: "0.5rem", fontWeight: 600, alignSelf: "center", marginTop: "2rem" }} dangerouslySetInnerHTML={{ __html: errorMessage }}></div>} */}

                <input type='submit' value='Apply Now' />
            </form>

            <Success isOpen={isSuccessOpen} onClose={
                () => {
                    setIsSuccessOpen(!isSuccessOpen)
                    window.location.reload(false)
                    window.scrollTo(0, 0);
                }
            }>
                <img src={Man} className='man' alt="3dman"></img>
                <h3 className='over-head'>Thank you for applying!</h3>

                <p className='overlay-body'>
                    Your application and resume have been received. We will review your submission and contact you if there is a match with our requirements.
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
            <Footer />
        </div >
    )
}

export default InCareer
