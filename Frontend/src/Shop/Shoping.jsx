import React from 'react'
import Navbar from '../Components/Navbar'
import Shop from '../Components/Shop'
import Footer from '../Components/Footer'
function Shoping() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Shop/>
    </div>
    <Footer/>
    </>
  )
}

export default Shoping