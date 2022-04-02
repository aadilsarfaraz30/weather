import { ActionTypes } from "../constant";
import { url } from '../../url'

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
      `${url.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${url.key}`
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

export const fetchDataFromCity = (city) => {
    return (dispatch) => {
        dispatch(requestData())
        fetch(
            `${url.base}/weather?q=${city}&units=metric&appid=${url.key}`
        ).then((data) => {
            data.json().then(data => {
                console.log(data)
                dispatch(requestSuccessfull(data))
            })
          }).catch(err => {
              dispatch(requestFailed(err))
          });
    }
}