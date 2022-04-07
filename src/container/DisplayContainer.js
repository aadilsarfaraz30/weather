import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ExtraDetailComponents from "../component/ExtraDetailComponents";
import WeatherDetailComponent from "../component/WeatherDetailComponent";

const DisplayContainer = () => {
  return (
    // <Stack
    //   direction={{ xs: "column", sm: "row" }}
    //   spacing={{ xs: 3, sm: 2, md: 4 }}
    //   justifyContent={{xs: 'center' , sm: 'space-around'}}
    //   alignItems='center'
    // height={200}
    // sx={{background: 'red'}}
    // >
    // </Stack>
    <Box sx={{flexGrow: 1}}>
    <Grid container>
      <Grid item xs={12} sm={6} md={6}>
        <WeatherDetailComponent />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <ExtraDetailComponents />
      </Grid>
    </Grid>
    </Box>
  );
};

export default DisplayContainer;
