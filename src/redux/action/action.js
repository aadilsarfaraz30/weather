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

export const requestFailed = (data) => {
  return {
    type: ActionTypes.REQUEST_FAILED,
    payload: data,
  };
};

export const requestCity = (data) => {
  return {
    type: ActionTypes.REQUEST_CITY,
    payload: data,
  };
};

export const coordinates = (data) => {
  return {
    type: ActionTypes.COORDINATES,
    payload: data,
  };
};

export const forecast = (data) => {
  return {
    type: ActionTypes.REQUEST_FORECAST,
    payload: data,
  };
};

export const fetchDataFromCoordinates = (lat, lon) => {
  return async (dispatch) => {
    // dispatch(requestData());
    // fetch(
    //   `${url.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${url.key}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(coordinates(data.coord));
    //     dispatch(requestSuccessfull(data));
    //   })
    //   .catch((err) => {
    //     dispatch(requestFailed(err));
    //   });
    const response = await fetch(
      `${url.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${url.key}`
    );
    console.log(response)
    const data = await response.json();
    if (response.status === 200) {
      dispatch(coordinates(data.coord));
      dispatch(requestSuccessfull(data));
    }
    else{
      alert('check your connection or turn on your GPS')
    }
  };
};

export const fetchForecastData = (lat, lon) => {
  return (dispatch) => {
    if ((lat, lon)) {
      dispatch(requestData());
      fetch(
        `${url.base}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${url.key}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(forecast(data.daily));
        })
        .catch((err) => {
          dispatch(requestFailed(err));
        });
    }
  };
};

export const fetchDataFromCity = (city) => {
  return async (dispatch) => {
    // if (city) {
    // dispatch(requestData());
    // fetch(`${url.base}/weather?q=${city}&units=metric&appid=${url.key}`)
    //   .then((response) => console.log(response))
    //   .then((data) => {
    //     dispatch(coordinates(data.coord));
    //     dispatch(requestSuccessfull(data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(requestFailed(err));
    //   });
    // }
    if(city) {
      const response = await fetch(`${url.base}/weather?q=${city}&units=metric&appid=${url.key}`)
    console.log(response)
      const data = await response.json();
      if (response.status === 200) {
        dispatch(coordinates(data.coord));
        dispatch(requestSuccessfull(data));
      }
      else if(response.status === 404){
        alert('search result not found')
      }
      else{
        alert('check your connection or turn on your GPS')
      }
    }
  };
};
