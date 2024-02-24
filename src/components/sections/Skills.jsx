import React, { useEffect, useRef } from 'react'

import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { stack } from '../../consts/skillsConst';

const Skills = () => {

    const swiperRef = useRef()

  return (
    <section className="skills" id="skills">
        <div className="skills__container container">
            <h2 className="title">Мой стек технологий</h2>
            <p className="subtitle">Знаком с такими технологиями как:</p>
            <div
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseOut={() => swiperRef.current.swiper.autoplay.start()}
            >
                <Swiper 
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="stack-swiper"
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}

                    breakpoints={{
                        820: {
                            slidesPerView: 3
                        },
                        560: {
                            slidesPerView: 2
                        }
                    }}
                >
                    {
                        stack.map(stackItem => (
                            <SwiperSlide key={stackItem.title}>
                                <div className='stack__elem'>
                                    <div className="stack__elem__icon">
                                        <img src={stackItem.img} className="stack__elem__img" />
                                        <div className="stack__elem__title">{stackItem.title}</div>
                                    </div>
                                    <ul className="stack__elem__list">
                                        {
                                            stackItem.desc.map((item) => (
                                                <li>{item}</li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Skills
