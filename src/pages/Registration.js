import React from 'react'
import './home.css'

import TopBar from '../topbar/TopBar'
import Header from '../header/Header'
import Regform from '../regform/Regform'

const Registration = () => {
  return (
    <>
    <TopBar />
    <Header />
    <div className='home'>
   
    <Regform />
    </div>
    </>
  );
};

export default Registration;
