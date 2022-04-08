import { Stack, styled, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../styles/style'

const WeatherDetailComponent = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Container spacing={4} >
      <Location alignItems={{xs: 'center', sm: 'flex-start'}}>
        <Typography variant='h4' component='h5'>
          City, country 
        </Typography>
        <Typography variant='h6' component='div'>
          Date 
        </Typography>
      </Location>
      <WeatherReport >
        <Box>
          Font
        </Box>
        <Box>
          <Typography variant='h2' component='div'>
            11 &deg;
          </Typography>
          <Typography variant='h6' component='div'>
            Weather Type
          </Typography>
          </Box>
      </WeatherReport>
    </Container>
    // </ThemeProvider>
  )
}

export default WeatherDetailComponent


const Container = styled(Stack)(({theme}) => ({
  [theme.breakpoints.down('sm')] : {
    marginBottom: '30px'
  }
  ,background: 'yellow'
}))

const Location = styled(Stack)(()=>({
  padding: '15px'
}))

const WeatherReport = styled(Stack)(()=>({
  paddingBottom: '10px',  
  flexDirection: 'row',
  justifyContent: 'space-around'
}))
