import React from 'react'
import './home.css'

import TopBar from '../topbar/TopBar'
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';



const About = () => {
  return (
    <>
    <TopBar />
    <Header />
    <div className='home'>
   
    <Sidebar />
    </div>
    </>
  );
};

export default About;
