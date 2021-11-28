import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import FilterCheckBox from '../Movies/FilterCheckbox/FilterCheckBox'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function SavedMovies(props) {
    const [filterCheckBoxButtonActive, setFilterCheckBoxButtonActive] = useState(false)
    const [displayedUserSavedMovies, setDisplayedUserSavedMovies] = useState([])
    const [displayNotFoundMsg, setDisplayNotFoundMsg] = useState(false)
    const [userSavedMovies, setUserSavedMovies] = useState([])
    const userContext = useContext(CurrentUserContext)

    useEffect(() => {
        let currentUserSavedMovies = []
        props.userSavedMovies.forEach((item) => {
            if(item.owner === userContext._id) {
                currentUserSavedMovies.push(item)
            }
        })
        setUserSavedMovies(props.userSavedMovies)
        setDisplayedUserSavedMovies(currentUserSavedMovies)
    }, [props.userSavedMovies, userContext._id])


    function searchMovies(evt) {
        let filteredMovieList = []
        let regex = new RegExp(evt.target[0].value, "ig")
        userSavedMovies.forEach((item) => {
            if (item.nameRU.search(regex) > -1) {
                if (!filterCheckBoxButtonActive) {
                    filteredMovieList.push(item)
                } else if (filterCheckBoxButtonActive && item.duration <= 40) {
                    filteredMovieList.push(item)
                }
            }
        })
        setDisplayedUserSavedMovies(filteredMovieList)
        if (!filteredMovieList.length > 0) {
            setDisplayNotFoundMsg(true)
        } else {
            setDisplayNotFoundMsg(false)
        }
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
            <h4 className={`saved-movies__not-found-msg ${displayNotFoundMsg ? "saved-movies__not-found-msg_displayed" : ""}`}>Ничего не найдено</h4>
        </div>
    )
}

export default SavedMovies
