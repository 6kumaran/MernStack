import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Shoping from './Shop/Shoping'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import About from './Components/About'
function App() {
  const [authUser,setauthUser]=useAuth()
  console.log(authUser)
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={authUser?<Shoping/>:<Navigate to="/signup"/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/AboutUS" element={<About/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
