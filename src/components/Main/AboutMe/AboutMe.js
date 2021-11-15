import React from 'react'
import './AboutMe.css'
import studentPhoto from '../../../images/student-photo.jpg'


function AboutMe() {
    return (
        <div className="about-me" id="about-me">
            <div className="about-me__title-container">
                <h3 className="about-me__title">Студент</h3>
            </div>
            <div className="about-me__info-container">
                <div className="about-me__text-container">
                    <h3 className="about-me__info-title">Станислав</h3>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 21 год</p>
                    <p className="about-me__text">
                        Я родился и живу в Витебске. Я люблю слушать музыку, ходить в походы и играть в видеоигры. После того как я закончил школу, а именно
                        с 2018 года, я устраивался и часто менял работу, после прошёл курс по веб-разработке, и начал искать место постоянной работы в IT.
                    </p>
                    <div className="about-me__links-container">
                        <a className="about-me__link" rel="noreferrer" target="_blank" href="https://github.com/JokeCam">Github</a>
                    </div>
                </div>
                <img src={studentPhoto} className="about-me__photo" alt="Фото студента"/>
            </div>
        </div>
    )
}

export default AboutMe
