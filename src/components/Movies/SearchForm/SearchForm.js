import React from 'react'
import './SearchForm.css'

function SearchForm(props) {
    return (
        <form className="search-form" onSubmit={evt => props.searchMovies(evt)}>
            <div className="search-form__input-container" type="text">
                <input className="search-form__input" type="text" placeholder="Фильм" required/>
                <button className="search-form__button" type="submit">Поиск</button>
            </div>
        </form>
    )
}

export default SearchForm
