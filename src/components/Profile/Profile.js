import React from 'react'
import './Profile.css'
import { useState, useContext, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../custom-hooks/FormValidationHook'

function Profile(props) {
    const [displayedName, setDisplayedName] = useState()
    const [displaySaveButton, setDisplaySaveButton] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const profileForm = useFormWithValidation()
    const userContext = useContext(CurrentUserContext)

    useEffect(() => {
        profileForm.values.nameInput = userContext.name
        profileForm.values.emailInput = userContext.email
        setDisplayedName(userContext.name)
    }, [profileForm.values, userContext.email, userContext.name])

    function handleDisplaySaveButton() {
        setDisplaySaveButton(true)
    }

    function handleUpdateProfile(evt) {
        evt.preventDefault()
        props.apiUpdateUserData(profileForm.values.nameInput, profileForm.values.emailInput)
        .then((res) => {
            console.log(res)
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
                    <input className="profile__input" value={profileForm.values.nameInput || ' ' || userContext.name} name="nameInput" disabled={!displaySaveButton} onChange={profileForm.handleChange}/>
                </div>
                <div className="profile__alignment"></div>
                <div className="profile__input-container">
                    <p className="profile__subtitle">E-mail</p>
                    <input className="profile__input" value={profileForm.values.emailInput || ' ' || userContext.email} type="email" name="emailInput" disabled={!displaySaveButton} onChange={profileForm.handleChange}/>
                </div>
                <div className={`profile__submit-container ${displaySaveButton ? "profile__submit-container_displayed" : ""}`}>
                    <p className="profile__error-msg">{errorMsg}</p>
                    <button disabled={!profileForm.isValid} className={`profile__submit-button ${profileForm.isValid ? "" : "profile__submit-button_disabled"}`} type="submit">Сохранить</button>
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
