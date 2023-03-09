import gsap from 'gsap';
import React, { useLayoutEffect, useRef} from 'react'
import { localTimeFormat } from '../../services/WeatherServices';

const Homepage = ({weather}) => {
    let type = useRef()
    let hourF = useRef()
    let dailyF = useRef()
    let header = useRef()
    let forecast = useRef()
    let todayDate = useRef()
    let pl = useRef()
    let previs = useRef()
    let level = useRef()
    let htext = useRef()
    let dtext = useRef()


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.from(header, {
            duration: 1.5,
            opacity: 0,
            y: -80,
            ease: "power3.inOut"
            });
          gsap.from(pl, {
              duration: 2.8,
              opacity: 0,
              y:-80,
              ease: "power3.inOut",
              });
            gsap.from([forecast,todayDate], {
              duration: 2,
              opacity: 0,
              ease: "power3.inOut"
              });
              
            gsap.from(type, {
                duration: 2,
                opacity: 0,
                x: 100,
                ease: "power3.inOut"
            });
          

            gsap.from(hourF, {
                duration: 1,
                stagger: {
                    amount: .8,
                    ease: "power3.inOut"
                },
                ease: "power3.inOut",
                opacity: 0,
                x: -60,
                delay: .4
            })
            gsap.from(dailyF, {
                duration: 1.8,
                stagger: {
                    amount: .4,
                    ease: "power3.inOut"
                },
                ease: "power3.inOut",
                opacity: 0,
                x: -60,
                delay: .6
            })
            gsap.from(previs, {
              duration: 2,
              stagger: {
                  amount: .4,
                  ease: "power3.inOut"
              },
              ease: "power3.inOut",
              opacity: 0,
              x: -60,
              delay: .6
          })
          gsap.from(level, {
            duration: 2,
            ease: "power3.inOut",
            opacity: 0,
            x: -80,
            delay: .8
        })
        gsap.from([htext,dtext], {
          duration: 2.2,
          stagger: {
              amount: .2,
              ease: "power3.inOut"
          },
          ease: "power3.inOut",
          opacity: 0,
          x:-80,
          delay: .2
      })
        },);

        return() => ctx.revert();
    }, []);
    return (
        <section className='weather'>
            <div ref={el => header = el} className="header">National Weather</div>
            <span ref={el => forecast = el} className='forecast'>Weather Forecast</span>
            <div ref={el => type = el} className="type">
                <span className="weather-type">{weather.main}</span>
                <span className="weather-type">{weather.description}</span>
            </div>
            <div ref={el => todayDate = el} className="today-date">
                {localTimeFormat(weather.dt, weather.timezone)}
            </div>
            <span ref={el => pl = el} className="place">{weather.name}, {weather.country}</span>
            <div ref={el => previs = el} className="pre-vis">
                <span className="pressure">Pressure -
                    <span className='pv-text'>{weather.pressure} atm</span>
                </span>
                <span className="visibility">Visibility -
                    <span className='pv-text'>{weather.visibility} m</span>
                </span>
            </div>
            <div ref={el => level = el} className="level">
                <span className="ground">Ground-level -
                    <span className='pv-text'>{weather.grnd_level} m</span>
                </span>
                <span className="sea">Sea-level -
                    <span className='pv-text'>{weather.sea_level} m</span>
                </span>
            </div>
            <span ref={el => htext = el} className="hourly-forecast">Hourly Forecast</span>
            <div ref={el => hourF = el} className="hour-wrapper">
                {weather.hourly.map((h, index) => (
                <div className="hour-details">
                    <span className="hour-temp">{h.temp.toFixed()}</span>
                    <span className="hour">{h.time}</span>
                </div>
                    ))
                }
            </div>
            <span ref={el => dtext = el} className="daily-forecast">Daily Forecast</span>
            <div ref={el => dailyF = el} className="daily-wrapper">
            {weather.day.map((d, index) => (
                <div className="daily-details">
                    <span className="daily-temp">{d.temp.toFixed()}</span>
                    <span className="daily">{d.day}</span>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Homepage
