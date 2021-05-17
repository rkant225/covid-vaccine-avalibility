import { useEffect, useState } from 'react';
import axios from 'axios';
import Center from '../Center/Center';

const ByDistrict =()=> {

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [centers, setCenters] = useState([]);
  const [noCenterAvailableError, setNoCenterAvailableError] = useState("");

  // const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const fetchStates = async ()=>{
    const URL = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;
    const response = await axios.get(URL);
    console.log(response.data.states[0]);
    setStates(response.data.states);
  }

  const fetchDistricts = async (state_id)=>{
    const URL = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`;
    const response = await axios.get(URL);
    console.log(response.data.districts[0]);
    setDistricts(response.data.districts);
  }

  useEffect(()=>{
    fetchStates();

  },[])

  const [date, setDate] = useState(new Date());
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const getFormatedDate = (date) =>{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatedDate = `${day}-${month}-${year}`;

    return formatedDate;
  }

  const fetchDataFromApi = async (date, district_id) =>{

      const formatedDate = getFormatedDate(date);

      const URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${formatedDate}`
      console.log(date, URL)
      const response = await axios.get(URL);
      console.log(response.data.sessions)
      const centers = response.data.sessions;
      setCenters(centers);
      
      setIsButtonDisabled(false);
      if(centers.length === 0){
        setNoCenterAvailableError("No vaccination centers available for next 7 days.");
      } else {
        setNoCenterAvailableError("");
      }
  }

  const incrimentDate = async () =>{
    const newDate = new Date(new Date(date).setDate(new Date(date).getDate() + 7));
    setDate(newDate);
    await fetchDataFromApi(newDate, selectedDistrict);
  }

  const decrimentDate = async () =>{
    const newDate = new Date(new Date(date).setDate(new Date(date).getDate() - 7));
    setDate(newDate);
    await fetchDataFromApi(newDate, selectedDistrict);
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

  const handleStateChange = async (e)=>{
    const state_id = e.target.value;
    if(state_id){
      fetchDistricts(state_id);
    }
    setDistricts([]);
  }

  const handleDistrictChange = (e)=>{
    const district_id = e.target.value;
    // const district_id = "512";
    fetchDataFromApi(date, district_id)
    setSelectedDistrict(district_id);
    console.log(e.target.value)
  }

  return (
    <div className="app-container">

      <select onChange={handleStateChange} className="drop-down">
        <option value={""}>Please select State</option>
        {states.map((state, index)=>{
          return(
            <option key={index} value={state.state_id}>{state.state_name}</option>
          );
        })}
      </select>

      {districts.length > 0 && 
        <select onChange={handleDistrictChange} className="drop-down">
          <option value={""}>Please select District</option>
          {districts.map((district, index)=>{
            return(
              <option key={index} value={district.district_id}>{district.district_name}</option>
            );
          })}
        </select>
      }

      
      {/* Display Righe/Left Arrow buttons */}
      <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <div onClick={decrimentDate} className={`arrow-left ${isLeftButtonDisabled()}`}></div>
          <div style={{marginTop : '1rem' }}>{date.toDateString()}</div>
          <div onClick={incrimentDate} className={`arrow-right ${isRightButtonDisabled()}`}></div>
      </div>

      <br/>

      {centers.map((center, index)=>{
          return(
            <div key={index}>
              <Center center={center} isByDistrict={true}/>
            </div>
          );
        })
      }

      {noCenterAvailableError && <div style={{color : 'red', fontSize : '1.5rem'}}>{noCenterAvailableError}</div>}

    </div>
  );
}

export default ByDistrict;