import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-bar">
      <Link className="nav-link" to='/'>Homepage</Link>
      <Link className="nav-link" to='/detail'>Product Detail</Link>
      <Link className="nav-link" to='/cart'>Cart</Link>
      <Link className="nav-link" to='/contact'>Contact Us</Link>


    </div>
  )
}

export default Navbar