import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ExtraDetailComponents from "../component/ExtraDetailComponents";
import WeatherDetailComponent from "../component/WeatherDetailComponent";

const DisplayContainer = () => {
  
  const currentForecast = useSelector(state=> state.weatherData.weatherData) 
  
  return (
   
    <Box sx={{display: 'flex',justifyContent: 'center'}}>
    <Box sx={{ background: 'red',width:'95%'}}>
    <Grid  container columnSpacing={2} >
      <Grid item xs={12} sm={6} md={6} alignSelf='center' justifySelf='self-start'>
        <WeatherDetailComponent />
      </Grid>
      <Grid item xs={12} sm={6} md={6} alignSelf='center' justifySelf='self-start' >
        <ExtraDetailComponents />
      </Grid>
    </Grid>
    </Box>
    </Box>
  );
};

export default DisplayContainer;
