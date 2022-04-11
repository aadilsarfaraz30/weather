import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const LoadingComponent = () => {
  return (
    <Box sx={{ display: 'flex',width: '100vw',height: '100vh',alignItems: 'center',justifyContent: 'center'}}>
      <CircularProgress size='50px'/>
    </Box>
  )
}

export default LoadingComponent