import React, { useState } from 'react'
import temp from '../../image/Thermometer.png'
import search from '../../image/Search.png'
import { DayNightInfo } from './DayNightInfo'
import { PopularCities } from './PopularCities'
import both from '../../image/Data Transfer.png'


const Sidebar = () => {
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
        <div className="temperature">20°</div>
        <div className="humidity">
            <span className='text-humidity'>45%</span>
            <span className='text-humidity'>Humidity</span>
        </div>
        <div className="wind">
            <span className='text-wind'>4 KM/H</span>
            <span className='text-wind'>Wind speed</span>
        </div>
        <div className="feels-like">
            <span className='text-feels-like'>Feels like</span>
            <span className='text-feels-like'>17°</span>
        </div>
        <div className="day-night-lists">
        {DayNightInfo.map((info, index) => (
        <>
        <span className='day-night-list' key={index}>{info.name}{" "}-{" "}<span className='day-night-list second'>{info.data}</span>
        </span>
        </>
        ))}
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
