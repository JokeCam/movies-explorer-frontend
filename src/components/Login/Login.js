import React from 'react'
import './Login.css'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();

    function handleTravel(route) {
        navigate(`/${route}`);
    }

    return (
        <div className="login">
            <div className="login__title-container">
                <img className="login__logo" src={logo} alt="Главное лого сайта" onClick={() => handleTravel('')}/>
                <h3 className="login__title">Рады видеть!</h3>
            </div>
            <form className="login__form">
                <div className="login__input-container">
                    <p className="login__subtitle">E-mail</p>
                    <input className="login__input" />
                </div>
                <div className="login__input-container">
                    <p className="login__subtitle">Пароль</p>
                    <input className="login__input" type="password"/>
                </div>
                <p className="login__error-msg">Что-то пошло не так...</p>
                <button className="login__submit-button" type="submit">Войти</button>
            </form>
            <div className="login__login-contianer">
                <p className="login__login-subtitle">Ещё не зарегистрированы?</p>
                <button className="login__login-button" onClick={() => handleTravel('signup')}>Регистрация</button>
            </div>
        </div>
    )
}

export default Login
