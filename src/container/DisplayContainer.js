import { Stack } from "@mui/material";
import React from "react";
import ExtraDetailComponents from "../component/ExtraDetailComponents";
import WeatherDetailComponent from "../component/WeatherDetailComponent";

const DisplayContainer = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 3, sm: 2, md: 4 }}
      justifyContent={{xs: 'center' , sm: 'space-around'}}
      alignItems='center'  
    height={200}
    sx={{background: 'red'}}
    >
      <WeatherDetailComponent />
      <ExtraDetailComponents />
    </Stack>
  );
};

export default DisplayContainer;
