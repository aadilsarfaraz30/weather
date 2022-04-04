import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromCoordinates } from "../redux/action/action";

const WeatherFromCoordinates = () => {
  const data = useSelector((state) => state.weatherData.data);
  const dispatch = useDispatch(fetchDataFromCoordinates);
  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    // let subscribe = true;
    getPosition()
      .then((position) => {
        // if (subscribe){
        dispatch(
          fetchDataFromCoordinates(
            position.coords.latitude,
            position.coords.longitude
          )
        );
        // }
      })
      .catch((err) => console.log(err));
    //  return () => {subscribe=false}
  }, [dispatch]);

 console.log(data)  
  return (
    <div>
      <Paper sx={{height: '200px',width: '200px'}}>WeatherFromCoordinates</Paper>
      {data ? <p>{data.name}</p> : <p>loading...</p>}
    </div>
  );
};

export default WeatherFromCoordinates;
