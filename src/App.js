import {useEffect, useState} from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Sidebar from './components/sidebar/Sidebar';
import getFormattedWeatherData from './services/WeatherServices';
import getWeather from './services/WeatherServices';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

function App() {

    const [query, setquery] = useState({q: "london"});
    const [units, setunits] = useState("metric");
    const [weather, setweather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const message = query.q
                ? query.q
                : "current location."
            toast.info("Fetching weather for " + message)
            await getFormattedWeatherData({
                ...query,
                units
            }).then((data) => {
                toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
                setweather(data)
            })
            //console.log(weather)
        }
        fetchWeather()
    }, [query])

    return (

        <div className="container">
            {
                weather && (<> < Sidebar weather = {
                    weather
                }
                setquery = {
                    setquery
                } /> <Homepage weather={weather}/>
            </>)
            }
            <ToastContainer theme='dark' autoClose={3000} newestOnTop={true} transition={Slide}/>
        </div>
    );
}

export default App;
