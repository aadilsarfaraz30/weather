import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, InputBase, styled } from "@mui/material";

const SearchComponent = ({ handleSubmit, search, handleOnChange }) => {
  return (
    <Search type="submit">
      <SearchIconWrapper onClick={handleSubmit}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        type="text"
        value={search}
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        placeholder="Search…"
      />
    </Search>
  );
};

const Search = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2px",
  border: "1px solid black",
  height: "45px",
  borderRadius: "10px",

  width: "20ch",
  transition: theme.transitions.create("width"),
  "&:hover": {
    width: "40ch",
  },
  [theme.breakpoints.down("sm")]: {
    "&:hover": {
      width: "35ch",
    },
  },
}));

const SearchIconWrapper = styled("button")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  cursor: "pointer",
  border: "none",
  background: "none",
  "&:focus": {
    outline: "none",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "18px",
  width: "80%",
}));

export default SearchComponent;
