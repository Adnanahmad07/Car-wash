import React from 'react'
import './Plans.css'
import CarWashPlans from '../../components/CarWashPlans/CarWashPlans'

const Plans = () => {
    return (
        <div className='Plan__container'>
            <h1>Plans</h1>
            <p> Our Plan, the blueprint for your vehicle care</p>
            <div className="sercices__plan-cont">
                <CarWashPlans />
            </div>
        </div>
    )
}

export default Plans