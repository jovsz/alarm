import { createStore, combineReducers, compose, applyMiddleware, thunk } from "redux";
import { weatherReducer } from './ducks/weatherDuck'

const rootReducer = combineReducers({
    weather: weatherReducer,


})


//dev tool de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
    return store;
}

