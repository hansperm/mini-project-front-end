import React from 'react'
import './topbar.css'
import { Link } from "react-router-dom";




const TopBar = () => {
  return (
    <div className='top'>
       
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-youtube"></i>
        <i className="topIcon fa-brands fa-twitch"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
            </div>
        <div className='topCenter'>
            <ul className='topList'>
           
                <li className='toplistItem'><Link className="nav-link active" to="/">HOME</Link></li>
                <li className='toplistItem'><Link className="nav-link active" to="/about">ABOUT</Link></li>
                <li className='toplistItem'><Link className="nav-link active" to="/register">REGISTRATION</Link></li>
                <li className='toplistItem'><Link className="nav-link active" to="/wall">POST</Link></li>
                <li className='toplistItem'>LOGOUT</li>
           
            </ul>
        
        </div>
        <div className='topRight'>
            <img className='topImage' 
            src="assets/hansel.jpg" alt="" />
            <i className="topsearchItem fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  )
}

export default TopBar;
