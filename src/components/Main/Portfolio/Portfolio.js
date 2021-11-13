import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio">
            <h5 className="portfolio__title">Портфолио</h5>
            <div className="portfolio__links">
                <div className="portfolio__link-container">
                    <a className="portfolio__link" rel="noreferrer" target="_blank" href="https://github.com/JokeCam/russian-travel">Статичный сайт</a>
                    <a className="portfolio__link-button" rel="noreferrer" target="_blank" href="https://github.com/JokeCam/russian-travel">↗</a>
                </div>
                <div className="portfolio__link-container">
                    <a className="portfolio__link" rel="noreferrer" target="_blank" href="https://jokecam.github.io/russian-travel/">Адаптивный сайт</a>
                    <a className="portfolio__link-button" rel="noreferrer" target="_blank" href="https://jokecam.github.io/russian-travel/">↗</a>
                </div>
                <div className="portfolio__link-container">
                    <a className="portfolio__link" rel="noreferrer" target="_blank" href="https://mesto.stanislav.nomoredomains.club">Одностраничное приложение</a>
                    <a className="portfolio__link-button" rel="noreferrer" target="_blank" href="https://mesto.stanislav.nomoredomains.club">↗</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
