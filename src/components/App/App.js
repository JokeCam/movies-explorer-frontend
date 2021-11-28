import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import { fetchAllMovies } from '../../utils/MoviesApi'
import { login, register, logout, getUserData, addMovie, getMovies, deleteMovie, updateUserData } from '../../utils/MainApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  let navigate = useNavigate()
  let location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false)

  const [currentUser, setCurrentUser] = useState({})
  const [userSavedMovies, setUserSavedMovies] = useState([])

  const localStorage = window.localStorage;

  useEffect(() => {
    apiGetUserData()
    apiGetMovies()
  }, [])

  function handleTravel(route) {
    navigate(`${route}`)
  }

  function apiRegister(name, email, password) {
    return register(name, email, password)
      .then((res) => {
        handleTravel('/signin')
      })
  }

  function apiLogin(email, password) {
    return login(email, password)
      .then((res) => {
        setLoggedIn(true)
        setUserData()
        apiGetMovies()
        handleTravel('/movies')
        return res
      })
      .catch((err) => {
        return err
      })
  }

  function apiLogout() {
    logout()
      .then((res) => {
        setLoggedIn(false)
        localStorage.clear()
        handleTravel('/signin')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function apiAddMovie(data) {
    return addMovie(data)
      .then((res) => {
        let previouslySavedMovies = userSavedMovies
        previouslySavedMovies.push(res)
        setUserSavedMovies(previouslySavedMovies)
        return res
      })
  }

  function setUserData() {
    getUserData()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function apiGetUserData() {
    getUserData()
      .then((res) => {
        setCurrentUser(res)
        setLoggedIn(true)
        handleTravel(location.pathname)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function apiUpdateUserData(name, email) {
    return updateUserData(name, email)
      .then((res) => {
        setCurrentUser(res)
        return res
      })
  }

  function apiGetMovies() {
    getMovies()
      .then((res) => {
        setUserSavedMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function apiDeleteMovie(movieId) {
    deleteMovie(movieId)
      .then((res) => {
        let previouslySavedMovies = userSavedMovies
        let newSavedMovieList = previouslySavedMovies.filter((item) => {
          return item._id !== res.data._id
        })
        setUserSavedMovies(newSavedMovieList)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  async function getAllMovies() {
    let fetchedMovies = await fetchAllMovies()
    console.log(fetchedMovies)
    addFetchedMoviesToLocalStorage(fetchedMovies)
    return fetchedMovies
  }

  function addFetchedMoviesToLocalStorage(fetchedMovies) {
    localStorage.setItem('movies', JSON.stringify(fetchedMovies))
  }

  function addSearchedMoviesToLocalStorage(searchedMovies) {
    localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies))
  }

  function checkLocalStorageForMovies() {
    if (JSON.parse(localStorage.getItem('movies'))) {
      return JSON.parse(localStorage.getItem('movies'))
    } else return false
  }

  function checkLocalStorageForSearchedMovies() {
    if (JSON.parse(localStorage.getItem('searchedMovies'))) {
      return JSON.parse(localStorage.getItem('searchedMovies'))
    } else return false
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn} path="/signin">
              <Header loggedIn={loggedIn} />
              <Movies
                getAllMovies={getAllMovies}
                addSearchedMoviesToLocalStorage={addSearchedMoviesToLocalStorage}
                checkLocalStorageForMovies={checkLocalStorageForMovies}
                checkLocalStorageForSearchedMovies={checkLocalStorageForSearchedMovies}
                apiAddMovie={apiAddMovie}
                apiDeleteMovie={apiDeleteMovie}
                userSavedMovies={userSavedMovies}
                handleTravel={handleTravel}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn} path="/signin">
              <Header loggedIn={loggedIn} />
              <SavedMovies
                userSavedMovies={userSavedMovies}
                apiDeleteMovie={apiDeleteMovie}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn} path="/signin">
              <Header
                loggedIn={loggedIn}
              />
              <Profile
                apiLogout={apiLogout}
                apiUpdateUserData={apiUpdateUserData}
              />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={
            <ProtectedRoute loggedIn={!loggedIn} path="/movies">
              <Login
                apiLogin={apiLogin}
              />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRoute loggedIn={!loggedIn} path="/movies">
              <Register
                apiRegister={apiRegister}
              />
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <>
              <NotFound />
            </>
          } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
