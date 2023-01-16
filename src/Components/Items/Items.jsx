import React from 'react'
import './Items.css'
import Carditem from './Carditem'

function Items1() {
  return (
    <div className='cards'>
      <h1>New Arivels</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <Carditem
                src="images/shoe1.webp"
                text="Nike Air Force 1 Mid '07"
                lable="$359"
                path="/services"
                />
                <Carditem
                src="images/shoe2.webp"
                text='Nike Blazer Mid Pro Clud'
                lable="$399"
                path="/services"
                />
            </ul>
            <ul className='cards__items'>
            <Carditem
              src='images/shoe3.webp'
              text='Nike Court Legacy Suede'
              lable="$299"
              path='/services'
            />
            <Carditem
              src='images/shoe4.webp'
              text="PG 6 EP 'Hot Wheels'"
              lable='$289'
              path='/products'
            />
            <Carditem
              src='images/shoe5.webp'
              text='Nike Gripknit Phantom GX Elite FG'
              lable='$259'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Items1
