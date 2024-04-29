
import React from "react"
import './button.css'
import { Link } from 'react-router-dom';


const Button = (props) => {
    return (
        <button className="mybnt"><Link to='/sercices'>{props.text}</Link></button>

    )
}

export default Button