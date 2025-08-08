import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Data from './Components/Data'
import Features from './Components/Features'
import Services from './Components/Services'
import Steps from './Components/Steps'
import Footer from './Components/Footer'
import Book from './Components/Book'
import ServiceForm from './Components/ServiceForm'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
  <Route
    path="/"
    element={
      <>
        <Header />
        <Data />
        <Services />
        <Features />
        <Steps />
      </>
    }
  />
  <Route path="book" element={<Book />} />
  <Route path="Services" element={<ServiceForm/>}/>
</Routes>

        <Footer />
    </div>
  )
}

export default App