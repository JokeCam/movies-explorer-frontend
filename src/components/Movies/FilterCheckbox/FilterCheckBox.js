import React from 'react'
import './FilterCheckBox.css'

function FilterCheckBox(props) {
    function handleCheckBoxClick() {
        if(props.filterCheckBoxButtonActive) {
            props.setFilterCheckBoxButtonActive(false)
        } else props.setFilterCheckBoxButtonActive(true)
    }

    return (
        <div className="filter-check-box">
            <div className={`filter-check-box__button-background ${props.filterCheckBoxButtonActive ? "filter-check-box__button-background_active" : ""}`} onClick={handleCheckBoxClick}>
                <div className={`filter-check-box__button-handle ${props.filterCheckBoxButtonActive ? "filter-check-box__button-handle_active" : ""}`}></div>
            </div>
            <p className="filter-check-box__subtitle">Короткометражки</p>
        </div> 
    )
}

export default FilterCheckBox
