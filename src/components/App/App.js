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
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  //toggle to change header navigation menu

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Header loggedIn={loggedIn}/>
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header loggedIn={loggedIn}/>
            <Movies />
            <Footer />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header loggedIn={loggedIn}/>
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header loggedIn={loggedIn}/>
            <Profile />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Register />
          </>
        } />
        <Route path="/not-found" element={
          <>
            <NotFound />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
