import React from 'react'
import './Navbar.css'
import logo from '../../images/logo-colored.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo"><img src={logo} alt="" /></div>

        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </div>

        <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>     
        </div>
    </div>
  )
}

export default Navbar