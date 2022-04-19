import { ActionTypes } from "../constant";

const initialState = {
    coords: {}
}

const getCoordinates = (state=initialState,{type,payload}) =>{
    switch(type){
        case ActionTypes.COORDINATES:
            return {coords: payload}
        default: return state;
    }
}

export default getCoordinates