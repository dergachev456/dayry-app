
import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({ children, onClick, className }) => {

    return (
        <button
            className={`custom-button ${className}`}
            onClick={onClick}>{children}
        </button>
    )
}
