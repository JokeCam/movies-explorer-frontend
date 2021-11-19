import React from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'
import headerLogo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    let navigate = useNavigate()

    function handleTravelToMainPage() {
        navigate('/')
    }

    return (
        <header className="header">
            <img src={headerLogo} alt="Лого в виде буквы S" className="header__logo" onClick={handleTravelToMainPage}/>
            <Navigation loggedIn={props.loggedIn}/>
        </header>
    )
}

export default Header
