import React from "react";
import { Paper, Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";


const ExtraDetailComponents = () => {
  const Container = styled(Paper)(({theme}) => ({
    background: "green",
    textAlign: "center",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  }));
  return (
    <Container
      sx={{
        background: "green",
        textAlign: "center",
        marginRight: "20px",
        marginTop: "20px",
      }}
      elevation={3}
    >
      <Grid
        sx={{ background: "yellow", paddingBottom: "20px" }}
        justifyContent="center"
        container
        rowSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
          </Grid>
        ))}
        {/* <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
            <Box>xs=2</Box>
            <Box>xs=3</Box>
      </Grid> */}
      </Grid>
    </Container>
  );
};

export default ExtraDetailComponents;
