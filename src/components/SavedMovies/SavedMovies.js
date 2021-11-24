import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import FilterCheckBox from '../Movies/FilterCheckbox/FilterCheckBox'
import PreLoader from '../Movies/Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { useState, useEffect } from 'react'

function SavedMovies(props) {
    const [filterCheckBoxButtonActive, setFilterCheckBoxButtonActive] = useState(false)
    const [displayedUserSavedMovies, setDisplayedUserSavedMovies] = useState([])
    const [userSavedMovies, setUserSavedMovies] = useState([])

    useEffect(() => {
        setUserSavedMovies(props.userSavedMovies)
        setDisplayedUserSavedMovies(props.userSavedMovies)
    }, [props.userSavedMovies])

    function searchMovies(evt) {
        evt.preventDefault()
        let filteredMovieList = []
        let name = evt.target[0].value
        userSavedMovies.forEach((item) => {
            if(item.nameRU.includes(name)) {
                if(!filterCheckBoxButtonActive) {
                    filteredMovieList.push(item)
                } else if (filterCheckBoxButtonActive && item.duration <= 40) {
                    filteredMovieList.push(item)
                }
            }
        })
        setDisplayedUserSavedMovies(filteredMovieList)
    }

    return (
        <div className="saved-movies">
            <SearchForm
                searchMovies={evt => searchMovies(evt)}
            />
            <FilterCheckBox
                filterCheckBoxButtonActive={filterCheckBoxButtonActive}
                setFilterCheckBoxButtonActive={setFilterCheckBoxButtonActive}
            />
            {/* <PreLoader /> */}
            <MoviesCardList
                displayedUserSavedMovies={displayedUserSavedMovies}
                apiDeleteMovie={props.apiDeleteMovie}
            />
        </div>
    )
}

export default SavedMovies
