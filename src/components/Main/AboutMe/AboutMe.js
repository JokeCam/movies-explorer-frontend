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
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
