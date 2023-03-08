import {useEffect, useState} from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Sidebar from './components/sidebar/Sidebar';
import getFormattedWeatherData from './services/WeatherServices';
import getWeather from './services/WeatherServices';

function App() {

    const [query, setquery] = useState({q: "london"});
    const [units, setunits] = useState("metric");
    const [weather, setweather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units}).then((data) => setweather(data))
            console.log(weather)
        }
        fetchWeather()
    }, [query, units])

    
    return (

        <div className="container">
        {weather && (
          <>
            <Sidebar weather={weather}/>
            <Homepage weather={weather}/>
            </>
            )}
        </div>
    );
}

export default App;
