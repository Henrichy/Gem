import React from "react";
import { useState, useEffect } from "react";
import { getSessionData } from "./helpers/SessionHelper";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";



const Inblog = () => {
    const [mockdata, setMockdata] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const { blog } = useParams()


    useEffect(() => {
        setData();
    }, [])

    async function setData() {
        let blog = getSessionData('blogid')
        blog = parseInt(blog);
        const URL = "http://127.0.0.1:8000/api/v1/blogs/" + blog;
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

    return (
        <div className='careers-container'>
            <Navbar />
            <Footer />
        </div>
    );
}

export default Inblog;