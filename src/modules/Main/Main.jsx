import React from 'react'
import "./main.css"
import MainSection from '../../components/sections/MainSection'
import AboutMe from '../../components/sections/AboutMe'
import Portfolio from '../../components/sections/Portfolio'
import Skills from '../../components/sections/Skills'

const Main = () => {
  return (
    <main className='main'>
        <MainSection />
        <AboutMe />
        <Skills />
        <Portfolio />
    </main>
  )
}

export default Main
