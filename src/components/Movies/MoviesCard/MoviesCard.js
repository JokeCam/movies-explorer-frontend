import React from 'react'
import './MoviesCard.css'
import { useState } from 'react'
import checkMark from '../../../images/checkmark.svg'

function MoviesCard(props) {
    const [displayAddButton, setDisplayAddButton] = useState(false)
    const [displayCheckMark, setDisplayCheckMark] = useState(false)

    function handleDisplayAddButton() {
        if (!displayCheckMark) {
            setDisplayAddButton(true)
        }
    }

    function handleHideAddbutton() {
        setDisplayAddButton(false)
    }

    function handleAddMovie() {
        if (displayCheckMark) {
            setDisplayCheckMark(false)
            setDisplayAddButton(true)
        } else
        setDisplayCheckMark(true)
        setDisplayAddButton(false)
    }

    return (
        <div className="movies-card">
            <img className={`movies-card__check-mark ${displayCheckMark ? "movies-card__check-mark_displayed" : ""}`} src={checkMark} alt="Галочка указывающая на добавленный фильм"
            onClick={handleAddMovie}
            />
            <button className={`movies-card__button ${displayAddButton ? "movies-card__button_displayed" : ""}`}
                onClick={handleAddMovie}
                onMouseOver={handleDisplayAddButton}>
                Сохранить
            </button>
            <img className="movies-card__image" src={props.link} alt="Фото превью фильма"
                onClick={handleAddMovie}
                onMouseOver={handleDisplayAddButton}
                onMouseLeave={handleHideAddbutton}
            />
            <div className="movies-card__text-container">
                <h5 className="movies-card__title">{props.name}</h5>
                <div className="movies-card__subtitle-container">
                    <p className="movies-card__subtitle">{props.length}</p>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard
