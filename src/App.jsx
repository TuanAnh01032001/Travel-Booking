import './App.css'
import React from 'react'
import Destinations from './components/Destinations/Destinations' 
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Questions from './components/Questions/Questions'
import Portifolio from './components/Portifolio/Portifolio'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
      <div>
        <Navbar  /> {/* Pass sectionText as a prop */}
        <Home/>
        <Middle/>
        <Destinations/>
        <Portifolio/>
        <Reviews/>
        <Questions/>
        <Footer/>
      </div>
  )
}

export default App
