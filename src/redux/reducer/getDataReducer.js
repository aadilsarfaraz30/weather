import { ActionTypes } from "../constant";

const initialState = {
    loading:  false,
    data : [],
    error: null,
}

const getDataReducer = (state=initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.REQUEST_DATA:
            return{
                ...state,
                loading: true
            }
        case ActionTypes.REQUEST_SUCCESSFULL:
            return {
                ...state,
                loading: false,
                data : payload
            }    
        case ActionTypes.REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default :
        return { state}    
    }
}

export default getDataReducer