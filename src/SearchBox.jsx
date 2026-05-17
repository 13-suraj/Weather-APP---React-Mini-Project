import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "9da4c02546baeb33cfdab43988a1d527";

    let getWeather = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        event.preventDefault();
        console.log(city);
        let newInfo = await getWeather();
        updateInfo(newInfo);
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button type='submit' variant="contained">Search</Button>
            </form>
        </div>
    );
}