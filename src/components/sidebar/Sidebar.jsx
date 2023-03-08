import React, { useState } from 'react'
import temp from '../../image/Thermometer.png'
import search from '../../image/Search.png'
import { DayNightInfo } from './DayNightInfo'
import { PopularCities } from './PopularCities'
import both from '../../image/Data Transfer.png'
import { localTimeFormat } from '../../services/WeatherServices'
import { DateTime } from 'luxon'


const Sidebar = ({weather}) => {
    const [slider, setslider] = useState(false)
    const handleSlider = () => {
        if(slider){
            setslider(false)
        }
        else{
            setslider(true)
        }
    }
  return (

    <aside className={slider ? "sidebar" : "sidebar sidebar-inactive"}>
    <div onClick={handleSlider} className="slider"><img src={both} alt="" /></div>
        <div className="search-content">
            <img src={temp} alt="" />
            <input className='search' type="text" placeholder='Dhaka, Bangladesh'/>
            <img src={search} alt="" />
        </div>
        <div className="temperature">{weather.temp}°</div>
        <div className="humidity">
            <span className='text-humidity'>{weather.humidity}%</span>
            <span className='text-humidity'>Humidity</span>
        </div>
        <div className="wind">
            <span className='text-wind'>{weather.speed} km/h</span>
            <span className='text-wind'>Wind speed</span>
        </div>
        <div className="feels-like">
            <span className='text-feels-like'>Feels like</span>
            <span className='text-feels-like'>{weather.feels_like}°</span>
        </div>
        <div className="day-night-lists">
        <>
        <span className='day-night-list'>Sunrise{" "}-{" "}<span className='day-night-list second'>{DateTime.fromSeconds(weather.sunrise).toFormat("hh:mm a")}</span>
        </span>
        <span className='day-night-list'>Sunset{" "}-{" "}<span className='day-night-list second'>{DateTime.fromSeconds(weather.sunset).toFormat("hh:mm a")}</span>
        </span>
        <span className='day-night-list'>Max{" "}-{" "}<span className='day-night-list second'>{weather.temp_max} °</span>
        </span>
        <span className='day-night-list'>Min{" "}-{" "}<span className='day-night-list second'>{weather.temp_min} °</span>
        </span>
        </>
        </div>
        <span className='popular'>Popular searches</span>
        <div className="cities">
            {PopularCities.map((pc) => (
                <button className="city">{pc.city}</button>
            ))}
        </div>
        <span className='author'>Designed and coded by Shahadat</span>
    </aside>
  )
}

export default Sidebar
