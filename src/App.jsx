import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Data from './Components/Data'
import Features from './Components/Features'
import Services from './Components/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Data/>
      <Services/>
      <Features/>
    </div>
  )
}

export default App