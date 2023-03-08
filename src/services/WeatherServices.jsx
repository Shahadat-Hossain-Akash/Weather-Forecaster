import {DateTime} from "luxon"

const API_KEY = '36f307b66234f8eb445895e16b4adf7a'
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeather = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY
    })

    return fetch(url).then((res) => res.json())
}

const formattedCW = (data) => {
    const {
        coord: {
            lon,
            lat
        },
        name,
        timezone,
        visibility,
        dt,
        weather,
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity
        },
        wind: {
            speed
        },
        sys: {
            country,
            sunrise,
            sunset
        }
    } = data
    

    const {main, description} = weather[0]

    return {
        lon,
        lat,
        name,
        timezone,
        visibility,
        dt,
        main,
        description,
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        sunrise,
        sunset
    }
}

const formatForecastWeather = (data) => {
    let hourly, daily, grnd_level, sea_level 
    let {city: {timezone}, list} = data
    const {main} = list[39]
    sea_level = main.sea_level
    grnd_level = main.grnd_level
    hourly = list
        .slice(1, 6)
        .map(d => {
            return {
                time: localTimeFormat(d.dt, timezone, 'hh:mm a'),
                day: localTimeFormat(d.dt, timezone, 'ccc'),
                tempMax: d.main.temp_max,
                tempMin: d.main.temp_min,
                temp: d.main.temp
            }
        })
    let day = []
    daily = list
        .map(d => {
            return {
                day: localTimeFormat(d.dt, timezone, 'ccc'),
                temp: d.main.temp
            }
        })
        for(var i=0;i<daily.length;i++){
            if(i%8 === 0){
                day.push(daily[i])
            }
        }
    
    return {timezone, hourly, day, grnd_level, sea_level}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedData = await getWeather("weather", searchParams).then(
        formattedCW
    )

    const {lat, lon} = formattedData
    const forecastFormattedData = await getWeather("forecast", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units
    }).then(formatForecastWeather)
    return {...formattedData, ...forecastFormattedData}
}

const localTimeFormat = (secs, zone, format = "cccc, dd LLL yyyy', 'hh:mm a") => DateTime
    .fromSeconds(
        secs
    )
    .setZone(zone)
    .toFormat(format)

export default getFormattedWeatherData

export {localTimeFormat}