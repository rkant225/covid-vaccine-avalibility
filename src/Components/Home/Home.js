import React from 'react';
import { useState } from 'react';
import ByDistrict from '../ByDistrict/ByDistrict';
import ByPin from '../ByPin/ByPin';

const Home =()=> {
  const [mode, setMode] = useState("");
  

  return (
    <div className="app-container">
        <div style={{textAlign : 'right'}}>
          <div className="home-button animate-home-button" onClick={()=>{window.location.href = "/covid-vaccine-avalibility"}}></div>
        </div>

        {/* Rotating logo */}
        <div className="logo-container">
          <div className="logo rotate"></div>
        </div>
        {!mode &&
          <>
            <div className="search-text" style={{marginTop : '2rem', fontSize : '4rem', fontWeight : '700'}}>Search</div>

            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', height : '60vh'}}>
                <div className="mode-selection-button button-by-pin" onClick={()=>{setMode('BY_PIN')}}>By Pin-Code</div>
                <div className="mode-selection-button button-by-district" onClick={()=>{setMode('BY_DISTRICT')}}>By District</div>
            </div>
          </>
        }

        {mode === 'BY_PIN' && <ByPin/>}
        {mode === 'BY_DISTRICT' && <ByDistrict/>}
    </div>
  );
}

export default Home;
