import "../App.css";
import React, { useEffect, useState } from "react";


/* weather using React */
 function WeatherData() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
    const REACT_APP_API_KEY = "19ec398a3c350d12f7c43ee9b0b1430e"
    //const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
  
    useEffect(() => {
      const data = async () => {
        await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      }
      data();
    }, [lat, long])
  
    return (
      <>
        <div className='container' >
          <h2>React Weather APP</h2>
          <div className="App">
            <p>Location: {data.name}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {long}</p>
            <div>{data.main ? <p>Temperature: {data.main.temp}°F</p> : null}</div>
          </div>
        </div>
        </>
  );
}

export default WeatherData;
