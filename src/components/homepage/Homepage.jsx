import React from 'react'

const Homepage = () => {
  return (
    <section className='weather'>
        <div className="header">National Weather</div>
        <span className='forecast'>Weather Forecast</span>
        <div className="type">
        <span className="weather-type">Storm</span>
        <span className="weather-type">Heavy Rain</span>
        </div>
        <div className="today-date">
          Tuesday, 31 May 2022, 8:45 pm
        </div>
        <span className="place">Dhaka, Bangladesh</span>
        <div className="pre-vis">
          <span className="pressure">Pressure - <span className='pv-text'>1015 mb</span></span>
          <span className="visibility">Visibility - <span className='pv-text'>1015 m</span></span>
        </div>
        <div className="level">
          <span className="ground">Ground-level - <span className='pv-text'>1015 mb</span></span>
          <span className="sea">Sea-level - <span className='pv-text'>1015 m</span></span>
        </div>
        <span className="hourly-forecast">Hourly Forecast</span>
        <div className="hour-wrapper">
        <div className="hour-details">
          <span className="hour-temp">15°</span>
          <span className="hour">12:00 PM</span>
        </div>
        <div className="hour-details">
          <span className="hour-temp">16°</span>
          <span className="hour">1:00 PM</span>
        </div>
        <div className="hour-details">
          <span className="hour-temp">17°</span>
          <span className="hour">2:00 PM</span>
        </div>
        <div className="hour-details">
          <span className="hour-temp">21°</span>
          <span className="hour">3:00 PM</span>
        </div>
        <div className="hour-details">
          <span className="hour-temp">22°</span>
          <span className="hour">4:00 PM</span>
        </div>
        </div>
        <span className="daily-forecast">Daily Forecast</span>
        <div className="daily-wrapper">
        <div className="daily-details">
          <span className="daily-temp">15°</span>
          <span className="daily">wed</span>
        </div>
        <div className="daily-details">
          <span className="daily-temp">16°</span>
          <span className="daily">thu</span>
        </div>
        <div className="daily-details">
          <span className="daily-temp">17°</span>
          <span className="daily">fri</span>
        </div>
        <div className="daily-details">
          <span className="daily-temp">21°</span>
          <span className="daily">sat</span>
        </div>
        <div className="daily-details">
          <span className="daily-temp">22°</span>
          <span className="daily">sun</span>
        </div>
        </div>
    </section>
  )
}

export default Homepage
