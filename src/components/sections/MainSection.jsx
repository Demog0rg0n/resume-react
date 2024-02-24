import React from 'react'
import photo from "../../images/photo.png"

const MainSection = () => {
  return (
    <section className="ms" id="home">
        <div className="ms__container container">
            <div className="photo-wrapper">
                <img src={photo} alt="" className="photo" />
            </div>
            <p className="ms__info">Фронтенд разработчик, 19 лет, г. Электросталь</p> 
            <h1 className="ms__name">Иван Соловьёв</h1>
        </div>
    </section>
  )
}

export default MainSection
