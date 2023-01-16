import React from 'react'
import './Navbar2.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  useEffect(()=>{
    showButton()
  },[])

  const handleclick =()=>setClick(!click)
  const closeMobileMenu=()=>setClick(false)

const showButton=()=>{
  if(window.innerWidth <= 960){
    setButton(false)
  }else{
    setButton(true)
  }
}
window.addEventListener('resize',showButton)
  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          </Link>
          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu2'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Men
              </Link> 
            </li>
            <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Women
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Kids
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar2
