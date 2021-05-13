import React from 'react'
import Slot from '../Slot/Slot';

const Center = (props) => {
    const {center} = props;
    return (
        
        <div className="center-box">
            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                <div style={{fontSize : '1.5rem'}}> {center.name}</div>
                <div style={{marginLeft : '.5rem'}}>{center.district_name}, {center.state_name} </div>
            </div>
            <div style={{fontSize : '.8rem'}}> {center.address},  {center.pincode} </div>

            <hr/>

            <div style={{display : 'flex', flexWrap : 'wrap'}}>
                {center.sessions.map((slot)=>{
                    return (
                        <Slot slot={slot} fee_type={center.fee_type}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Center;
