import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sideBar'>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src="assets/hansel.jpg" alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sequi eum nesciunt error accusantium, itaque eius blanditiis voluptatem, maiores laboriosam qui quae consequuntur 
            commodi veniam hic 
            eos voluptas? Esse, accusantium maiores!</p>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>CATEGORIES</span> 
    <ul className='sidebarList'>
    <li className='sidebarListItem'>Music</li>
    <li className='sidebarListItem'>Sport</li>
    <li className='sidebarListItem'>Tech</li>
    <li className='sidebarListItem'>Food</li>
    <li className='sidebarListItem'>Life</li>

    </ul>  
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>FOLLOW ME</span>
    <div className='sidebarSocial'>
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-youtube"></i>
        <i className="sidebarIcon fa-brands fa-twitch"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
    </div>
    </div>
    </div>
    
    
  )
}
 