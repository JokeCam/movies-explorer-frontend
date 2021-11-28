import React from 'react'
import './SearchForm.css'
import { useState } from 'react'

function SearchForm(props) {
    const [errorMsg, setErrorMsg] = useState('')

    function handleSearchMovies(evt) {
        evt.preventDefault()
        if (evt.target[0].value === '') {
            setErrorMsg('Нужно ввести ключевое слово')
        } else {
            props.searchMovies(evt)
            setErrorMsg('')
        }
    }

    return (
        <>
            <form className="search-form" onSubmit={evt => handleSearchMovies(evt)} noValidate>
                <div className="search-form__input-container" type="text">
                    <input className="search-form__input" type="text" placeholder="Фильм" required />
                    <button className="search-form__button" type="submit">Поиск</button>
                </div>
            </form>
            <p className="search-form__error-msg">{errorMsg}</p>
        </>
    )
}

export default SearchForm
