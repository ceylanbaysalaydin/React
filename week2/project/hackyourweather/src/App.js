import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import Form from './Form';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`;

  const getCityWeather = async () => {
    try {
      if (inputValue !== '') {
        setLoading(true);
        const res = await fetch(URL);

        if (res.status !== 500) {
          const data = await res.json();
          setCityWeather(data);
        } else {
          throw Error('Something went wrong...');
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    getCityWeather();
    e.preventDefault();
  };
  const isCityWeatherReady = Object.keys(cityWeather).length !== 0;

  return (
    <div className="App">
      <h1> Weather </h1>
      <Form inputValue={inputValue} setInputValue={setInputValue} onSubmit={onSubmit} />
      {isLoading && <p> Loading... </p>}
      {hasError && <p> Something went wrong! </p>}
      {isCityWeatherReady && (
        <div>
          <WeatherCard cityWeather={cityWeather} />
        </div>
      )}
    </div>
  );
}

export default App;
