import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataFromCoordinates,
  requestFailed,
} from "../redux/action/action";

const WeatherFromCoordinates = () => {
  const dispatch = useDispatch(fetchDataFromCoordinates);
  const dispatchError = useDispatch(requestFailed);

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    getPosition()
      .then((position) => {
        if(position){
          dispatch(
            fetchDataFromCoordinates(
              position.coords.latitude,
              position.coords.longitude
            )
            );
        }
    })
        .catch((err) => dispatchError(requestFailed(err)));
  }, [dispatch,dispatchError]);


  return <div></div>;
};

export default WeatherFromCoordinates;
