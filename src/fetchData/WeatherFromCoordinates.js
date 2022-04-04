import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchDataFromCoordinates } from '../redux/action/action';

const WeatherFromCoordinates = () => {
const dispatch = useDispatch(fetchDataFromCoordinates)
const getPosition = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };

    useEffect(()=>{
        // let subscribe = true;
        getPosition().then((position) => {
          // if (subscribe){
            dispatch( fetchDataFromCoordinates(
              position.coords.latitude,
              position.coords.longitude,
            ))
          // }
         }).catch(err=> console.log(err));
        //  return () => {subscribe=false}
    },[])

  return (
    <div>WeatherFromCoordinates</div>
  )
}

export default WeatherFromCoordinates