import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    let navigate = useNavigate();

    function handleGoBack() {
        navigate(-1)
    }

    return (
        <div className="not-found">
            <h3 className="not-found__title">404</h3>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button className="not-found__button" onClick={handleGoBack}>Назад</button>
        </div>
    )
}

export default NotFound
