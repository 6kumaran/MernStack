import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'

import Cards from './Cards';
function Categories() {
  const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get('http://localhost:4001/cloth')
                const data=res.data.filter((data)=>data.category==="Demo")
                console.log(data)
                setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
    const filterData=book.filter((data)=>data.category==="Demo");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (<>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pd-3'>Our Collections</h1>
    <p className='mt-5 ml-2'>Explore our curated collections featuring stylish casual wear, elegant evening outfits, and seasonal must-haves. Each piece blends the latest trends with timeless classics, designed to help you express your unique style with confidence.</p>
    </div>
  
  <div>
  <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
  </div>
  </div>
  </>
  )
}

export default Categories