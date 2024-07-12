
import "./contact.css"
import bgimg from '../../assets/pixelcut-export.png'
import { Link } from "react-router-dom"
import MapContainer from '../../components/map/Map.jsx'
import Message from '../../components/Message/Message.jsx'
import phone from '../../icons/phone-2.svg'
import bag from '../../icons/bag-2.svg'
import clock from '../../icons/clock-2.svg'
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { BiArrowFromRight } from "react-icons/bi"

const Contact = () => {
    return (<>
        <div className="bgimgcont">
            <img src={bgimg} alt="" />
            <div className="bgcont">
                <h3>CONTACT  <br /><span>U</span><span>S</span> </h3>
                <h6>Contact page</h6>
                <p>Welcome to the Exprtz Car Wash Contact Page! We're here to assist you with any questions, feedback, or service inquiries. Whether you need help with booking an appointment, have a query about our services, or want to provide feedback on your experience, our dedicated team is ready to help.</p>
                <Link to="/" className="home">
                    Go to Home &#8594;</Link>
            </div>
        </div>



        <div className="mapcontdiv">
            <div className="contactInfo">

                <h1>Contact us</h1>


                <div className="dd">
                    <img src={phone} alt="" />
                    <h2 className="hone">Call Us <br /><span>8698680780</span></h2>

                </div>


                <div className="dd">
                    <img src={bag} alt="" />

                    <h2 className="hone">E-mail<br /><span>supreme12.sil@gmail.com</span></h2>

                </div>

                <div className="dd">
                    <img src={clock} alt="" />

                    <h2 className="hone">working hourse<br /><span>
                        Mon-Sont 8:00am-11:00pm</span></h2>

                </div>


            </div>
            <div className="map">
                {/* <MapContainer /> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566.5918398186072!2d77.76102738988247!3d20.95234148210325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3446b8fc599%3A0xb1e071a4a52eed40!2sRangoli%20Wine%20Shop!5e0!3m2!1sen!2sin!4v1714251055031!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="mobmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566.5918398186072!2d77.76102738988247!3d20.95234148210325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3446b8fc599%3A0xb1e071a4a52eed40!2sRangoli%20Wine%20Shop!5e0!3m2!1sen!2sin!4v1714251055031!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="message_main-cont">
            <div>
                <h1>Drop Your Message</h1>
                <p>  We value your feedback and questions. Whether you have a query about our services, need assistance, or just want to share your thoughts, we are here to listen. Please fill out the form below with your details and message. Our team will get back to you as soon as possible. Your input helps us improve and provide you with the best experience. Don't hesitate to reach out. We're looking forward to hearing from you!</p>

                <span>Drop Here → </span>

            </div>
            <Message />
        </div>
    </>

    )
}

export default Contact