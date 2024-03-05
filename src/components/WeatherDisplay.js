// WeatherDisplay.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const WeatherDisplay = ({ weatherData, isCelsius }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { name, main, weather, wind } = weatherData;
  const temperature = Math.round(isCelsius ? main.temp - 273.15 : (main.temp - 273.15) * 9 / 5 + 32);

  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <CardText>
          <strong>Temperature:</strong> {temperature}{isCelsius ? '°C' : '°F'}
        </CardText>
        <CardText>
          <strong>Feels Like:</strong> {Math.round(isCelsius ? main.feels_like - 273.15 : (main.feels_like - 273.15) * 9 / 5 + 32)}{isCelsius ? '°C' : '°F'}
        </CardText>
        <CardText>
          <strong>Description:</strong> {weather[0].description}
        </CardText>
        <CardText>
          <strong>Humidity:</strong> {main.humidity}%
        </CardText>
        <CardText>
          <strong>Wind:</strong> {wind.speed} m/s
        </CardText>
      </CardBody>
    </Card>
  );
};

export default WeatherDisplay;
