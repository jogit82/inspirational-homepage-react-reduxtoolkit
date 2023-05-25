import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, selectWeather } from "./weatherSlice";

export const Weather = () => {
  const {
    metadata,
    temperature,
    city,
    state,
    humidity,
    maxTemp,
    minTemp,
    name,
  } = useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ city, state }));
  }, [dispatch]);

  return (
    <div className="weather">
      <div className="temperature-container">
        <img
          src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
          alt=""
        />
        <div className="weather-text">
          <p className="temperature">{temperature}°</p>
          <p className="weather-description">{metadata.description}</p>
          <span className="weather-min-max">
            Min/Max temp: {minTemp}/{maxTemp}
          </span>
          <p className="weather-humidity">Humidity: {humidity}</p>
          <p className="weather-name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
