import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import FilterCheckBox from '../Movies/FilterCheckbox/FilterCheckBox'
import PreLoader from '../Movies/Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'

function SavedMovies() {
    return (
        <div className="saved-movies">
            <SearchForm />
            <FilterCheckBox />
            {/* <PreLoader /> */}
            <MoviesCardList />
        </div>
    )
}

export default SavedMovies
