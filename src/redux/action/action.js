import { ActionTypes } from "../constant";

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

export const fetchDataFromCoordinates = (lat, lon) => {
  return (dispatch) => {
      dispatch(requestData())
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=795d4fdd89c3e705da253a9f1bb1d983`
    ).then((data) => {
      data.json().then(data => {
          console.log(data)
          dispatch(requestSuccessfull(data))
      })
    }).catch(err => {
        dispatch(requestFailed(err))
    });
  };
};
