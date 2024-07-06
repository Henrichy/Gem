import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { FaArrowRightLong } from "react-icons/fa6";
import Contact from './Contact';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Bulksmss from '../Assets/bulksmss.jpg'
import Shortcodee from '../Assets/shortcodee.png'
import ussdmenus from '../Assets/USSDmenus.png'
import { MdKeyboardArrowRight } from "react-icons/md";


const Service = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    return (
        <div className='service-container'>
            <Navbar />
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-one'>
                <h3 className='service-header'>Services</h3>
                <h4 className='service-header-two'>We empower businesses to connect with their audiences through innovative mobile technologies.</h4>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 130 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 1.2
            }} className='service-page-two' id="bulk-sms">
                <div>
                    <h3 className='vas'>Bulk SMS</h3>
                    <h4 className='eliminate'>Send targeted text messages to large groups instantly with our promotional and transactional bulk SMS service.</h4>
                    <ul className='serve-list'>
                        <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Brand awareness campaigns</li>
                        <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Marketing campaigns</li>
                        <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Account verification (One time password)</li>
                        <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Business communications</li>
                    </ul>
                </div>
                <div style={{ width: '58rem', height: '100%' }} >
                    <img className='serveimg-one'src={Bulksmss} alt='' />
                </div>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='serveimg'>
                <img className='serveimg-two' style={{ width: '58rem', height: '100%' }} src={Bulksmss} alt='' />
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-three' id='vas'>
                <h3 className='vas-white'>Value Added Services (VAS)</h3>
                <h4 className='eliminate-white'>Go beyond basic messaging. We offer a range of interactive solutions like:</h4>
                <div className='shortCodes'>
                    <div>
                <h4 className='vas-white-mini'>Short codes</h4>
                <h5 className='eliminate-white-mini'>Establish a dedicated mobile number for customers to easily interact with your brand through SMS keywords.</h5>

                <ul className='serve-list-white'>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Schedule appointments
                    </li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Run contests</li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Conduct surveys, or receive feedback</li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Send reminders</li>
                </ul>
                <h4 className='vas-white-mini'>USSD Menus</h4>
                <h5 className='eliminate-white-mini'>Create user-friendly menus accessed directly through a phone dial</h5>

                <ul className='serve-list-white'>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Deliver account information</li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Manage subscriptions</li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Offer mobile ticketing services</li>
                    <li><MdKeyboardArrowRight style={{ color: "#000000" }} /> Public service delivery</li>
                </ul>
                </div>
                <img style={{height:'14em'}} src={Shortcodee} alt=''/>
                </div>
            
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-two' id='ivr'>
                <div className='ussdmenus'>
                <div className='ussdmenus-text'>
                <h3 className='vas'>Interactive Voice Response (IVR):</h3>
                <h4 className='eliminate'
                > Develop<strong> automated phone systems</strong> that guide callers through self-service options or connect them to the right department:
                </h4>
                <ul className='serve-list'>
                    <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Enhance customer service efficiency</li>
                    <li><MdKeyboardArrowRight style={{ color: "#ffffff" }} /> Reduce call centre workload</li>
                </ul>
                </div>
                <img className='menusclass-one' style={{height:'10em'}} src={ussdmenus} alt=''/>
                </div>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='menusclass-two'>
            <img style={{height:'12em',}} src={ussdmenus} alt=''/>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                delay: 0.0008,
                duration: 0.9
            }} className='service-page-three' id='srs'>
                <h3 className='vas-white'>SMS Reseller Solution</h3>
                <h4 className='eliminate-white'
                > <strong>Unlock a new revenue stream!</strong> Become a BulkSMS Reseller and start profiting today. Buy SMS credits in bulk at discounted rates, then resell them to your customers for a tidy profit. It's a win-win! Our reseller solution helps you to become a one-stop shop for businesses needing reliable and cost-effective bulk SMS solutions.
                </h4>
            </motion.div>

            <Contact />
            <Footer />
        </div >
    )
}

export default Service
