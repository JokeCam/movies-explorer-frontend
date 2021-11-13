import React from 'react'
import './Navigation.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navigation(props) {
    let navigate = useNavigate();

    const [activeButton, setActiveButton] = useState("");
    const [displayAccountWindow, setDisplayAccountWindow] = useState(false)

    function handleDisplayAccountWindow() {
        if (displayAccountWindow) {
            setDisplayAccountWindow(false)
        } else setDisplayAccountWindow(true)
    }

    function handleTravel(route, evt) {
        setDisplayAccountWindow(false)
        navigate(`/${route}`);
        setActiveButton(evt.target.id);
    }

    return (
        <div className="navigation">
            <div className={`navigation__logged-out-container ${props.loggedIn ? "navigation__logged-out-container_hidden" : ""}`}>
                <p className="navigation__register-button" onClick={evt => handleTravel("signup", evt)}>Регистрация</p>
                <button className="navigation__signin-button" onClick={evt => handleTravel("signin", evt)}>Войти</button>
            </div>
            <div className={`navigation__logged-in-container ${!props.loggedIn ? "navigation__logged-in-container_hidden" : ""}`}>
                <div className="navigation__alignment-container">
                    <button
                        className={`navigation__nav-button ${activeButton === "movie-nav-button" ? "navigation__nav-button_active" : ""}`}
                        onClick={evt => handleTravel("movies", evt)}
                        id="movie-nav-button">
                        Фильмы
                    </button>
                    <button
                        className={`navigation__nav-button ${activeButton === "saved-movie-nav-button" ? "navigation__nav-button_active" : ""}`}
                        onClick={evt => handleTravel("saved-movies", evt)}
                        id="saved-movie-nav-button">
                        Сохранённые фильмы
                    </button>
                </div>
                <button
                    className={`navigation__account-button ${activeButton === "account-nav-button" ? "navigation__nav-button_active" : ""}`}
                    onClick={evt => handleTravel("profile", evt)}
                    id="account-nav-button">
                    Аккаунт
                    <div className="navigation__account-icon"></div>
                </button>
            </div>
            <button className={`navigation__account-window-button ${displayAccountWindow ? "navigation__account-window-button_active" : ""}`} onClick={handleDisplayAccountWindow}></button>
            <div className={`navigation__account-window ${displayAccountWindow ? "navigation__account-window_displayed" : ""}`}>
                <div className="navigation__account-window-container">
                    <div className="navigation__alignment-container">
                        <button
                            className={`navigation__nav-button ${activeButton === "main-nav-button" ? "navigation__nav-button_active" : ""}`}
                            onClick={evt => handleTravel("", evt)}
                            id="main-nav-button">
                            Главная
                        </button>
                        <button
                            className={`navigation__nav-button ${activeButton === "movie-nav-button" ? "navigation__nav-button_active" : ""}`}
                            onClick={evt => handleTravel("movies", evt)}
                            id="movie-nav-button">
                            Фильмы
                        </button>
                        <button
                            className={`navigation__nav-button ${activeButton === "saved-movie-nav-button" ? "navigation__nav-button_active" : ""}`}
                            onClick={evt => handleTravel("saved-movies", evt)}
                            id="saved-movie-nav-button">
                            Сохранённые фильмы
                        </button>
                    </div>
                    <button
                        className={`navigation__account-button ${activeButton === "account-nav-button" ? "navigation__nav-button_active" : ""}`}
                        onClick={evt => handleTravel("profile", evt)}
                        id="account-nav-button">
                        Аккаунт
                        <div className="navigation__account-icon"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
