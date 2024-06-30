import React from "react";
import { useState, useEffect } from "react";
import Elipses from "../Assets/elipses.png";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";


const Inblog = () => {
    const [mockdata, setMockdata] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const { blog } = useParams();

    useEffect(() => {
        setData();
    }, [])

    async function setData() {
        const URL = "http://127.0.0.1:8000/api/v1/blogs/" + blog;
        try {
            await axios.get(URL)
                .then((res) => {
                    setErrorMessage("")
                    // console.log(res.data.data);
                    setMockdata(res.data.data);
                })
        } catch (error) {
            // console.log(error.toJSON().message);
            setErrorMessage(error.toJSON().message)
        }
    }

    return (
        <div className='blogs-container'>
            <Navbar />
            <div className="blog-page">
                <h1 className="blogs-header">
                    {mockdata !== 'undefined' && mockdata.topic}
                </h1>
                <div className="author-div">
                    <div className='bor-con'>
                        <img src={Elipses} className='eli' alt="elipses"></img>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                            marginLeft: "1rem",
                            height: "2.65rem"
                        }}>
                            <h5 className='writes'>{mockdata.authorName}</h5>
                            <h5 className='writes-two'>{mockdata.dateCreated}</h5>
                        </div>
                    </div>
                </div>
                <div className='blog-hr'>
                </div>
                <img src={`http://127.0.0.1:8000/storage/${mockdata !== 'undefined' && mockdata.image}`} className='sms' alt="sms"></img>

                <p className="blog-write">
                    {mockdata !== 'undefined' && <FroalaEditorView model={mockdata.body} />}
                </p>

            </div>

            <Footer />
        </div>
    );
}

export default Inblog;