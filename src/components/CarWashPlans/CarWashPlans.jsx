import React, { useState } from 'react';
import card1img from '../../assets/Screenshot 2024-04-18 010000.jpg';
import card2img from '../../assets/Screenshot 2024-04-18 010050.jpg';
import card3img from '../../assets/image3.jpg';
import './CarWashPlans.css'; // Make sure to include your CSS file
import { BiPauseCircle } from 'react-icons/bi';
import { SiPrime } from 'react-icons/si';
import { GiCardKingDiamonds } from 'react-icons/gi';
import { BsDiamond } from 'react-icons/bs';
import { FaCrown, FaDiamond } from 'react-icons/fa6';

const CarWashPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState('basic');

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    let planDetails;
    let bgColor;
    let btnColor;
    let planImage;

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
            break;
        default:
            planDetails = 'Please select a plan.';
            bgColor = '#fff';
            btnColor = '#000';
            planImage = null;
    }

    return (
        <div className="services__plan-cont" style={{ backgroundColor: bgColor, padding: '20px', borderRadius: '10px', width: '100%' }}>
            <div className="buttons" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <button
                    onClick={() => handlePlanChange('basic')}
                    style={{ backgroundColor: selectedPlan === 'basic' ? btnColor : '#ccc', color: '#fff', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Basic Plan
                </button>
                <button
                    onClick={() => handlePlanChange('premium')}
                    style={{ backgroundColor: selectedPlan === 'premium' ? btnColor : '#ccc', color: '#fff', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Premium Plan <FaDiamond />
                </button>
                <button
                    onClick={() => handlePlanChange('exclusive')}
                    style={{ backgroundColor: selectedPlan === 'exclusive' ? btnColor : '#ccc', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                >
                    Exclusive Plan <FaCrown />
                </button>
            </div>
            <div className="plan-details" style={{ color: '#333', fontSize: '16px', textAlign: 'center' }}>
                <img src={planImage} alt={`${selectedPlan} plan`} style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '10px' }} />
                {planDetails}
            </div>
        </div>
    );
};

export default CarWashPlans;
