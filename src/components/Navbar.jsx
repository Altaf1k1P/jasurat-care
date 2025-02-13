import React, { useState } from "react"
import "../css/Navbar.css";
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button
  className="mobile-menu-icon"
  onClick={() => setMobile(!Mobile)}
>
  {Mobile ? (
    <ImCross style={{ color: "#007bff" }} />
  ) : (
    <FaBars style={{ color: "#333" }} />
  )}
</button>

      </nav>
    </> 
  )
}
export default Navbar