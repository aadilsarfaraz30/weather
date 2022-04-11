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

  console.log(forecast);

  return (
    <>
  <Typography pl={4} variant='h5' component='div'>Forecast</Typography>
   <Wrapper>
      <Stack
        sx={{
          overflowX: "scroll",
          width: "100%",
        }}
          p={2}
          pb={1}
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
    </>
  );
};

export default ForecastContainer;

const Wrapper = styled(Box)(() => ({
  overflowX: "scroll",
  // background: 'red', 
  maxHeight: '230px'
}));
