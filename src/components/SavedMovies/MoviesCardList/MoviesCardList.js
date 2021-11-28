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
        <div className="saved-movies-card-list">
            {   
                props.displayedUserSavedMovies.map((item, index) => {
                    return <MoviesCard
                        apiDeleteMovie={props.apiDeleteMovie}
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
