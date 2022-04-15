import { Stack, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const WeatherDetailComponent = () => {
  const currentForecast = useSelector((state) => state.weatherData.data);

  let weatherIcon = null;

  let main = currentForecast && currentForecast.weather[0].main;
  if (main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === "Dribble") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === "Clouds" || main === "Broken Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else if (main === "Haze") {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  } else if (main === "Mist") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  }else {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  }

  return (
    <>
      {currentForecast && (
        <Container spacing={4}>
          <Location alignItems={{ xs: "center", sm: "flex-start" }}>
            <Typography variant="h4" component="h5" sx={{fontWeight: '450'}}>
              {currentForecast.name + "," + currentForecast.sys.country}
            </Typography>
            <Typography variant="h6" component="div">
              {new Date(currentForecast.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
              })}{" "}
              {new Date(currentForecast.dt * 1000).getDate() +
                " " +
                new Date().toLocaleDateString("default", { month: "long" })}
            </Typography>
          </Location>
          <WeatherReport>
            <Icon>{weatherIcon}</Icon>
            <Box>
              <Typography variant="h2" component="div">
                {Math.floor(currentForecast.main.temp)}&deg;
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {currentForecast.weather[0].description}
              </Typography>
            </Box>
          </WeatherReport>
        </Container>
      )}
    </>
  );
};

export default WeatherDetailComponent;

const Container = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
  },
  color: '#06113C'

}));

const Location = styled(Stack)(() => ({
  padding: "15px",
}));

const WeatherReport = styled(Stack)(() => ({
  paddingBottom: "10px",
  flexDirection: "row",
  justifyContent: "space-around",
}));

const Icon = styled(Box)(() => ({
  width: "30%",
  fontSize: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
