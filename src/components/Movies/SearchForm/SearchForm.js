import React from 'react'
import './SearchForm.css'

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__input-container" type="text">
                <input className="search-form__input" type="text" placeholder="Фильм" />
                <button className="search-form__button" type="submit">Поиск</button>
            </div>
        </form>
    )
}

export default SearchForm
