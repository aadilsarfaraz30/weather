import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromCity } from "../redux/action/action";

const WeatherFromCity = () => {
  const dispatch = useDispatch(fetchDataFromCity);

  const cityName = useSelector((state) => state.cityData.city);

  useEffect(() => {
    dispatch(fetchDataFromCity(cityName));
  }, [cityName]);
  
  return <div>WeatherFromCity {cityName}</div>;
};

export default WeatherFromCity;
