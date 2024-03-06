
import React, { useState } from 'react';
import weatherService from './components/weatherService';
import WeatherDisplay from './components/WeatherDisplay';
import SearchForm from './components/SearchForm';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true); 

  const handleSearch = async (location) => {
    try {
      const response = await weatherService.getWeather(location);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchForm onSearch={handleSearch} />
      <label>
        <input type="checkbox" checked={isCelsius} onChange={() => setIsCelsius(!isCelsius)} />
        Celsius
      </label>
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} isCelsius={isCelsius} />}
    </div>
  );
};

export default App;
