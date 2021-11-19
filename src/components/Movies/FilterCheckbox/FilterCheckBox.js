import React from 'react'
import './FilterCheckBox.css'
import { useState } from 'react'

function FilterCheckBox() {
    const [isButtonActive, setIsButtonActive] = useState(false)

    function handleCheckBoxClick() {
        if(isButtonActive) {
            setIsButtonActive(false)
        } else setIsButtonActive(true)
    }

    return (
        <div className="filter-check-box">
            <div className={`filter-check-box__button-background ${isButtonActive ? "filter-check-box__button-background_active" : ""}`} onClick={handleCheckBoxClick}>
                <div className={`filter-check-box__button-handle ${isButtonActive ? "filter-check-box__button-handle_active" : ""}`}></div>
            </div>
            <p className="filter-check-box__subtitle">Короткометражки</p>
        </div> 
    )
}

export default FilterCheckBox
