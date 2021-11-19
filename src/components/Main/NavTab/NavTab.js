import React from 'react'
import './NavTab.css'

function NavTab() {
    return (
        <div className="navtab">
            <a className="navtab__link" href="#about">О проекте</a>
            <a className="navtab__link" href="#techs">Технологии</a>
            <a className="navtab__link" href="#about-me">Студент</a>
        </div>
    )
}

export default NavTab
