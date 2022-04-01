import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk'
import rootReducer from "./reducer";

const composed = compose(applyMiddleware(reduxThunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
    rootReducer,
    composed
)

export default store