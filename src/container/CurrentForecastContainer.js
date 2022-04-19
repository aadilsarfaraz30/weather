import { Box, Grid } from '@mui/material'
import React from 'react'
import ExtraDetailComponents from '../component/ExtraDetailComponents'
import WeatherDetailComponent from '../component/WeatherDetailComponent'

const CurrentForecastContainer = () => {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center'}}>
    <Box sx={{width:'95%'}}>
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
  )
}

export default CurrentForecastContainer