import React from 'react'
import './AboutProject.css'

function AboutProject() {
    return (
        <div className="about-project" id="about">
            <div className="about-project__title-container">
                <h3 className="about-project__title">О проекте</h3>
            </div>
            <div className="about-project__info-container">
                <div className="about-project__inner-info-container">
                    <h4 className="about-project__info-title">Дипломный проект включал 5 этапов</h4>
                    <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__inner-info-container">
                    <h4 className="about-project__info-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__graph-container">
                <div className="about-project__first-inner-graph-container">
                    <div className="about-project__first-graph">
                        <p className="about-project__first-graph-inner-text">1 неделя</p>
                    </div>
                    <p className="about-project__first-graph-text">Back-end</p>
                </div>
                <div className="about-project__second-inner-graph-container">
                    <div className="about-project__second-graph">
                        <p className="about-project__second-graph-inner-text">4 недели</p>
                    </div>
                    <p className="about-project__second-graph-text">Front-end</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject
