import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecastData, forecast } from '../redux/action/action'

const FetchForecast = () => {

  const coordinates = useSelector(state => state.coordsData.coords)
  const dispatch = useDispatch(fetchForecastData)

  console.log(coordinates.lat)

  useEffect(()=>{
    dispatch(fetchForecastData(coordinates.lat,coordinates.lon))
  },[coordinates])

  return (
    <div>FetchForecast</div>
  )
}

export default FetchForecast