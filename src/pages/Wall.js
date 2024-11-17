import React from 'react'
import './home.css'

import TopBar from '../topbar/TopBar'
import Header from './../header/Header'
import Posts from '../posts/Posts'

const Wall = () => {
  return (
    <>
    <TopBar />
    <Header />
    <div className='home'>
   
    <Posts />
    </div>
    </>
  );
};

export default Wall;
