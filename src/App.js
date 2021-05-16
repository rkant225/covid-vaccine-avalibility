import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Center from './Components/Center/Center';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';

function App() {

  return (
    <div className="app-container">
      {/* <Home/> */}
      {/* <Footer/> */}
      <Loader color="yellow"/>
    </div>
  );
}

export default App;
