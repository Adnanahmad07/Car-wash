import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import './contact.css'
import { FaMailBulk } from 'react-icons/fa'

const Contact = () => {
    const Year = new Date().getFullYear()
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to content before others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p><a href="tel:+918698680780">Make a Request Call</a>
                </p>
            </div>


            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    {/* <img src={gpt3logo} alt="" /> */}
                    <p>is a free-to-use make a call and know about your cury, our team contact you and solved your problem</p>
                </div>

                <div className="gpt3__footer-links-div">
                    {/* <h4>links</h4> */}
                    <div className='icon__div'>
                        <p><a href=""><FaWhatsapp size={25} /></a></p>
                        <p><FaInstagram size={25} /></p>
                        <p><FaTwitter size={25} /></p>
                        <p><FaMailBulk size={25} /></p>
                    </div>
                </div>

                <div className="gpt3__footer-links-div">
                    <h4>Company</h4>
                    <p>Teams & conditions</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="gpt3__footer-links-div">
                    <h4>Get in Tuch</h4>
                    <p>At 305, Platina E, Pallava Casa Bella gold, shilphata road, Dombivali (E), Mumbai, Maharashtra 421204, India.</p>
                    <p>(+91) 8698680780</p>
                    <p>supreme12.sil@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>{Year} &copy; xpertz. All Rights Reserved This Website Created by Softtronix</p>

            </div>
        </div>
    )

}


export default Contact