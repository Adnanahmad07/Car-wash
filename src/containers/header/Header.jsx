import { useState, useEffect } from "react"
import './header.css'
import ImageSlider from '../../components/imageslider/ImageSlider.jsx'

import { Link } from 'react-router-dom';












const Header = () => {




    const [headings, setHeadings] = useState([
        "Expertz Car Wash",
        "Market Top",
        "Visit aur shop"
    ]);


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % headings.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [headings]);






    return (

        <div className='header' id="home">
            <div className="imagediv">
                <ImageSlider />
            </div>
            <div className="headlines">
                <h1>{headings[currentIndex]}</h1>
                <h5>"Welcome to Expertz Car Wash Company, your premier destination for top-quality car cleaning services in Amravati. Experience our meticulous attention to detail and commitment to excellence. Let us rejuvenate your vehicle and leave it sparkling clean, inside and out. Trust Expertz Car Wash Company for a pristine shine that lasts."</h5>

                <Link to="/sercices" className="link">SEE SEEVICES</Link>


            </div>



        </div>
    )
}

export default Header
