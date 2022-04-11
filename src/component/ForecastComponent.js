import { Box, Paper, styled, Typography } from '@mui/material'
import React from 'react'

const ForecastComponent = ({day,weather,temp}) => {
  return (
   <Cards>
       <Body>
    <Typography variant='subtitle2' component='span'>{day}</Typography>
    <Typography variant='subtitle2' component='span'>{weather}</Typography>
    <Typography variant='subtitle2' component='span'>{temp}</Typography>
   </Body>
   </Cards>
  )
}

export default ForecastComponent

const Cards = styled(Paper)(()=>({
    display: 'flex',
    flexDirection : 'column',
    background: 'red',
    // padding: '50px'
    width: '250px',
    // height: '180px'
}))

const Body = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '150px',
    height: '180px',
    background: 'blue'
}))