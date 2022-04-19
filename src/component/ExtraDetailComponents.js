import React from "react";
import { Paper,  Grid,  Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

const ExtraDetailComponents = () => {
  const currentForecast = useSelector((state) => state.weatherData.data);

  const Container = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    marginRight: "20px",
    borderRadius: '10px',
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  }));

  return (
    <>
      {currentForecast && (
        <Container
          sx={{
            textAlign: "center",
            marginRight: "20px",
            marginTop: "20px",
            background: 'rgba(180, 200, 200,0.3)',
            color: '#06113C'
          }}
          elevation={2}
        >
          <Grid
            sx={{ paddingBottom: "20px" }}
            justifyContent="center"
            container
            rowSpacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div" >
                {Math.floor(currentForecast.main.temp_max)}&deg; 
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                High temp
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div">
                {currentForecast.wind.speed} mph
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                Wind
              </Typography>{" "}
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div">
                {currentForecast.main.pressure} hpa
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                Pressure
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div">
                {Math.floor(currentForecast.main.temp_min)}&deg;
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                Low Temp
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div">
                {Math.floor(currentForecast.main.feels_like)}&deg;
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                Feels Like
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h6" component="div">
                {currentForecast.main.humidity}%
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{fontWeight: '400'}}>
                Humidity
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ExtraDetailComponents;
