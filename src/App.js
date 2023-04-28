import './App.css';
import React from 'react';
import { Footer,  Possibility, Features, WhatGPT4, Header } from './container';
import {  Brand, Navbar } from './components';

function App() {
  return (
    // the jsx fragment can be made as div also with class name APP
   <div className='App'> 
   <div className="gradient__bg">
    <Navbar />
    <Header />
   </div>
   <Brand />
   <WhatGPT4 />
   <Features />
   <Possibility/>
   
   <Footer/>
   </div>
  );
}

export default App;
