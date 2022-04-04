import { ActionTypes } from "../constant";

const initialState = {
    coords: {}
}

const getCoordinates = (state=initialState,{type,payload}) =>{
    switch(type){
        case ActionTypes.COORDINATES:
            return {coods: payload}
        default: return state;
    }
}

export default getCoordinates