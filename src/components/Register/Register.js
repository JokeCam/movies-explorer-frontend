import React from 'react'
import './Register.css'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'

function Register() {
    let navigate = useNavigate();

    function handleTravel(route) {
        navigate(`/${route}`);
    }

    return (
        <div className="register">
            <div className="register__title-container">
                <img className="register__logo" src={logo} alt="Главное лого сайта" onClick={() => handleTravel('')}/>
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form">
                <div className="register__input-container">
                    <p className="register__subtitle">Имя</p>
                    <input className="register__input" />
                </div>
                <div className="register__input-container">
                    <p className="register__subtitle">E-mail</p>
                    <input className="register__input" />
                </div>
                <div className="register__input-container">
                    <p className="register__subtitle">Пароль</p>
                    <input className="register__input" type="password"/>
                </div>
                <p className="register__error-msg">Что-то пошло не так...</p>
                <button className="register__submit-button" type="submit">Зарегистрироваться</button>
            </form>
            <div className="register__login-contianer">
                <p className="register__login-subtitle">Уже зарегистрированы?</p>
                <button className="register__login-button" onClick={() => handleTravel('signin')}>Войти</button>
            </div>
        </div>
    )
}

export default Register
