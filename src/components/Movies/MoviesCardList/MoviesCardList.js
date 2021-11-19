import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import pulpFictionMovie from '../../../images/pulp-fiction.jpg'

function MoviesCardList() {
    return (
        <div className="movies-card-list">
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
            <MoviesCard link={pulpFictionMovie} name="Pulp Fiction" length="2h 34m"/>
        </div>
    )
}

export default MoviesCardList
