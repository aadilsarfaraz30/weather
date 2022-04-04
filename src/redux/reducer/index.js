import { combineReducers } from "redux";
import getDataReducer from './getDataReducer';
import getCityName from "./getCityName";
import getCoordinates from "./getCoordinates";

const rootReducer = combineReducers({
    weatherData : getDataReducer,
    cityData: getCityName,
    coordsData: getCoordinates
})

export default rootReducer