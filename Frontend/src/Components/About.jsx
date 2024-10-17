import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='items-center justify-center text-center mt-28 mb-48'>
        <h1 className='text-2xl font-bold md:text-4xl'>About Us</h1>
        <p className='mt-10'>At our online fashion store, style, quality, and individuality are at the heart of everything we offer. We view fashion as a powerful expression of personality and confidence, which is why our curated collections blend the latest trends with timeless classics. Whether you're shopping for men's, women's, or kids' apparel, you'll find pieces that are thoughtfully crafted for comfort, durability, and style. Our commitment to a seamless shopping experience ensures that finding the perfect outfit is both easy and enjoyable. Explore our collections and discover fashion that speaks to you.</p>
        <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-20'>Back to Homepage</button>
        </Link>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About