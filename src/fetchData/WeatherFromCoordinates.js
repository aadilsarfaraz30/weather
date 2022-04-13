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
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          getPosition()
            .then((position) => {
              dispatch(
                fetchDataFromCoordinates(
                  position.coords.latitude,
                  position.coords.longitude
                )
              );
            })
            .catch((err) => dispatchError(requestFailed(err)));
        } else if (result.state === "prompt") {
          getPosition()
            .then((position) => {
              dispatch(
                fetchDataFromCoordinates(
                  position.coords.latitude,
                  position.coords.longitude
                )
              );
            })
            .catch((err) => dispatchError(requestFailed(err)));
        }
        else if(result.state === 'denied'){
          alert('Enable your GPS')
        }
        result.onchange = function (){
          console.log(result.state)
        }
      });
    }
    else{
      alert('Sorry not available')
    }
  }, [dispatch, dispatchError]);

  return <div></div>;
};

export default WeatherFromCoordinates;
