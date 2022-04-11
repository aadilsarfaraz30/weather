import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CurrentForecastContainer from "./CurrentForecastContainer";
import ForecastContainer from "./ForecastContainer";

const DisplayContainer = () => {
  const loading = useSelector((state) => state.weatherData.loading);

  console.log(loading);
  return (
    <>
      {!loading ? (
        <Stack spacing={2} sx={{ background: "blue" }}>
          <CurrentForecastContainer />
          <ForecastContainer />
        </Stack>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default DisplayContainer;
