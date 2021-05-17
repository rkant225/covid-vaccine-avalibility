import React from 'react'
import './Loader.css'

const Loader = (props) => {
    let {color} = props;
    color = color || "white";

    return (
        <div className="loader-page">
            <div className="loader-container">
                <div className="loader">
                    <div className="before" style={{backgroundImage: `linear-gradient(to top, transparent, ${color})`}}></div>
                    <span></span>
                    <div className="after" style={{backgroundColor : color, boxShadow : `0 0 10px 0px ${color}, 0 0 20px 0px ${color}, 0 0 30px 0px ${color}, 0 0 40px 0px ${color}, 0 0 50px 0px ${color}, 0 0 60px 0px ${color}, 0 0 70px 10px ${color}`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
