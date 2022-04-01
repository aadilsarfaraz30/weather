import { ActionTypes } from "../constant"

export const requestData = () => {
    return {
        type: ActionTypes.REQUEST_DATA
    }
}

export const requestSuccessfull = (data) => {
    return { 
        type: ActionTypes.REQUEST_SUCCESSFULL,
        payload: data
    }
}

export const requestFailed = () => {
    return {
        type: ActionTypes.REQUEST_FAILED
    }
}