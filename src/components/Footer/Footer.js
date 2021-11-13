import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links-container">
                <p className="footer__copyright">© 2020</p>
                <div className="footer__links">
                    <a className="footer__link" rel="noreferrer" target="_blank" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                    <a className="footer__link" rel="noreferrer" target="_blank" href="https://github.com/JokeCam">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
