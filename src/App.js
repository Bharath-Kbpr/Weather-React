import axios from 'axios'
import City from './component/City'
import Weather from './component/Weather'
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

 const Fetch = async (e) => {
 
   e.preventDefault();
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31c6a1d2e64b32c7782b1ad64bb6923c`
    
  );
 
 
  setWeather(response.data);
 };
 
  // 
  return (
    <div className="App">
     <div className="card">
    
     
     {
       weather ? (<Weather weather={weather} />) : (<City setCity={setCity} Fetch={Fetch}/>)
    
    }
     </div>
    </div>
  );
}

export default App;
