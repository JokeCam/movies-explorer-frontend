import React from 'react'
import './FilterCheckBox.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FilterCheckBox(props) {
    let location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/saved-movies') {
            if (props.checkLocalStorageForFilterCheckBoxValue()) {
                props.setFilterCheckBoxButtonActive(props.checkLocalStorageForFilterCheckBoxValue())
            }
        }
    }, [])

    function handleCheckBoxClick() {
        if (props.filterCheckBoxButtonActive) {
            props.setFilterCheckBoxButtonActive(false)
            if (location.pathname !== '/saved-movies') {
                props.addFilterCheckBoxValueToLocalStorage(false)
            }
        } else {
            props.setFilterCheckBoxButtonActive(true)
            if (location.pathname !== '/saved-movies') {
                props.addFilterCheckBoxValueToLocalStorage(true)
            }
        }
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
