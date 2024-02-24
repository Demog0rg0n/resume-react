import React, { useState } from 'react'

import PortfolioElem from '../PortfolioElem'
import { portfolioItems } from '../../consts/portfolioConst'

import { portfolioTypePredicate } from '../../helpers/portfolioTypePredicate'


const Portfolio = () => {

    const [portfolioTypeState, setPortfolioTypeState] = useState("React/JS")

  return (
    <section className="portfolio" id="portfolio">
        <div className="portfolio__container container">
            <h2 className="title">Портфолио</h2>
            <ul className="portfolio__tabs">
                <li 
                    className={`portfolio__tab ${portfolioTypeState == "React/JS"? "active": ""}`} 
                    onClick={() => setPortfolioTypeState("React/JS")}
                >
                    React/JS
                </li>
                <li 
                    className={`portfolio__tab ${portfolioTypeState == "Вёрстка"? "active": ""}`}
                    onClick={() => setPortfolioTypeState("Вёрстка")}
                >
                    Вёрстка
                </li>
            </ul>
            <ol className="portfolio__items">

                {
                    portfolioItems.filter((value) => portfolioTypePredicate(value, portfolioTypeState)).map((item) => (
                        <PortfolioElem {...item} key={item.title}/>
                    ))
                }

            </ol>
        </div>
    </section>
  )
}

export default Portfolio
