import { ActionTypes } from "../constant";
import { url } from "../../url";

export const requestData = () => {
  return {
    type: ActionTypes.REQUEST_DATA,
  };
};

export const requestSuccessfull = (data) => {
  return {
    type: ActionTypes.REQUEST_SUCCESSFULL,
    payload: data,
  };
};

export const requestFailed = () => {
  return {
    type: ActionTypes.REQUEST_FAILED,
  };
};

export const requestCity = (data) => {
  return{
    type: ActionTypes.REQUEST_CITY,
    payload: data
  }
}

export const fetchDataFromCoordinates = (lat, lon) => {
  return (dispatch) => {
    dispatch(requestData());
    fetch(
      `${url.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${url.key}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(requestSuccessfull(data)));
  };
};
export const fetchDataFromCity = (city) => {
  return async (dispatch) => {
    if (city) {
      dispatch(requestData());
      fetch(`${url.base}/weather?q=${city}&units=metric&appid=${url.key}`)
        .then((response) => response.json())
        .then((data) => dispatch(requestSuccessfull(data)));
    }
  };
};
