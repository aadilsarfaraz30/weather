import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchComponent from "../component/SearchComponent";
import { requestCity } from "../redux/action/action";

const SearchContainer = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch(requestCity);

  const searchCity = (e) => {
    e.preventDefault();
    dispatch(requestCity(search));
    setSearch('');
  };

  return (
    <div>
      <SearchComponent
        handleSubmit={searchCity}
        search={search}
        handleOnChange={setSearch}
      />
    </div>
  );
};

export default SearchContainer;
