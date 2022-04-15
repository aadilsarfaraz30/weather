import {
  Box,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ForecastComponent from "../component/ForecastComponent";

const ForecastContainer = () => {
  const forecast = useSelector((state) => state.weatherData.forecast);


  return (
    <Box>
  <Typography pl={4} mt={2} variant='h4' component='div' sx={{fontWeight: '450', color:'#0E185F'}}>Forecast</Typography>
   <Wrapper>
      <Stack
        sx={{
          width: "100%",
        }}
          // p={1}
        direction="row"
        spacing={3}
        justifyContent="space-between"
      >
        {forecast &&
          forecast.map((item) => {
            return (
              <ForecastComponent
              key={item.dt}
                day={new Date(item.dt * 1000).toLocaleDateString("en", {
                  weekday: "long",
                })}
                weather = {item.weather[0].main}
                temp ={item.temp.day}
              />
            );
          })}
      </Stack>
    </Wrapper>
    </Box>
  );
};

export default ForecastContainer;

const Wrapper = styled(Box)(() => ({
  overflowX: "scroll",
  // background: 'red', 
  maxHeight: '230px',
  padding: '20px',
  marginRight: '20px'
}));
