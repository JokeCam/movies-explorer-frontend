import React from 'react'
import './Profile.css'
import { useState, useContext, useEffect, useRef } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const [displayedName, setDisplayedName] = useState()
    const [displaySaveButton, setDisplaySaveButton] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const userContext = useContext(CurrentUserContext)

    const [defaultUserName, setDefaultUserName] = useState('')
    const [defaultUserEmail, setDefaultUserEmail] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [isValid, setIsValid] = useState(false)

    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)

    useEffect(() => {
        setDefaultUserName(userContext.name)
        setDefaultUserEmail(userContext.email)
        setNameInput(userContext.name)
        setEmailInput(userContext.email)
        setDisplayedName(userContext.name)
    }, [userContext.email, userContext.nam, userContext.name])

    useEffect(() => {
        setSuccessMsg('')
        setErrorMsg('')

        if (nameInput !== defaultUserName || emailInput !== defaultUserEmail) {
            setIsValid(true)
        }

        if (nameInput === defaultUserName && emailInput === defaultUserEmail) {
            setIsValid(false)
            setErrorMsg('Поменяйте значение одного из полей')
        }

        if (nameInput.length < 2) {
            setIsValid(false)
            setErrorMsg('Минимальное количество символов: 2')
        }

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailInput)) {
            setIsValid(false);
            setErrorMsg('Неправильный адрес электронной почты');
        }

    }, [defaultUserEmail, defaultUserName, emailInput, nameInput])

    function handleDisplaySaveButton() {
        setDisplaySaveButton(true)
    }

    function handleHideSaveButton() {
        setDisplaySaveButton(false)
    }

    function handleUpdateProfile(evt) {
        evt.preventDefault()
        props.apiUpdateUserData(nameInput, emailInput)
            .then((res) => {
                setSuccessMsg('Данные сохранены!')
                handleHideSaveButton()
            })
            .catch((err) => {
                setErrorMsg(err)
            })
    }

    return (
        <div className="profile">
            <h3 className="profile__title">{`Привет ${displayedName}!`}</h3>
            <form className="profile__form" onSubmit={evt => handleUpdateProfile(evt)}>
                <div className="profile__input-container">
                    <p className="profile__subtitle">Имя</p>
                    <input ref={nameInputRef} className="profile__input" name="nameInput" value={nameInput} disabled={!displaySaveButton} onChange={evt => setNameInput(evt.target.value)} />
                </div>
                <div className="profile__alignment"></div>
                <div className="profile__input-container">
                    <p className="profile__subtitle">E-mail</p>
                    <input ref={emailInputRef} className="profile__input" type="email" name="emailInput" value={emailInput} disabled={!displaySaveButton} onChange={evt => setEmailInput(evt.target.value)} />
                </div>
                <p className="profile__success-msg">{successMsg}</p>
                <div className={`profile__submit-container ${displaySaveButton ? "profile__submit-container_displayed" : ""}`}>
                    <p className="profile__error-msg">{errorMsg}</p>
                    <button disabled={!isValid} className={`profile__submit-button ${isValid ? "" : "profile__submit-button_disabled"}`} type="submit">Сохранить</button>
                </div>
            </form>
            <div className={`profile__button-container ${displaySaveButton ? "profile__button-container_hidden" : ""}`}>
                <button className="profile__edit-button" onClick={handleDisplaySaveButton} type="button">Редактировать</button>
                <button className="profile__logout-button" type="button" onClick={props.apiLogout}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile
