import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchDataFromCoordinates } from '../redux/action/action';

const WeatherFromCoordinates = () => {
    // const [lat, setLat] = useState()
    // const [lon, setLon] = useState()

    const dispatch = useDispatch(fetchDataFromCoordinates)

    // function getLocation (){
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(position => {
    //             // console.log(position)
    //             setLat(position.coords.latitude)
    //             setLon(position.coords.longitude)
    //         })
    //     }
    // }
    
    const getPosition = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };

    // console.log(lat)
    // console.log(lon)
    const fetchData= (lat,lon) =>{
     fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=795d4fdd89c3e705da253a9f1bb1d983`,
    ).then(data => {
        console.log(data.json())
    })
    }

    useEffect(()=>{
        getPosition().then((position) => {
           dispatch( fetchDataFromCoordinates(
            position.coords.latitude,
            position.coords.longitude,
          ))
          }).catch(err=> console.log(err));
    },[])

  return (
    <div>WeatherFromCoordinates</div>
  )
}

export default WeatherFromCoordinates