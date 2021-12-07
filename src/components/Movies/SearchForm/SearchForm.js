import React from 'react'
import './SearchForm.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SearchForm(props) {
    let location = useLocation()

    const [errorMsg, setErrorMsg] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [disableInput, setDisableInput] = useState(false)
    const [inputDefaultValue, setInputDefaultValue] = useState('')

    useEffect(() => {
        if (location.pathname !== '/saved-movies') {
            if (props.checkLocalStorageForSearchFormInputValue()) {
                setInputDefaultValue(props.checkLocalStorageForSearchFormInputValue())
            }
        }
    }, [])

    async function handleSearchMovies(evt) {
        evt.preventDefault()
        setIsValid(false)
        setDisableInput(true)
        if (evt.target[0].value === '') {
            setErrorMsg('Нужно ввести ключевое слово')
        } else {
            await props.searchMovies(evt)
            if (location.pathname !== '/saved-movies') {
                props.addSearchFormInputValueToLocalStorage(evt.target[0].value)
            }
            setErrorMsg('')
        }
        setDisableInput(false)
        setIsValid(true)
    }

    return (
        <>
            <form className="search-form" onSubmit={evt => handleSearchMovies(evt)} noValidate>
                <div className="search-form__input-container" type="text">
                    <input className="search-form__input" defaultValue={inputDefaultValue} disabled={disableInput} type="text" placeholder="Фильм" required />
                    <button disabled={!isValid} className={`search-form__button ${isValid ? "" : "search-form__button_disabled"}`} type="submit">Поиск</button>
                </div>
            </form>
            <p className="search-form__error-msg">{errorMsg}</p>
        </>
    )
}

export default SearchForm
