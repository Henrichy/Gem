import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';


const Privacy = () => {
    return (
        <div className='hold-container'>
            <Navbar />
            <div className='privacy-contents'>
                <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    delay: 0.0008,
                    duration: 0.9
                }} className='head-on'>Privacy Policy</motion.h2>

                <h5 className='private-update'>Updated: 17th May 2023</h5>
                <p className='private-body'>
                    Gemini Engineering Consult Ltd values and respects the privacy of the people we deal with. Gemini
                    Engineering Consult Ltd is committed to protecting your privacy and complying with the requisite and
                    relevant laws of the Federal Republic of Nigeria as well as the International Best practices standards and
                    guidelines on data protection and privacy and other applicable privacy laws and regulations.
                </p>

                <p className='private-body'>
                    This Privacy Policy (Policy) describes how we (organization, sub-contractors and partners), collect, hold, use
                    and disclose your personal information, and how we maintain the quality and security of your personal
                    information.
                </p>

                <h5 className='private-head-two'>What is personal information</h5>
                <p className='private-body'>
                    “Personal information” means any information or opinion, whether true or not, and whether recorded in a
                    material form or not, about an identified individual or an individual who is reasonably identifiable. In general
                    terms, this includes information or an opinion that personally identifies you either directly (e.g. your name)
                    or indirectly.
                </p>
                <h5 className='private-head-two'>What personal information do we collect?</h5>
                <p className='private-body'>
                    The personal information we collect about you depends on the nature of your dealings with us or what you
                    choose to share with us.
                </p>
                <p className='private-overlist'>
                    The personal information we collect about you may include:
                </p>

                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />name</li>
                    <li><HiOutlinePlus className='outline-plu' />mailing or street address</li>
                    <li><HiOutlinePlus className='outline-plu' />date of birth</li>
                    <li><HiOutlinePlus className='outline-plu' />email address</li>
                    <li><HiOutlinePlus className='outline-plu' />phone number, e.t.c</li>
                </ul>

                <p className='private-body'>
                    Under certain circumstances, Gemini Engineering Consult Ltd may need to collect sensitive information
                    about you. This might include any information or opinion about your racial or ethnic origin, political opinions,
                    political association, religious or philosophical beliefs, membership of a trade union or other professional
                    body, sexual preferences, criminal record, or health information.
                </p>

                <p className='private-body'>
                    If we collect your sensitive information, we will do so only with your consent, if it is necessary to prevent a
                    serious and imminent threat to life or health, or as otherwise required or authorized by law, and we takeappropriate measures to protect the security of this information.
                </p>

                <p className='private-body'>
                    You do not have to provide us with your personal information. Where possible, we will give you the option
                    to interact with us anonymously or by using a pseudonym. However, if you choose to deal with us in this
                    way or choose not to provide us with your personal information, we may not be able to provide you with our
                    services or otherwise interact with you.
                </p>

                <h5 className='private-head-two'>How do we collect your personal information?</h5>

                <p className='private-overlist'>
                    We collect your personal information directly from you when you:
                </p>

                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />interact with us over the phone</li>
                    <li><HiOutlinePlus className='outline-plu' />interact with us in person</li>
                    <li><HiOutlinePlus className='outline-plu' />interact with us online</li>
                    <li><HiOutlinePlus className='outline-plu' />participate in surveys or questionnaires</li>
                    <li><HiOutlinePlus className='outline-plu' />attend a Gemini Engineering Consult Ltd event</li>
                    <li><HiOutlinePlus className='outline-plu' />subscribe to our mailing list</li>
                    <li><HiOutlinePlus className='outline-plu' />apply for a position with us as an employee, contractor or volunteer, e.t.c</li>
                </ul>

                <h5 className='private-head-two'>Collecting personal information from third parties</h5>

                <p className='private-body'>
                    We may also collect your personal information from third parties or through publicly available sources
                </p>

                <h5 className='private-head-two'>How do we use your personal information?
                </h5>

                <p className='private-overlist'>
                    We use personal information for many purposes in connection with our functions and activities, including the
                    following purposes:
                </p>

                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />provide you with information or services that you request from us</li>
                    <li><HiOutlinePlus className='outline-plu' />deliver to you a more personalised experience and service offering</li>
                    <li><HiOutlinePlus className='outline-plu' />improve the quality of the services we offer</li>
                    <li><HiOutlinePlus className='outline-plu' />internal administrative purposes</li>
                    <li><HiOutlinePlus className='outline-plu' />marketing and research purposes, e.t.c</li>
                </ul>

                <h5 className='private-head-two'>Disclosure of personal information to third parties
                </h5>
                <p className='private-overlist'>
                    We may disclose your personal information to third parties in accordance with this Policy in circumstances
                    where you would reasonably expect us to disclose your information. For example, we may disclose your
                    personal information to:
                </p>
                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />our third-party service providers (for example, our IT providers)</li>
                    <li><HiOutlinePlus className='outline-plu' />our marketing providers</li>
                    <li><HiOutlinePlus className='outline-plu' />our professional services advisors.</li>
                </ul>

                <h5 className='private-head-two'>Transfer of personal information overseas
                </h5>

                <p className='private-body'>
                    Some of the third-party service providers we disclose personal information to may be based in or have
                    servers located outside of Nigeria.
                </p>

                <p className='private-overlist'>
                    Where we disclose your personal information to third parties overseas, we will take reasonable steps to ensure that data security and appropriate privacy practices are maintained. We will only disclose to overseas third parties if:
                </p>

                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />you have given us your consent to disclose personal information to that third party; or</li>
                    <li><HiOutlinePlus className='outline-plu' />we reasonably believe that:</li>
                    <ul className='private-list-mini'>
                        <li> <HiOutlinePlus className='outline-plu' /> the overseas recipient is subject to a law or binding scheme that is, overall, substantially similar to the APPs; and</li>
                        <li> <HiOutlinePlus className='outline-plu' /> the law or binding scheme can be enforced; or</li>
                    </ul>
                    <li><HiOutlinePlus className='outline-plu' />the disclosure is required or authorized by a Nigerian law or court / tribunal order.</li>
                </ul>

                <h5 className='private-head-two'>How do we protect your personal information?
                </h5>

                <p className='private-overlist'>
                    Gemini Engineering Consult Ltd will take reasonable steps to ensure that the personal information that we
                    hold about you is kept confidential and secure, including by:
                </p>
                <ul className='private-list'>
                    <li><HiOutlinePlus className='outline-plu' />having a robust physical security of our premises and databases / records.</li>
                    <li><HiOutlinePlus className='outline-plu' />taking measures to restrict access to only personnel who need that personal information to effectively provide services to you</li>
                    <li><HiOutlinePlus className='outline-plu' />having technological measures in place (for example, anti-virus software, fire walls)</li>
                </ul>

                <h5 className='private-heads'>Online activity
                </h5>
                <h5 className='private-updates'>Cookies</h5>

                <p className='private-body'>
                    The Gemini Engineering Consult Ltd website uses cookies. A cookie is a small file of letters and numbers the
                    website puts on your device if you allow it. These cookies recognize when your device has visited our
                    website(s) before, so we can distinguish you from other users of the website. This improves your experience
                    and the Gemini Engineering Consult Ltd website(s).
                </p>

                <p className='private-body'>
                    We do not use cookies to identify you, just to improve your experience on our website(s). If you do not wish
                    to use the cookies, you can amend the settings on your internet browser so it will not automatically download
                    cookies. However, if you remove or block cookies on your computer, please be aware that your browsing
                    experience and our website’s functionality may be affected.
                </p>

                <p className='private-body'>
                    Our website uses various applications/software designed to help us better understand visitor traffic, so we
                    can improve our services. Although this data is mostly anonymous, it is possible that under certain
                    circumstances,we may connect it to you.
                </p>

                <p className='private-body'>
                    We may send you direct marketing communications and information about our services, opportunities, or
                    events that we consider may be of interest to you if you have requested or consented to receive such
                    communications.These communications may be sent in various forms, including mail, SMS, fax and email,
                    in accordance with applicable marketing laws. You consent to us sending you those direct marketing
                    communications by any of those methods. If you indicate a preference for a method of communication, we
                    will endeavour to use that method whenever practical to do so.
                </p>
                <p className='private-overlist'>
                    You may opt-out of receiving marketing communications from us at any time by; following the instructions to
                    “unsubscribe" set out in the relevant channel or contacting us via any of our social media platforms or
                    directly contacting us using our details below:
                </p>

                <ul className='private-li'>
                    <li> <span style={{ fontWeight: 500 }}>TEL: </span>+234-905-889-5393</li>
                    <li> <span style={{ fontWeight: 500 }}>EMAIL: </span>privacy@geminigroupng.com</li>
                    <li> <span style={{ fontWeight: 500 }}>OFFICE ADDRESS: </span>House D31, Dabah Homes Estate, Oladipo Diya Street, Kukwaba, Abuja</li>
                </ul>
                <p className='private-body'>
                    In addition, we may also use your personal information or disclose your personal information to third parties
                    for the purposes of advertising, including online behavioural advertising, website personalization, and to
                    provide targeted or retargeted advertising content to you (including through third party websites).
                </p>

                <h5 className='private-head-two'>Retention of personal information
                </h5>

                <p className='private-body'>
                    We will not keep your personal information for longer than we need to. In most cases, this means that we will
                    only retain your personal information for the duration of your relationship with us unless we are required to
                    retain your personal information to comply with applicable laws, for example record-keeping obligations.
                </p>

                <h5 className='private-head-two'>How to access and correct your personal information
                </h5>
                <p className='private-body'>
                    Gemini Engineering Consult Ltd will endeavour to keep your personal information accurate, complete and up to date.
                </p>
                <p className='private-body'>
                    If you wish to make a request to access and / or correct the personal information we hold about you, you should make a request by contacting us and we will usually respond within 24 working hours. We will deal with such a request by following our stipulated procedure.
                </p>

                <h5 className='private-head-two'>Links to third party sites
                </h5>
                <p className='private-body'>
                    Gemini Engineering Consult Ltd website(s) may contain links to websites operated by third parties. If you
                    access a third-party website through our website(s), personal information may be collected by that third party
                    website. We make no representations or warranties in relation to the privacy practices of any third-party
                    provider or website and we are not responsible for the privacy policies or the content of any third party
                    provider or website. Third party providers / websites are responsible for informing you about their own privacy
                    practices and we encourage you to read their privacy policies.
                </p>

                <h5 className='private-head-two'>Inquiries and complaints
                </h5>
                <p className='private-body'>
                    For complaints about how Gemini Engineering Consult Ltd handles, processes or manages your personaln information, please contact us via any of the medium provided earlier. Note, we may require proof of your identity and full details of your request before we can process your complaint.
                </p>

                <p className='private-body'>
                    Please allow up to 7 days for Gemini Engineering Consult Ltd to respond to your complaint. It will not always
                    be possible to resolve a complaint to everyone’s satisfaction. If you are not satisfied with Gemini Engineering
                    Consult Ltd.’s response to a complaint, you have the right to contact the Nigerian Communications
                    Commission to lodge a formal complaint.
                </p>

                <h5 className='private-head-two'>How to Contact Us
                </h5>
                <p className='private-overlist'>
                    If you have a question or concern in relation to our handling of your personal information or this Policy, you
                    can contact us for assistance as follows:
                </p>
                <ul className='private-li'>
                    <li> <span style={{ fontWeight: 500 }}>CONTACT NUMBER: </span>+234-905-889-5393</li>
                    <li> <span style={{ fontWeight: 500 }}>EMAIL: </span>privacy@geminigroupng.com</li>
                    <li> <span style={{ fontWeight: 500 }}>OFFICE ADDRESS: </span>House D31, Dabah Homes Estate, Oladipo Diya Street, Kukwaba, Abuja</li>
                </ul>





































            </div >
            <Footer />
        </div >
    )
}

export default Privacy
