import React from 'react'
import './Techs.css'

function Techs() {
    return (
        <div className="techs" id="techs">
            <div className="techs__title-container">
                <h3 className="techs__title">Технологии</h3>
            </div>
            <div className="techs__info-container">
                <h3 className="techs__info-title">7 технологий</h3>
                <p className="techs__info-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__cards-container">
                <div className="techs__card">
                    <p className="techs__card-text">HTML</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">CSS</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">JS</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">React</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">Git</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">Express.js</p>
                </div>
                <div className="techs__card">
                    <p className="techs__card-text">mongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default Techs
