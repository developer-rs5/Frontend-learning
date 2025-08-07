import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h1>Name</h1>
        <ul>
            <NavLink to="/"> <li>Home</li></NavLink>
            <NavLink to="/cars"> <li>Cars</li></NavLink>
            <NavLink to="/about-us"> <li>About Us</li></NavLink>
        </ul>
    </nav>
    )
}

export default Nav