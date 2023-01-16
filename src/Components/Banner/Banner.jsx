import React from 'react'
import './Banner.css'
import image from '../Images/banner-shoe.jpg'

function Banner() {
  return (
    <div className='banner-parent'>

          <div className='banner-img'
    style={{backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat"}}></div>

    </div>
  )
}

export default Banner
