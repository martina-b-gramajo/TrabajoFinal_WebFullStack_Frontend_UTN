import React, { useState } from 'react'
import './Input.css'

const Input = ({ label, name, type, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                <input
                    id={name}
                    name={name}
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {type === "password" && value && (
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i> }
                    </span>
                )}
            </div>
        </div>
    )
}

export default Input