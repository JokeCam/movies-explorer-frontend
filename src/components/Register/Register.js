import React from 'react'
import './Register.css'
import logo from '../../images/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormWithValidation } from '../../custom-hooks/FormValidationHook'

function Register(props) {
    let navigate = useNavigate();

    const registerForm = useFormWithValidation()
    const [disableInput , setDisableInput] = useState(false)
    const [apiError, setApiError] = useState('')

    function handleTravel(route) {
        navigate(`/${route}`);
    }

    function handleRegister(evt) {
        evt.preventDefault()
        registerForm.setIsValid(false)
        setDisableInput(true)
        props.apiRegister(registerForm.values.nameInput, registerForm.values.emailInput, registerForm.values.passwordInput)
        .then((res) => {
            registerForm.setIsValid(true)
            setDisableInput(false)
            registerForm.resetForm()
        })
        .catch((err) => {
            registerForm.setIsValid(true)
            setDisableInput(false)
            setApiError(err)
        })
    }

    return (
        <div className="register">
            <div className="register__title-container">
                <img className="register__logo" src={logo} alt="Главное лого сайта" onClick={() => handleTravel('')}/>
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form" onSubmit={evt => handleRegister(evt)}>
                <div className="register__input-container">
                    <p className="register__subtitle">Имя</p>
                    <input className="register__input" disabled={disableInput} name="nameInput" minLength={2} maxLength={30} required onChange={registerForm.handleChange}/>
                    <p className="register__error-msg">{registerForm.errors.nameInput}</p>
                </div>
                <div className="register__input-container">
                    <p className="register__subtitle">E-mail</p>
                    <input className="register__input" disabled={disableInput} name="emailInput" type="email" required onChange={registerForm.handleChange}/>
                    <p className="register__error-msg">{registerForm.errors.emailInput}</p>
                </div>
                <div className="register__input-container">
                    <p className="register__subtitle">Пароль</p>
                    <input className="register__input" disabled={disableInput} name="passwordInput" type="password" required onChange={registerForm.handleChange} minLength="2"/>
                    <p className="register__error-msg">{registerForm.errors.passwordInput}</p>
                </div>
                <p className="register__error-msg">{apiError}</p>
                <button disabled={!registerForm.isValid} className={`register__submit-button ${registerForm.isValid ? '' : 'register__submit-button_disabled'}`} type="submit">Зарегистрироваться</button>
            </form>
            <div className="register__login-contianer">
                <p className="register__login-subtitle">Уже зарегистрированы?</p>
                <button className="register__login-button" onClick={() => handleTravel('signin')}>Войти</button>
            </div>
        </div>
    )
}

export default Register
