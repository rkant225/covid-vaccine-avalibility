import React, { useEffect, useRef, useState } from 'react'
import './CircularRings.css'

const CircularRings = (props) => {

    const renderCount = useRef(0);

    const [red, setRedColor] = useState('00');
    const [green, setGreenColor] = useState('00');
    const [blue, setBlueColor] = useState('00');

    // useEffect(()=>{
    //     const rings = document.getElementsByClassName('ring');
    //     for(var ring of rings){
    //         ring.style['border'] = `5px solid ${color || 'white'}`
    //     }
    // },[color])

    useEffect(()=>{
        const color = `#${red}${green}${blue}`;

        const rings = document.getElementsByClassName('ring');
        for(var ring of rings){
            ring.style['border'] = `5px solid ${color || 'white'}`
        }
    },[red, green, blue])



    const handleRedSliderChange = (e) =>{
        const decimalValue = e.target.value;
        let hexValue = new Number(decimalValue).toString(16);
        hexValue = hexValue.length === 1 ? `0${hexValue}` : hexValue;
        setRedColor(hexValue)
    }
    const handleGreenSliderChange = (e) =>{
        const decimalValue = e.target.value;
        let hexValue = new Number(decimalValue).toString(16);
        hexValue = hexValue.length === 1 ? `0${hexValue}` : hexValue;
        setGreenColor(hexValue)
    }
    const handleBlueSliderChange = (e) =>{
        const decimalValue = e.target.value;
        let hexValue = new Number(decimalValue).toString(16);
        hexValue = hexValue.length === 1 ? `0${hexValue}` : hexValue;
        setBlueColor(hexValue)
    }

    renderCount.current = renderCount.current + 1;
    console.log("Rendered", renderCount.current);

    return (
        <div className="container">

            <div style={{position : 'absolute', top : '0px', left : '0px', width : '100%', display : 'flex', justifyContent : 'space-around'}}>
                <div style={{width : '30%'}}>
                    <div style={{width : 'max-content', margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : 'red'}}>
                        Red
                    </div>
                    <input value={parseInt(red, 16)} type="range" min='0' max='255' style={{width : '100%'}} onChange={handleRedSliderChange}/>
                    <div style={{margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : `#${red}0000`, backgroundColor : 'white', width : '2rem', height : '2rem', textAlign : 'center', borderRadius : '50%', padding : '.5rem'}}>
                        {red.toUpperCase()}
                    </div>
                </div>

                <div style={{width : '30%'}}>
                    <div style={{width : 'max-content', margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : '#40ff00'}}>
                        Green
                    </div>
                    <input value={parseInt(green, 16)} type="range" min='0' max='255' style={{width : '100%'}} onChange={handleGreenSliderChange}/>
                    <div style={{margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : `#${red}0000`, backgroundColor : 'white', width : '2rem', height : '2rem', textAlign : 'center', borderRadius : '50%', padding : '.5rem'}}>
                        {green.toUpperCase()}
                    </div>
                </div>

                <div style={{width : '30%'}}>
                    <div style={{width : 'max-content', margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : '#0040ff'}}>
                        Blue
                    </div>
                    <input value={parseInt(blue, 16)} type="range" min='0' max='255' style={{width : '100%'}} onChange={handleBlueSliderChange}/>
                    <div style={{margin : 'auto', fontSize : '1.5rem', fontWeight : '700', color : `#${red}0000`, backgroundColor : 'white', width : '2rem', height : '2rem', textAlign : 'center', borderRadius : '50%', padding : '.5rem'}}>
                        {blue.toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="rings-container">
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
                <span className="ring"></span>
            </div>
        </div>
    )
}

export default CircularRings;
