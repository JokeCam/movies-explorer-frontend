import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import pulpFictionMovie from '../../../images/pulp-fiction.jpg'

function MoviesCardList(props) {
    function convertLength(item) {
        let hours = Math.floor(item.duration / 60)
        let minutes = item.duration % 60
        return `${hours}h ${minutes}m`
    }

    return (
        <div className={`movies-card-list ${props.displayMovieCardList ? "movie-card-list_displayed" : ""}`}>
            {/* <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/> */}
            {
                props.displayedMovieList.map((item, index) => {
                    return <MoviesCard
                        userSavedMovies={props.userSavedMovies}
                        apiDeleteMovie={props.apiDeleteMovie}
                        apiAddMovie={props.apiAddMovie}
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
