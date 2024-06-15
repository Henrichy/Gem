import React, { useEffect, useState } from "react";
import Logo from "../Assets/logo.png";
import Arrow from "../Assets/vec.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, NavLink, useLocation } from "react-router-dom";
import Abouts from "./Abouts";
import Home from "./Home";
import Service from "./Service";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import Careers from "./Careers";
import { motion } from "framer-motion";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [cont, setCont] = useState(false);
    const location = useLocation();
    const path = location.pathname

    const setColorCont = () => {
        if (path === '/contact-us') {
            setCont(true)
        } else {
            setCont(false)
        }
    }

    useEffect(() => {
        setColorCont()
    }, [])

    const menuOptions = [
        {
            rut: "/",
            text: "Home",
            icon: <HomeIcon />,
            element: <Home />
        },
        {
            rut: "/about",
            text: "About",
            icon: <InfoIcon />,
            element: <Abouts />
        },
        {
            rut: "/services",
            text: "Services",
            icon: <CommentRoundedIcon />,
            element: <Service />
        },
        {
            rut: "/blog",
            text: "Blog",
            icon: <PhoneRoundedIcon />,
            element: <Blogs />
        },
        {
            rut: "/careers",
            text: "Career",
            icon: <ShoppingCartRoundedIcon />,
            element: <Careers />
        },
        {
            rut: "/contact-us",
            text: "Contact Us",
            icon: <ShoppingCartRoundedIcon />,
            element: <Contacts />
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <Link to="/" element={<Home />} style={{ textDecoration: "none" }}>
                    <img style={{
                        objectFit: "contain",
                        height: "3.5rem"
                    }} src={Logo} alt="" />
                </Link>

            </div>
            <div className="navbar-links-container">
                <NavLink to="/" element={<Home />}>
                    Home
                </NavLink>
                <NavLink to="/about" element={<Abouts />}>
                    About
                </NavLink>
                <NavLink to="/services" element={<Service />}>
                    Services
                </NavLink>
                <NavLink to="/blog" element={<Blogs />}>
                    Blog
                </NavLink>
                <NavLink to="/careers" >
                    Career
                </NavLink>
            </div>

            <div className="contact">
                <Link to="/contact-us" element={<Contacts />} style={{ textDecoration: "none" }}>
                    <button className={cont ? "contact-button-active" : "contact-button"}>
                        <span style={{
                            marginRight: ".5rem"
                        }}>
                            Contact Us
                        </span> <FaArrowRightLong style={{
                            marginTop: ".15rem"
                        }} />
                    </button>
                </Link>

                <motion.img initial={{ opacity: 0, scale: 0.02 }} whileInView={{ opacity: 1, scale: 1 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.08,
                    duration: 0.5
                }} style={{
                    objectFit: "contain",
                    height: "3.5rem",
                    marginBottom: "2rem"
                }} src={Arrow} alt=""></motion.img>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{
                        width: 250,
                        '& .MuiTypography-root': {
                            color: "#ffffff",
                            fontSize: "1rem",
                            fontFamily: "Montsterrat"
                        },

                        '& .MuiList-root': {
                            background: "#244886",
                            borderRadius: "12px"
                        },

                    }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <Link to={item.rut} element={item.element} style={{ textDecoration: "none" }}>
                                    <ListItemButton>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav >
    )
}

export default Navbar
