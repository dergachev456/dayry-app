import React from 'react'
import './CustomInput.scss'

export const CustomInput = ({ type, placeholder, onChange, className, value, onKeyPress }) => {
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            onKeyPress();
        }
    }
    return (
        <input
            className={`custom-input ${className}`}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            value={value}
            onKeyPress={handleKeyPress}
        />
    )
}

