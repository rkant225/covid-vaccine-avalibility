import React from 'react'

const Slot = (props) => {
    const {slot, fee_type} = props;
    const availableDosesColor = slot.available_capacity > 15 ? '#8FD400' : '#FF5050';
    const getFormatedDate = (date) =>{
        const month = date.substring(3,5);
        const day = date.substring(0,2);
        const year = date.substring(6);
        const finalDate = `${month}-${day}-${year}`
        const formatedDate = new Date(finalDate).toDateString().substring(3,11);
        return  formatedDate;
    }

    return (
        <div style={{margin : '1.5rem', backgroundColor : 'rgb(255,255,255,.3)', padding : '.5rem', borderRadius : '15px', width : '13rem'}}>
            <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                <div style={{fontSize : '1.2rem'}}>{getFormatedDate(slot.date)}</div>
                <div>
                    <a style={{color : 'white', cursor : 'pointer', backgroundColor : '#4F86F7', padding : '.1rem .4rem .1rem .4rem', textDecoration : 'none', borderRadius : '50px'}} href="https://www.cowin.gov.in/home" target="_blank" rel="noreferrer">Book Now</a>
                </div>
            </div>
            <hr/>
            <div style={{display : 'flex', alignItems : 'center'}}>
                <div style={{borderRadius : '5px', backgroundColor : '#000000', padding : '.2rem'}}>{slot.vaccine}</div>
                <div style={{borderRadius : '50%', width : '3rem', height : '3rem', textAlign : 'center', backgroundColor : '#0066FF', padding : '.2rem', margin : '.5rem'}}>Age<br/>{slot.min_age_limit}+</div>
                <div style={{borderRadius : '50%', width : '3rem', height : '3rem', textAlign : 'center', backgroundColor : availableDosesColor, padding : '.2rem'}}>Dose<br/> {slot.available_capacity}</div>
            </div>

            <hr/>

            <div style={{margin : 'auto', width : 'max-content', backgroundColor : fee_type === 'Free' ? '#3AA655' : 'tomato' , padding : '.2rem 1rem', borderRadius : '25px', textAlign : 'center'}}>
                {fee_type}
            </div>

        </div>
    )
}

export default Slot;
