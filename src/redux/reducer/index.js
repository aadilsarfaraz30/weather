import { combineReducers } from "redux";
import getDataReducer from './getDataReducer';
import getCityName from "./getCityName";

const rootReducer = combineReducers({
    weatherData : getDataReducer,
    cityData: getCityName
})

export default rootReducer