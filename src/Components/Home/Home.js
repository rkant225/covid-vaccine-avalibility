import { useState } from 'react';
import axios from 'axios';
import Center from '../Center/Center';

const Home =()=> {

  const [pinCode, setPinCode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [date, setDate] = useState(new Date());
  const [vaccinationCenters, setVaccinationCenters] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const getFormatedDate = (date) =>{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatedDate = `${day}-${month}-${year}`;

    return formatedDate;
  }

  const fetchDataFromApi = async (date) =>{
    console.log(pinCode)

      const formatedDate = getFormatedDate(date);

      const URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formatedDate}`
      console.log(date, URL)
      const response = await axios.get(URL);
      if(response && response.data && response.data.centers && response.data.centers.length != 0){
        setVaccinationCenters(response.data.centers);
        setPinCodeError('');
      } else {
        setPinCodeError("No vaccination centers are available for next 7 days.")
        setVaccinationCenters([]);
      }
      setIsButtonDisabled(false);
  }


  const onSubmit = async (e) =>{
    e.preventDefault()
    setVaccinationCenters([]);
    
    if(pinCode.length < 6 || pinCode.length > 6){
      setPinCodeError('Pin code must be of 6 digits.');
      setIsButtonDisabled(true);
    } else {
        
        // Other way to get form values
        // const form = document.getElementById('my-form');
        // const formData = new FormData(form);
        // const _pinCode = formData.get('pinCode')
        // console.log(_pinCode)

        const date = new Date();
        setDate(date);
        await fetchDataFromApi(date);
      
    }
  }

  const handlePinCodeChange = (e) =>{
    if(e.target.value.length == 6){
      setPinCodeError("");
    }
    setPinCode(e.target.value);
  }

  const incrimentDate = async () =>{
    const newDate = new Date(new Date(date).setDate(new Date(date).getDate() + 7));
    setDate(newDate);
    await fetchDataFromApi(newDate);
  }

  const decrimentDate = async () =>{
    const newDate = new Date(new Date(date).setDate(new Date(date).getDate() - 7));
    setDate(newDate);
    await fetchDataFromApi(newDate);
  }

  const isLeftButtonDisabled = () =>{
    let className = "";
    if(date < new Date() || isButtonDisabled){
      className = 'disabled-left-button';
    }
    return className;
  }

  const isRightButtonDisabled = () =>{
    let className = "";
    if(isButtonDisabled){
      className = 'disabled-right-button';
    }
    return className;
  }

  return (
    <div className="app-container">

        {/* Rotating logo */}
        <div className="logo rotate"></div>

        {/* Form to collect pincode from user */}
        <form onSubmit={onSubmit} id="my-form">
            {/* <input placeholder="Enter your pincode..." onChange={handlePinCodeChange} value={pinCode} name="pinCode" className="search-box" type="number" min="100000" max="999999"/> */}
            <input placeholder="PIN code..." onChange={handlePinCodeChange} value={pinCode} name="pinCode" className="search-box" type="number"/>
        </form>

        {/* Display Righe/Left Arrow buttons */}
        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
            <div onClick={decrimentDate} className={`arrow-left ${isLeftButtonDisabled()}`}></div>
            <div style={{marginTop : '1rem' }}>{date.toDateString()}</div>
            <div onClick={incrimentDate} className={`arrow-right ${isRightButtonDisabled()}`}></div>
        </div>

        <br/>
        
        {/* Display Error */}
        {pinCodeError && <span className="error">{pinCodeError}</span>}

        {/* Display all the centers */}
        {vaccinationCenters.map((center)=>{
          return(
              <Center center={center}/>
          );
        })}

    </div>
  );
}

export default Home;
