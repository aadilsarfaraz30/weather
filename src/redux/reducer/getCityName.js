import { ActionTypes } from "../constant";

const initialState = {
    city: ''
}

const getCityName = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.REQUEST_CITY:
            return {city: payload}
        default : 
        return state;
    }
}

export default getCityName;