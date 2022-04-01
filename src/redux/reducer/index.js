import { combineReducers } from "redux";
import getDataReducer from './getDataReducer';

const rootReducer = combineReducers({
    weatherData : getDataReducer
})

export default rootReducer