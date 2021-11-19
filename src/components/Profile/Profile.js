import React from 'react'
import './Profile.css'
import { useState } from 'react'

function Profile() {
    const [name, setName] = useState("Виталий")
    const [email, setEmail] = useState("pochta@yandex.ru")
    const [displaySaveButton, setDisplaySaveButton] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)

    function handleDisplaySaveButton() {
        setDisplaySaveButton(true)
    }

    function handleUpdateProfile(evt) {
        evt.preventDefault()
        setDisableSubmitButton(true)
        setErrorMsg("При обновлении профиля произошла ошибка.")
    }

    return (
        <div className="profile">
            <h3 className="profile__title">Привет, Виталий!</h3>
            <form className="profile__form">
                <div className="profile__input-container">
                    <p className="profile__subtitle">Имя</p>
                    <input className="profile__input" type="text" value={name} disabled={!displaySaveButton} onChange={evt => setName(evt.target.value)}/>
                </div>
                <div className="profile__alignment"></div>
                <div className="profile__input-container">
                    <p className="profile__subtitle">E-mail</p>
                    <input className="profile__input" type="text" value={email} disabled={!displaySaveButton} onChange={evt => setEmail(evt.target.value)}/>
                </div>
                <div className={`profile__submit-container ${displaySaveButton ? "profile__submit-container_displayed" : ""}`}>
                    <p className="profile__error-msg">{errorMsg}</p>
                    <button disabled={disableSubmitButton} className={`profile__submit-button ${disableSubmitButton ? "profile__submit-button_disabled" : ""}`} onClick={evt => handleUpdateProfile(evt)} type="submit">Сохранить</button>
                </div>
            </form>
            <div className={`profile__button-container ${displaySaveButton ? "profile__button-container_hidden" : ""}`}>
                <button className="profile__edit-button" onClick={handleDisplaySaveButton} type="button">Редактировать</button>
                <button className="profile__logout-button" type="button">Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile
