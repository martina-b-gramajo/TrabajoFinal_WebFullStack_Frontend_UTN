import React from 'react'
import './Button.css'

const Button = ({ label, variant, onClick, disabled }) => {
    return (
        <button
            className={`btn-${variant}`}
            onClick={onClick}
            disabled={disabled} 
        >
            {label}
        </button>
    )
}

export default Button
