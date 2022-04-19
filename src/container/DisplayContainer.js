import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../component/LoadingComponent";
import CurrentForecastContainer from "./CurrentForecastContainer";
import ForecastContainer from "./ForecastContainer";
import SearchContainer from "./SearchContainer";
import useMediaQuery from '@mui/material/useMediaQuery';

const DisplayContainer = () => {
  const data = useSelector((state) => state.weatherData);

  const city = useSelector(state => state.cityData)
  const media = useMediaQuery('(min-width: 600px)')  
  return (
    <>
        {!data.loading ? 
        <Stack spacing={2} sx={{height: '100vh'}} justifyContent='space-between'>
        <SearchContainer />
         <Box sx={{height: '90vh',display: 'flex',flexDirection: 'column',justifyContent: media ? 'space-around' : 'space-between' }}>
         {(!data.data && city === '') ? alert('Enable your GPS') : <CurrentForecastContainer />}
         {data.forecast &&  <ForecastContainer />}
         </Box>
        </Stack>  
       : <LoadingComponent/>}
    </>
  );
};

export default DisplayContainer;
