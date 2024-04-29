import { RiMenu3Line, RiCloseLIn, RiCloseLine, RiMenu3Fill } from 'react-icons/ri'
import React, { useState } from "react";
import './navbar.css'
import car from '../../assets/brandlogo.avif';
import { Link } from 'react-router-dom';




const Menu = () => {
    return (
        <>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/Aboutus">About</Link></p>
            <p><Link to="/product">Gallry</Link></p>
            <p><Link to="/sercices">Services</Link></p>
            <p><Link to="/Contactus">Contact</Link></p>
        </>
    )

}





const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>


            <div className='navbar__logo-container'>
                <img src={car} alt="logo" />
            </div>

            <div className="navbar__links-container">
                <Menu />
            </div>










            <div className="navbar__menu">


                {toggleMenu
                    ?
                    < RiCloseLine
                        color="#000000"
                        size={27}
                        onClick={() => { setToggleMenu(false) }}
                    />

                    :

                    < RiMenu3Fill
                        color="#000000"
                        size={27}
                        onClick={() => { setToggleMenu(true) }}
                    />
                }
                {toggleMenu && (

                    <div
                        className="navbar__menu-container  scale-up-center">
                        <Menu />

                    </div>
                )}
            </div>
















        </div>




















    )

}


export default Navbar