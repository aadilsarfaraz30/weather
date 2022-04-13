import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../component/LoadingComponent";
import CurrentForecastContainer from "./CurrentForecastContainer";
// import ForecastContainer from "./ForecastContainer";
// import SearchContainer from "./SearchContainer";

const DisplayContainer = () => {
  const data = useSelector((state) => state.weatherData);

  return (
    <>
        {!data.loading ? 
        <Stack spacing={2}>
        {/* <SearchContainer /> */}
          <CurrentForecastContainer />
         {/* {data.forecast &&  <ForecastContainer />} */}
        </Stack>  
       : <LoadingComponent/>}
    </>
  );
};

export default DisplayContainer;
