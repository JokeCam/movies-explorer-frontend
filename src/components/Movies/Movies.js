import React from 'react'
import './Movies.css'
import SearchForm from './SearchForm/SearchForm'
import FilterCheckBox from './FilterCheckbox/FilterCheckBox'
import PreLoader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies() {
    return (
        <div className="movies">
            <SearchForm />
            <FilterCheckBox />
            {/* <PreLoader /> */}
            <MoviesCardList />
            <button className="movies__button">Ещё</button>
        </div>
    )
}

export default Movies
