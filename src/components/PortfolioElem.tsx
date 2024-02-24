import React, { useState } from 'react'
import Popup from './popup/Popup'

type PortfolioElemProps = {
    title: string,
    img: any,
    desc: string,
    gitLink: string,
    link: string
    type: "React" | "HTML"
}

const PortfolioElem: React.FC<PortfolioElemProps> = ({title, img, desc, gitLink, link}) => {

    const [popupState, setPopupState] = useState(false)

    function openPopup() {
        setPopupState(true)
        document.body.classList.add("overflow-hidden")
    }

  return (
    <div className="portfolio__elem">
        <div className="portfolio__elem__bg"></div>
        <div className="portfolio__elem__preview">
            <img src={img} alt="" className="portfolio__elem__img" />
            <div className="portfolio__elem__content">
                <h3 className="portfolio__elem__title">{title}</h3>
                <div className="portfolio__elem__buttons">
                    <button className="portfolio__elem__button button" onClick={() => openPopup()}>Подробнее</button>
                    <a href={gitLink} className="portfolio__elem__git-link">
                        <svg viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M296.133 354.174c49.885-5.891 102.942-24.029 102.942-110.192 0-24.49-8.624-44.448-22.67-59.869 2.266-5.89 9.515-28.114-2.734-58.947 0 0-18.139-5.898-60.759 22.669-18.139-4.983-38.09-8.163-56.682-8.163-19.053 0-39.011 3.18-56.697 8.163-43.082-28.567-61.22-22.669-61.22-22.669-12.241 30.833-4.983 53.057-2.718 58.947-14.061 15.42-22.677 35.379-22.677 59.869 0 86.163 53.057 104.301 102.942 110.192-6.344 5.452-12.241 15.873-14.507 30.387-12.702 5.438-45.808 15.873-65.758-18.592 0 0-11.795-21.31-34.012-22.669 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.089 76.179 29.48v38.543c0 5.906-4.53 12.702-15.865 10.89C96.139 438.977 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c.001-20.873-6.811-34.465-14.966-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z" fill="#000" fillRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>

        <Popup state={popupState} handler={setPopupState} popupClass='portfolio__elem__popup'>
            <>
                <h2>Информация о проекте</h2>
                <p>{desc}</p>
                <div className="portfolio__elem__links">
                    <a href={gitLink} target="_ blank">GitHub</a>
                    <a href={link} target="_ blank">Сайт</a>
                </div>
            </>
        </Popup>
    </div>
  )
}

export default PortfolioElem
