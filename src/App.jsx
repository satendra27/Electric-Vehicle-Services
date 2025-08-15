import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Data from './Components/Data'
import Features from './Components/Features'
import Services from './Components/Services'
import Steps from './Components/Steps'
import Footer from './Components/Footer'
import Book from './Components/Book'
import ServiceForm from './Components/ServiceForm'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
  <Route
    path="/"
    element={
      <>
      <Navbar/>
        <Header />
        <Data />
        <Services />
        <Features />
        <Steps />
        <Footer />
      </>
    }
  />
  <Route path="book" element={
    <>
    <Navbar/>
    <Book />
    <Footer/>
     </>
    }/>
  <Route path="Services" element={<ServiceForm/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path="Dashboard" element={
        <>
        <Navbar/>
        <Dashboard/>
        </>
        }/>
</Routes>
<ToastContainer/>
    </div>
  )
}

export default App