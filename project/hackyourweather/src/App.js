import React from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import cityWeather from './city-weather.json';

function App() {
  return (
    <div className="App">
      <h1> Weather </h1>
      {cityWeather.map((cityObject) => {
        const {
          id,
          name,
          sys: { country },
          weather,
          main: { temp_max, temp_min },
          coord: { lon, lat },
        } = cityObject;
        return (
          <WeatherCard
            key={id}
            cityName={name}
            countryName={country}
            main={weather[0].main}
            description={weather[0].description}
            temp_min={temp_min}
            temp_max={temp_max}
            lon={lon}
            lat={lat}
          />
        );
      })}
    </div>
  );
}

export default App;
