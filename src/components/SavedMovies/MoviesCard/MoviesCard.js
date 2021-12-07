import React from 'react'
import './MoviesCard.css'
import { useState } from 'react'
import closeIcon from '../../../images/close-icon.svg'

function MoviesCard(props) {
    const [displayDeleteButton, setDisplayDeleteButton] = useState(false)

    function handleDisplayDeleteButton() {
        setDisplayDeleteButton(true)
    }

    function handleHideDeletebutton() {
        setDisplayDeleteButton(false)
    }

    function handleDeleteMovie() {
        props.apiDeleteMovie(props.movieData._id)
    }

    return (
        <div className="saved-movies-card">
            <img className={`saved-movies-card__check-mark ${displayDeleteButton ? "saved-movies-card__check-mark_displayed" : ""}`} src={closeIcon} alt="Галочка указывающая на добавленный фильм"
                onClick={handleDeleteMovie}
                onMouseOver={handleDisplayDeleteButton}
                onMouseLeave={handleHideDeletebutton}
            />
            <img className="saved-movies-card__image" src={props.movieData.image} alt="Фото превью фильма"
                onClick={handleDeleteMovie}
                onMouseOver={handleDisplayDeleteButton}
                onMouseLeave={handleHideDeletebutton}
            />
            <div className="saved-movies-card__text-container">
                <h5 className="saved-movies-card__title">{props.movieData.nameRU}</h5>
                <div className="saved-movies-card__subtitle-container">
                    <p className="saved-movies-card__subtitle">{props.length}</p>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard
