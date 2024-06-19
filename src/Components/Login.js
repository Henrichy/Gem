import React from 'react';
import NavLogin from './NavLogin';
import Footer from './Footer';
import { useState } from 'react';
import eyeopen from '../Assets/eyeopen.png';
import eyeclosed from '../Assets/eyeclosed.png';
import { saveSessionData } from './helpers/SessionHelper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Failed from './Failed';
import fail from "../Assets/failed.png";


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isFailedOpen, setIsFailedOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    // const [emailError, setEmailError] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setErrorMessage("");
        setEmail(event.target.value);
    }

    const handlePass = (event) => {
        setErrorMessage("");
        setPassword(event.target.value);
    }

    async function handleSignUp(e) {

        e.preventDefault();

        let url = `${process.env.REACT_APP_URL_NAME}/login`;

        const userData = {
            email: email,
            password: password
        };

        axios.post(url, userData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            setErrorMessage("")
            saveSessionData('user', response.data.user);
            saveSessionData('token', response.data.token);
            console.log(response.status, response.data.token, response.data.message, response.data.user);
            window.location.href = "http://www.testadmin.geminigroupng.com/";
        }).catch(err => {
            const rat = err.response.data.message;
            console.error(err.response.data.message);
            // alert(rat);
            setErrorMessage(err.response.data.message)
            setIsFailedOpen(true);
        });
    };

    return (
        <div className='login-container'>
            <NavLogin />
            <div className='login-div'>
                <h2 className='login-head'> Gemini Engineering</h2>
                <form className='login-form' onSubmit={handleSignUp} action="/Login.js" method="post">
                    <h2 className='login-heads'> Sign in to your account</h2>
                    <label htmlFor="emailaddress" className='log-lab'>Your Email</label>
                    <input type="email" className='log-email' placeholder='name@company.com' name="emailaddress" required value={email} onChange={handleEmail} />
                    <label className='log-lab' htmlFor="password">Password</label>
                    <div className='pass-div'>
                        <input placeholder='password' name="password" className='log-pass' type={passwordVisible ? "text" : "password"} minlength="7" required value={password} onChange={handlePass} />
                        <img src={passwordVisible ? eyeclosed : eyeopen} alt="" onClick={togglePasswordVisibility} />
                    </div>

                    {/* {errorMessage && <div style={{ color: "#f56a6a", fontSize: "0.75rem", marginBottom: "0.5rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: errorMessage }}></div>} */}

                    <h5 className='loga-head'>Forgot password?</h5>

                    <input type="submit" value="Sign In" />
                </form>
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
            </div>
            <Footer />

        </div>
    )
}

export default Login
