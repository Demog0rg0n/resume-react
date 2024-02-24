import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'


const text = 'Привет, я Ваня, начинающий frontend разработчик. # Учусь по различным курсам из YouTube и книгам.(learn.javascript.ru, Грокаем Алгоритмы) # Буду рад поработать в дружном коллективе и активно развиваться как специалист # Закончил колледж ГАПОУ МО "ПК ЭНЕРГИЯ" специальность - "Информационные системы и программирование" с красным дипломом'
const splitedText = text.split("")
function animateText(elem) {
    elem.classList.add("active")
    elem.innerHTML = '';

    splitedText.forEach((letter, i) => {
        setTimeout(() => {
    
          if(letter === "#") {
            elem.innerHTML = elem.innerHTML + "<br>";
          } else {
            elem.innerHTML = elem.innerHTML + letter;
          }
    
          if(i === splitedText.length - 1) {
            const caret = document.querySelector(".caret")
            caret.classList.add("disabled")
          }
    
        }, i * 45);
    });
}


const AboutMe = () => {

    const [active, setActive] = useState(false)

    const {ref, inView} = useInView({
        threshold: 1,
    })

    useEffect(() => {
        const elem = document.querySelector('.about-me__subtitle__text')

        if(inView && elem.classList.length < 2) {
            animateText(elem)
        }

    }, [inView])


  return (
    <section className="about-me" id="about">
        <div className="about-me__container container">
            <h2 className="title">О себе</h2>
            <div className="about-me__subtitle">
                <span ref={ref} className="about-me__subtitle__text">
                    
                </span>
                <span className="caret">|</span>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
