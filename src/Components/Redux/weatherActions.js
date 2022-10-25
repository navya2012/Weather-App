import axios from "axios"


const REACT_APP_API_KEY = '19ec398a3c350d12f7c43ee9b0b1430e'



 const weatherResponse = (latitude,longitude) =>{
   console.log(latitude,longitude)
    return async dispatch =>{
      await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_API_KEY}`)
       .then(response =>
         { console.log(response.data)
          dispatch({type:'WEATHERINFO', payload:response.data})
         })
        
    } 

} 
export default weatherResponse;




   