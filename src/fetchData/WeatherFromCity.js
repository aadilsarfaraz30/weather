import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDataFromCity } from '../redux/action/action'

const WeatherFromCity = () => {

    const dispatch = useDispatch(fetchDataFromCity)

    const london = 'london'

    useEffect(()=>{
        dispatch(fetchDataFromCity(london))
    })
  return (
    <div>WeatherFromCity</div>
  )
}

export default WeatherFromCity