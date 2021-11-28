import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
    function convertLength(item) {
        let hours = Math.floor(item.duration / 60)
        let minutes = item.duration % 60
        return `${hours}h ${minutes}m`
    }

    return (
        <div className={`movies-card-list ${props.displayMovieCardList ? "movie-card-list_displayed" : ""}`}>
            {
                props.displayedMovieList.map((item, index) => {
                    return <MoviesCard
                        userSavedMovies={props.userSavedMovies}
                        apiDeleteMovie={props.apiDeleteMovie}
                        apiAddMovie={props.apiAddMovie}
                        handleTravel={props.handleTravel}
                        length={convertLength(item)}
                        movieData={item}
                        key={index}
                    />
                })
            }
        </div>
    )
}

export default MoviesCardList
