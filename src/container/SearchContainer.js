import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchComponent from "../component/SearchComponent";
import { backToHome, requestCity } from "../redux/action/action";
import { Box } from '@mui/material' 

const SearchContainer = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch(requestCity);
  const dispatchClicked = useDispatch(backToHome)


  const searchCity = (e) => {
    e.preventDefault();
    dispatchClicked(backToHome(false))
    dispatch(requestCity(search));
    setSearch('');
  };

  return (
    <Box sx={{display: 'flex',justifyContent: 'center'}}>
      <SearchComponent
        handleSubmit={searchCity}
        search={search}
        handleOnChange={setSearch}
      />
    </Box>
  );
};

export default SearchContainer;

