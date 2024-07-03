import React, { useState } from 'react';
import card1img from '../../assets/Screenshot 2024-04-18 010000.jpg';
import card2img from '../../assets/Screenshot 2024-04-18 010050.jpg';
import card3img from '../../assets/image3.jpg';
import './CarWashPlans.css'; // Make sure to include your CSS file
import { FaCrown, FaDiamond } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';

const CarWashPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState('basic');

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    let planDetails;
    let bgColor;
    let btnColor;
    let planImage;
    let whatsappMessage;

    switch (selectedPlan) {
        case 'basic':
            planDetails = (
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt.</li>
                    <li>Ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam.</li>
                    <li>Quis nostrud exercitation ullamco.</li>
                    <li>Laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Duis aute irure dolor in reprehenderit.</li>
                    <li>In voluptate velit esse cillum dolore.</li>
                    <li>Eu fugiat nulla pariatur.</li>
                </ul>
            );
            bgColor = '#f0f0f0';
            btnColor = '#7d7d7d';
            planImage = card1img;
            whatsappMessage = "I am interested in the Basic Car Wash Plan.";
            break;
        case 'premium':
            planDetails = (
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt.</li>
                    <li>Ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam.</li>
                    <li>Quis nostrud exercitation ullamco.</li>
                    <li>Laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Duis aute irure dolor in reprehenderit.</li>
                    <li>In voluptate velit esse cillum dolore.</li>
                    <li>Eu fugiat nulla pariatur.</li>
                </ul>
            );
            bgColor = '#d0e6f5';
            btnColor = '#337ab7';
            planImage = card2img;
            whatsappMessage = "I am interested in the Premium Car Wash Plan.";
            break;
        case 'exclusive':
            planDetails = (
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt.</li>
                    <li>Ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam.</li>
                    <li>Quis nostrud exercitation ullamco.</li>
                    <li>Laboris nisi ut aliquip ex ea commodo.</li>
                    <li>Duis aute irure dolor in reprehenderit.</li>
                    <li>In voluptate velit esse cillum dolore.</li>
                    <li>Eu fugiat nulla pariatur.</li>
                </ul>
            );
            bgColor = '#ffd700';
            btnColor = '#ff4500';
            planImage = card3img;
            whatsappMessage = "I am interested in the Exclusive Car Wash Plan.";
            break;
        default:
            planDetails = 'Please select a plan.';
            bgColor = '#fff';
            btnColor = '#000';
            planImage = null;
            whatsappMessage = '';
    }

    return (
        <div className="services__plan-cont" style={{ backgroundColor: bgColor, padding: '20px', borderRadius: '10px', width: '100%' }}>
            <div className="buttons" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <button
                    onClick={() => handlePlanChange('basic')}
                    style={{ backgroundColor: selectedPlan === 'basic' ? btnColor : '#fff', color: '#000', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Basic Plan
                </button>
                <button
                    onClick={() => handlePlanChange('premium')}
                    style={{ backgroundColor: selectedPlan === 'premium' ? btnColor : '#fff', color: '#000', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Premium Plan <FaDiamond />
                </button>
                <button
                    onClick={() => handlePlanChange('exclusive')}
                    style={{ backgroundColor: selectedPlan === 'exclusive' ? btnColor : '#FFF', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Exclusive Plan <FaCrown />
                </button>
            </div>
            <div className="plan-details" style={{ color: '#333', fontSize: '16px', textAlign: 'center' }}>
                <img src={planImage} alt={`${selectedPlan} plan`} style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '10px' }} />
                {planDetails}
            </div>
            <div className="whatsapp-button" style={{ textAlign: 'center', marginTop: '20px' }}>
                <a
                    href={`https://wa.me/919356668159?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#25D366', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                >
                    Contact Us on WhatsApp <BsWhatsapp style={{ marginLeft: '10px' }} />
                </a>
            </div>
        </div>
    );
};

export default CarWashPlans;
