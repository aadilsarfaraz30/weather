import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBarComponent from '../component/AppBarComponent'
import FetchForecast from '../fetchData/FetchForecast'
import WeatherFromCity from '../fetchData/WeatherFromCity'
import WeatherFromCoordinates from '../fetchData/WeatherFromCoordinates'
import { requestCity } from '../redux/action/action'

const AppBarContainer = () => {
    const dispatchCity = useDispatch(requestCity)
    const cityName = useSelector((state) => state.cityData.city);

    const home = () => {
        dispatchCity(requestCity(''))
        window.location.reload(false);
    }

  return (
    <div>
        <AppBarComponent home={home} cityName={cityName}/>
        {!cityName ? <WeatherFromCoordinates/> : <WeatherFromCity /> }
        <FetchForecast/>
    </div>
  )
}

export default AppBarContainer