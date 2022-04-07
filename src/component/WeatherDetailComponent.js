import { Stack, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const WeatherDetailComponent = () => {
  return (
    <Stack sx={{background: 'yellow'}} spacing={4} justifyContent='space-between'>
      <Location>
        <Typography>
          City, country 
        </Typography>
        <Typography>
          Date 
        </Typography>
      </Location>
      <WeatherReport>
        <Box>
          Font
        </Box>
        <Box>
          <Box>
            Degreee
          </Box>
          <Box>
            Weather Type
          </Box>
          </Box>
      </WeatherReport>
    </Stack>
  )
}

export default WeatherDetailComponent

const Location = styled(Box)(()=>({

}))

const WeatherReport = styled(Box)(()=>({

}))