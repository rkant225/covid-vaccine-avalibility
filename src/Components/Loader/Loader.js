import React from 'react'
import './Loader.css'

const Loader = () => {
    const style = {
        color : 'red',

        ':hover' : {
            backgroundImage : 'linearGradient(to top, transparent, red)'
        },
    }
    return (
        <div className="loader-page">
            <div className="loader-container">
                <div style={style} className="loader">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Loader;
