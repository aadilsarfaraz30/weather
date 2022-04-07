import { ActionTypes } from "../constant";

const initialState = {
    city: '',
    clicked: false
}

const getCityName = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.REQUEST_CITY:
            return {...state,city: payload}
        case ActionTypes.BACK_TO_HOME:
            return {...state,
            clicked: payload}    
        default : 
        return state;
    }
}

export default getCityName;