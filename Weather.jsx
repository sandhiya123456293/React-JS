import React,{useEffect,useRef,useState} from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/snow.png'
import humidity_icon from '../assets/snow.png'



const Weather = () => {
  const inputRef=useRef()
  const [weatherData,setWeatherData]=useState(false);

  const allIcons={
    "01d":search_icon,
    "01d":clear_icon,
    "01n":clear_icon,
    "02d":cloud_icon,
    "02n":cloud_icon,
    "03d":cloud_icon,
    "03n":cloud_icon,
    "04d":drizzle_icon,
    "04n":drizzle_icon,
    "09d":rain_icon,
    "09n":rain_icon,
    "10d":rain_icon,
    "10n":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,
    "01d":wind_icon,
    "01d":humidity_icon,

  }

  const search=async (city)=>{
    if(city === ""){
      alert("Enter City Name");
      return;
    }
    try{
      const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

      
      const response=await fetch(URL);
      const  data=await response.json();

      if(response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon=allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:icon
      })

    } catch(error){
      

    }
  }

  useEffect(()=>{
    search("london");
  },[])

  function App(){
    const[temp,setTemp]=useState(0);
    useEffect(()=>{
      const fetchData=async()=>{
        const result=await fetch(URL)
        result.json().then(json=>{
        setTemp(json.current.temp_f);
      })
    }
      fetchData();
    },[]);
  }


  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type="text" placeholder='search'/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAY1BMVEX///8AAAD8/Pzx8fEEBAQeHh7u7u5cXFytra3c3NzX19e9vb3n5+f39/fr6+vMzMxLS0tVVVV/f381NTUrKyvGxsajo6NmZmZCQkIYGBh1dXWUlJSGhoYjIyO0tLSMjIwRERF7nXZ2AAADj0lEQVR4nO2a2ZKCMBBFIaCArLKICi7//5UT0kFxQTIPmn64p6asKc3DpblJL+A4AAAAAAAAAAAAAAAAAAAAAAAAAAuEl2WZJ2zLMGOQmeZh1x+DIGj7Lsw925JMiPqidu/URbmxLekDQ5C9uCKt/uTTPcWMwy2arfue7Zkuih9e779V7A9fl5ltea8I4USnqTMOq9PqOrGIW+W2Nb4iYvemuW4vuzjP8zi8tNU94mfbGh+Rdg1XY0yr3ea+77xNuL+FO7Qo8RXhnG/xjNOnH9NzrX0tVXPajblWfO2952NCuj0tD0Os5V9jSd87kv0gSYqKZyIZS/MMwa4SNkef6PUOnA9kpH1dMpEs46gz9mY2ivcDkYmthaNrjfjjMumQgT2TjB6S5n5h2WUMNQfSgo7n56PuhZps/QtNi5yv2hxLZs0ZJUa67cF6UXQaqJXHn6j6hHAScsfOYDGlzX1i/wChmz5kjUUidX3Xz6fMTwjV9gqM1h6Nb8qXUdnQ7YzWdnQ2WneHQ5Y2q/AbVTi19vMLVfmR0dpIFd1b652XoOy8NlqcnfTxYRlBTcliOlR4qkqprYt2/H9EmkQbHY/fhUo8Mx1UnxbWPa1PD7PRV37QGd8u4h8JQzg7tbY02wDfhIS0RmtLHhlROA3VHiYJI1Nlnm+9NpXNX2XckMSq/d2bJaKvkpaqYjouFxSi/IeTvgyZ+jDfihPCyVwelh7I9tS6LIZ6Sz2i/Rpv4ELTo6X9FdO8pvyJpkVSUnP6vMH0hvUZbEPnljN8t/iUy5MtI0cPeFpQkAwz0rest3Rhspbm4WnZkejBWDHXaCetHkDWy+ORn7HTmqr3s964dmmBryZ+LGRLT1DeGFLH5kVSdPtR0fAQLVWI46jpdGkeRDWX2n14VHdgMPfQyGw+alvte/2INm36YuU+4zez+/W3SBW7V3lzcHGIpCnGp1gTO6jtJz+u0y+vXHajZN3NxraMggdfM4q1k5TVG8X1UebKdfvkEEZEXbu6G0Oyajvqer1JrP2lJzS/Zr2Jy/EVim153qzJv+JWfuiLYeQQEiIk3vBx/07+nz06hFesZ3nyNef3hEaGWD+cIYH9ma8RyVT1ieF7K28Qjjd1iPUJiBFibAcUV0bF9UemJx+HsY0RYuIQHo/JTRgcoorvg9kTMTakeVfulkZSzNBieXQCAAAAAAAAAAAAAAAAAAAAAAAADPkDRW0dSJomZIoAAAAASUVORK5CYII=" onClick={()=>search(inputRef.current.value)} width={"30px"}/>
            </div>
            
            
           
            <img src="data:image/jpeg;base64,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" className='weather_icon'/>
            <p className='temperature'>{weatherData.temperature}°c</p>
            <p className='location'>{weatherData.location}</p>
            <div className='weather-data'>
              <div className='col'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI1vV4imA43FMvYS4G_A3M3To38egxiM6Iw&s" width={"50px"}/>
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
                </div>
          
              <div className='col'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaVmpsjZll90C_7Ew_YS1rUuGOFkQW4V0bQ6yRyqkUoIGz71ci3JLS1fkyID12bwq6Pw&usqp=CAU" width={"50px"}/>
                <div>
                  <p>{weatherData.windSpeed} km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
            
      
    </div>
  )
}

export default Weather
