import React from 'react'
import './header.css'


export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Web App Dev</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="assets/clement-helardot-95YRwf6CNw8-unsplash (1).jpg" alt=''></img>
    </div>
  )
}

