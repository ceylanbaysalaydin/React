import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import Form from './Form';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [cityWeatherCards, setCityWeatherCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getCityWeather = async () => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`;
      setLoading(true);
      setError(false);
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCityWeatherCards((currentList) => [data, ...currentList]);
      } else {
        throw Error('Something went wrong...');
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

  const closeWeatherCard = (id) => {
    setCityWeatherCards((currentList) => {
      currentList = currentList.filter((card) => card.id !== id);
      return currentList;
    });
  };
  const isCityWeatherCardsReady = cityWeatherCards.length !== 0;

  return (
    <div className="App">
      <h1> Weather </h1>
      <Form inputValue={inputValue} setInputValue={setInputValue} onSubmit={onSubmit} />
      {isLoading && <p> Loading... </p>}
      {hasError && <p className="errorMessage"> Please enter a valid city name! </p>}
      {isCityWeatherCardsReady &&
        cityWeatherCards.map((item) => (
          <div key={item.id}>
            <WeatherCard cityWeather={item} closeWeatherCard={closeWeatherCard} />
          </div>
        ))}
    </div>
  );
}

export default App;
