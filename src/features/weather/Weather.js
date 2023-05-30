import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getWeather,
  selectWeather,
  getCoords,
  selectLat,
  selectLon,
} from "./weatherSlice";

export const Weather = () => {
  const lat = useSelector(selectLat);
  const lon = useSelector(selectLon);
  const coords = { lat: lat, lon: lon };
  const { metadata, temperature, humidity, maxTemp, minTemp, name } =
    useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoords());
    dispatch(getWeather(coords));
  }, [dispatch, coords]);

  return (
    <div className="weather">
      <div className="temperature-container">
        <img
          src={`http://openweathermap.org/img/w/${metadata.icon}.png`}
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
