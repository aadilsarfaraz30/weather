import { ActionTypes } from "../constant";

const initialState = {
    city: '',
    // clicked: false
}

const getCityName = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.REQUEST_CITY:
            return {...state,city: payload}
            
        default : 
        return state;
    }
}

export default getCityName;