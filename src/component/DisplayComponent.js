import React from "react";
import { useSelector } from "react-redux";
import WeatherFromCity from "../fetchData/WeatherFromCity";
import WeatherFromCoordinates from "../fetchData/WeatherFromCoordinates";

const DisplayComponent = () => {
  const cityName = useSelector((state) => state.cityData.city);
  return (
    <div>{cityName ? <WeatherFromCity /> : <WeatherFromCoordinates />}</div>
  );
};

export default DisplayComponent;
