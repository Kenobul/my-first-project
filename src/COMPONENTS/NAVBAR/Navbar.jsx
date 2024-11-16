import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='overall'>
        <div className='nav-logo'>EV-olution</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar