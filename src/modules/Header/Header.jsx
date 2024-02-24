import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li><a href="#home" className="nav__link">Home</a></li>
                    <li><a href="#about" className="nav__link">О себе</a></li>
                    <li><a href="#skills" className="nav__link">Стэк</a></li>
                    <li><a href="#portfolio" className="nav__link">Портфолио</a></li>
                    <li><a href="#contacts" className="nav__link">Контакты</a></li>
                </ul>
            </nav>   
        </div>
    </header>
  )
}

export default Header
