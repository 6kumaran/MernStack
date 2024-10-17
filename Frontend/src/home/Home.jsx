import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'

function Home() {
  return (<>
  <Navbar/>
    <Banner/>
    <Categories/>
    <Footer/>
  </>
  )
}

export default Home