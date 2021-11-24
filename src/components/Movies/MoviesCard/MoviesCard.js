import React from 'react'
import './MoviesCard.css'
import { useState, useEffect } from 'react'
import checkMark from '../../../images/checkmark.svg'

function MoviesCard(props) {
    const [displayAddButton, setDisplayAddButton] = useState(false)
    const [displayCheckMark, setDisplayCheckMark] = useState(false)

    const [apiMovieId, setApiMovieId] = useState('')

    useEffect(() => {
        props.userSavedMovies.forEach((item) => {
            if (item.movieId === props.movieData.id) {
                setDisplayCheckMark(true)
                setDisplayAddButton(false)
                setApiMovieId(item._id)
            }
        })
    }, [props.movieData, props.userSavedMovies])

    async function handleSaveMovie() {
        if(!displayCheckMark){
            console.log(props.movieData)
            props.apiAddMovie(props.movieData)
            .then(res => setApiMovieId(res._id))
            .catch(err => console.log(err))
            setDisplayCheckMark(true)
            setDisplayAddButton(false)
        } else {
            props.apiDeleteMovie(apiMovieId)
            setDisplayCheckMark(false)
            setDisplayAddButton(true)
        }
    }

    function handleDisplayAddButton() {
        if (!displayCheckMark) {
            setDisplayAddButton(true)
        }
    }

    function handleHideAddbutton() {
        setDisplayAddButton(false)
    }

    return (
        <div className="movies-card">
            <img className={`movies-card__check-mark ${displayCheckMark ? "movies-card__check-mark_displayed" : ""}`} src={checkMark} alt="Галочка указывающая на добавленный фильм"
                onClick={handleSaveMovie}
            />
            <button className={`movies-card__button ${displayAddButton ? "movies-card__button_displayed" : ""}`}
                onClick={handleSaveMovie}
                onMouseOver={handleDisplayAddButton}>
                Сохранить
            </button>
            <img className="movies-card__image" src={`https://api.nomoreparties.co${props.movieData.image.url}`} alt="Фото превью фильма"
                onClick={handleSaveMovie}
                onMouseOver={handleDisplayAddButton}
                onMouseLeave={handleHideAddbutton}
            />
            <div className="movies-card__text-container">
                <h5 className="movies-card__title">{props.movieData.nameRU}</h5>
                <div className="movies-card__subtitle-container">
                    <p className="movies-card__subtitle">{props.length}</p>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard
