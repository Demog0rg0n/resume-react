import React from 'react'
import "./footer.css"

import telegram from "../../images/telegram.png"
import vk from "../../images/vk.png"
import gmail from "../../images/gmail.png"

const Footer = () => {
  return (
    <footer className='footer' id='contacts'>
        <div className="contacts__container container">
            <h2 className="title">Контакты</h2>
            <div className="subtitle">Хотите связаться со мной?<br/>Попробуйте один из вариантов снизу</div>
            <ul className="contactLinks">
                <li>
                    <a href="https://vk.com/c0olcat" className="contactLink">
                        <img src={vk} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/CoBa2204" className="contactLink">
                        <img src={telegram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="mailto: ivan.kot1331@gmail.com" className="contactLink">
                        <img src={gmail} alt="" />
                    </a>
                </li>
            </ul>
            <div className="phoneNumber">+7 977 787 68 44</div>
        </div>
    </footer>
  )
}

export default Footer
