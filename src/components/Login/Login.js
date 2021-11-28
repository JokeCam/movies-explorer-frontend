import React from 'react'
import './Login.css'
import logo from '../../images/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormWithValidation } from '../../custom-hooks/FormValidationHook'

function Login(props) {
    let navigate = useNavigate();

    const [apiErrorMsg, setApiErrorMsg] = useState('')
    const loginForm = useFormWithValidation()

    function handleTravel(route) {
        navigate(`/${route}`);
    }

    function handleLogin(evt) {
        evt.preventDefault()
        loginForm.setIsValid(false)
        props.apiLogin(loginForm.values.emailInput, loginForm.values.passwordInput)
        .then((res) => {
            if(res.ok) {
                loginForm.resetForm()
                loginForm.setIsValid(true)
            } else {
                loginForm.setIsValid(false)
                setApiErrorMsg(res)
            }
        })
    }

    return (
        <div className="login">
            <div className="login__title-container">
                <img className="login__logo" src={logo} alt="Главное лого сайта" onClick={() => handleTravel('')} />
                <h3 className="login__title">Рады видеть!</h3>
            </div>
            <form className="login__form" onSubmit={evt => handleLogin(evt)}>
                <div className="login__input-container">
                    <p className="login__subtitle">E-mail</p>
                    <input className="login__input" type="email" name="emailInput" required onChange={loginForm.handleChange} />
                    <p className="login__error-msg">{loginForm.errors.emailInput}</p>
                </div>
                <div className="login__input-container">
                    <p className="login__subtitle">Пароль</p>
                    <input className="login__input" type="password" name="passwordInput" required onChange={loginForm.handleChange} minLength="2"/>
                    <p className="login__error-msg" >{loginForm.errors.passwordInput}</p>
                </div>
                <p className="login__error-msg">{apiErrorMsg}</p>
                <button disabled={!loginForm.isValid} className={`login__submit-button ${loginForm.isValid ? '' : 'login__submit-button_disabled'}`} type="submit">Войти</button>
            </form>
            <div className="login__login-contianer">
                <p className="login__login-subtitle">Ещё не зарегистрированы?</p>
                <button className="login__login-button" onClick={() => handleTravel('signup')}>Регистрация</button>
            </div>
        </div>
    )
}

export default Login
