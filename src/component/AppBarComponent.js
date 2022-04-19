import React from "react";
import { Container, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../styles/style";

const AppBarComponent = ({ home }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" height="100px">
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ m: 1,color: '#0E185F' ,fontWeight: '400'}}
          onClick={home}
        >
          Weather App
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default AppBarComponent;
