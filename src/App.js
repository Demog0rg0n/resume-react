import React from 'react'
import Header from './modules/Header/Header.jsx'
import Main from './modules/Main/Main.jsx'
import "./styles/style.css"
import Footer from './modules/Footer/Footer.jsx'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
  )
}

export default App
