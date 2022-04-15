import { Box, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const ForecastComponent = ({day,weather,temp}) => {

    let weatherIcon = null;

  let main = weather;
  if (main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === "Dribble") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === "Clouds" || main === "Broken Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else if (main === "Haze") {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  } else if (main === "Mist") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  }else {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  }


  return (
   <Cards elevation={2}>
       <Body>
    <Typography variant='h6' component='span'>{day}</Typography>
    <Icon>{weatherIcon}</Icon>
    <Typography variant='h6' component='span'>{temp}&deg;</Typography>
   </Body>
   </Cards>
  )
}

export default ForecastComponent

const Cards = styled(Paper)(()=>({
    display: 'flex',
    flexDirection : 'column',
    borderRadius: '10px',
    background: 'rgba(180, 200, 200,0.3)',
    color: '#06113C',
}))

const Body = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '150px',
    height: '180px',
}))

const Icon = styled(Box)(() => ({
    width: "30%",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));