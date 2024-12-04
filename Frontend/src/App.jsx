import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<UserLogin/>}/>
        <Route path='/signup' element ={<UserSignup/>}/>
        <Route path='/captian-login' element ={<CaptainLogin/>}/>
        <Route path='/captain-signup' element ={<CaptainRegister/>}/>
        
      </Routes>
    </div>
  )
}

export default App
