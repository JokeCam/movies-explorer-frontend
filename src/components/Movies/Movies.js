import React from 'react'
import './Movies.css'
import SearchForm from './SearchForm/SearchForm'
import FilterCheckBox from './FilterCheckbox/FilterCheckBox'
import PreLoader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { useState, useEffect } from 'react'

function Movies(props) {
    const isCurrentWindowWideScreen = window.matchMedia('(min-width: 1280px)').matches
    // check if current window size is a widescreen and use it to display movie cards accordingly

    const [searchMovieList, setSearchMovieList] = useState([])
    const [displayedMovieList, setDisplayedMovieList] = useState([])

    const [filterCheckBoxButtonActive, setFilterCheckBoxButtonActive] = useState(false)

    const [displayPreloader, setDisplayPreloader] = useState(false)
    const [displayMovieCardList, setDisplayMovieCardList] = useState(false)
    const [displayNotFoundMsg, setDisplayNotFoundMsg] = useState(false)
    const [displayMoreButton, setDisplayMoreButton] = useState(false)

    useEffect(() => {
        if (props.checkLocalStorageForSearchedMovies()) {
            addMoviesToDisplay(props.checkLocalStorageForSearchedMovies())
            setDisplayMovieCardList(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // check if there are searched movie cards in the local storage(and display them)

    useEffect(() => {
        if (searchMovieList.length > displayedMovieList.length) {
            setDisplayMoreButton(true)
        } else setDisplayMoreButton(false)
    }, [displayedMovieList, searchMovieList])
    // wait for dependencies to change and check if "more button" should be displayed and display if necessary
    // (based on the amount of rows currently displayed and final amount of filtered movies)

    function searchMovies(evt) {
        evt.preventDefault()
        setDisplayMovieCardList(false)
        setDisplayNotFoundMsg(false)
        setDisplayMoreButton(false)
        if (props.checkLocalStorageForMovies()) {
            filterMovies(props.checkLocalStorageForMovies(), evt)
        } else fetchAllMovies(evt)
    }
    // hide jsx elements, then search for fetched movie cards in local storage and fetch them if necessary or take already fetched movie cards

    async function fetchAllMovies(evt) {
        console.log('fetch API')
        setDisplayPreloader(true)
        let fetchedMovies = await props.getAllMovies()
        filterMovies(fetchedMovies, evt)
        setDisplayPreloader(false)
    }
    // fetch movie cards and display preloader while promise is unresolved

    function filterMovies(fetchedMovies, evt) {
        let filteredMovies = []
        fetchedMovies.forEach((item) => {
            if (item.nameRU.includes(evt.target[0].value)) {
                if(!filterCheckBoxButtonActive){
                    filteredMovies.push(item)
                } else if (filterCheckBoxButtonActive && item.duration <= 40){
                    filteredMovies.push(item)
                }
            }
        })
        setSearchMovieList(filteredMovies)
        props.addSearchedMoviesToLocalStorage(filteredMovies)
        addMoviesToDisplay(filteredMovies)
        if (!filteredMovies.length > 0) {
            setDisplayNotFoundMsg(true)
            setDisplayMovieCardList(false)
        } else {
            setDisplayNotFoundMsg(false)
            setDisplayMovieCardList(true)
        }
    }
    // filter movie cards (based on search form input keys) you got from either local storage or fetch api 
    // also lookout for filter check box button that allows only short duration movies

    function addMoviesToDisplay(movies) {
        let moviesToDisplay = []
        if (isCurrentWindowWideScreen) {
            movies.forEach((item, index) => {
                if (index < 3) {
                    moviesToDisplay.push(item)
                }
            })
            setDisplayedMovieList(moviesToDisplay)
        } else {
            movies.forEach((item, index) => {
                if (index < 2) {
                    moviesToDisplay.push(item)
                }
            })
            setDisplayedMovieList(moviesToDisplay)
        }
        setSearchMovieList(movies)
    }
    // display first row of movie cards you got from either local storage or fetch api

    function addMoreMoviesToDisplay() {
        let searchedMovies = searchMovieList
        let currentlyDisplayedMovies = displayedMovieList
        let filteredMovies = searchedMovies.filter((item, index) => {
            return item !== currentlyDisplayedMovies[index]
        })
        let moviesToDisplay = []

        if (isCurrentWindowWideScreen) {
            filteredMovies.forEach((item, index) => {
                if (index < 3) {
                    moviesToDisplay.push(item)
                }
            })
            let newMoviesToDisplay = currentlyDisplayedMovies.concat(moviesToDisplay);
            setDisplayedMovieList(newMoviesToDisplay)
        } else {
            filteredMovies.forEach((item, index) => {
                if (index < 2) {
                    moviesToDisplay.push(item)
                }
            })
            let newMoviesToDisplay = currentlyDisplayedMovies.concat(moviesToDisplay);
            console.log(moviesToDisplay)
            setDisplayedMovieList(newMoviesToDisplay)
        }
    }
    // "more button" onClick event that displays the next row of movie cards

    return (
        <div className="movies">
            <SearchForm
                searchMovies={searchMovies}
            />
            <FilterCheckBox
                filterCheckBoxButtonActive={filterCheckBoxButtonActive}
                setFilterCheckBoxButtonActive={setFilterCheckBoxButtonActive}
            />
            <PreLoader
                displayPreloader={displayPreloader}
            />
            <MoviesCardList
                displayedMovieList={displayedMovieList}
                displayMovieCardList={displayMovieCardList}
                userSavedMovies={props.userSavedMovies}
                apiAddMovie={props.apiAddMovie}
                apiDeleteMovie={props.apiDeleteMovie}
            />
            <h4 className={`movies__not-found-msg ${displayNotFoundMsg ? "movies__not-found-msg_displayed" : ""}`}>Ничего не найдено</h4>
            <button className={`movies__button ${displayMoreButton ? "movies__button_displayed" : ""}`} onClick={addMoreMoviesToDisplay}>Ещё</button>
        </div>
    )
}

export default Movies
