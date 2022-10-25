import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import weatherResponse from "./weatherActions";


const Weather = () => {
    const state = useSelector(state => state)
    // console.log(state)
    const data = state.data;
    console.log(data)
    const dispatch = useDispatch()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)

            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
           dispatch(weatherResponse(latitude, longitude))
            console.log(latitude,longitude)
            // dispatch(weatherResponse(
            //      position.coords.latitude,
            //      position.coords.longitude
            // ))
        });
    }, []);
    return (
        <>
            <div className='container' >
                <h2>REDUX WEATHER APP</h2>
                <div className="fig">
                    <p>Location: {data.name}</p>
                    <div>{data.main ? <p>Temperature: {data.main.temp}°F</p> : null}</div>
                    <div>{data.coord ? <p>latitude: {data.coord.lat}°F</p> : null}</div>
                    <div>{data.coord ? <p>longitude: {data.coord.lon}°F</p> : null}</div>
                </div>
            </div>
        </>
    )
}

export default Weather;