import React, { useEffect, useRef } from 'react';
import './Refar.css';
import Mobileimg from '../../assets/brandlogo.avif';
import { PiArrowDownDuotone } from 'react-icons/pi';
import { BsDownload } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdDeveloperBoard, MdDeveloperMode } from 'react-icons/md';
import { HiHomeModern } from 'react-icons/hi2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarWashPlans from '../../components/CarWashPlans/CarWashPlans';
import { FaCar } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Refar = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        gsap.fromTo(content,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className='refar'>
            <div className="refar__img-cont">
                <img src={Mobileimg} alt="" />
            </div>
            <div className="content-cont" ref={contentRef}>
                <div className="content_head-cont">
                    <p className='defalt'>WHAT'S GREAT ABOUT OUR APP</p>
                    <h1>Download our app and its easy use</h1>
                    <p>Platform for everyone and anyone to start earning within minutes & with no limits</p>
                </div>
                <div className="sabhead-cont">
                    <div className='sabhead__small-box'>
                        <div className='imgicon'>
                            <BsDownload size={73} color='#3dbbb5' fontWeight={800} />
                        </div>
                        <div className='word-div'>
                            <h6>Download it for free.</h6>
                            <p>Get your car sparkling clean with just a tap! Download our app now for exclusive deals, easy booking, and top-notch service. Enjoy convenience and quality, right at your fingertips!</p>
                        </div>
                    </div>
                    <div className='sabhead__small-box'>
                        <div className='imgicon'>
                            <CgProfile size={73} color='#3dbbb5' fontWeight={800} />
                        </div>
                        <div className='word-div'>
                            <h6>Make a Profile.</h6>
                            <p>Experience premium car care with Profile Car Wash! Download our app for easy bookings, exclusive deals, and top-notch service at your convenience</p>
                        </div>
                    </div>
                    <div className='sabhead__small-box'>
                        <div className='imgicon'>
                            <FaCar size={73} color='#3dbbb5' fontWeight={800} />
                        </div>
                        <div className='word-div'>
                            <h6>Xpertz Car Care Center</h6>
                            <p>Find the nearest service center in our app </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Refar;

