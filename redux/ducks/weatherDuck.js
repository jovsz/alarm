import axios from "axios";
import {API_KEY } from "react-native-dotenv";
//constants
const weatherData = {
    response_server: '',
    data: [],

}

// Types
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

// Reducer
export const  weatherReducer = (state = weatherData, action) => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                response_server: action.payload
            }
        case GET_WEATHER_ERROR:
            return {
                ...state,
                data: action.payload,
                response_server: action.payload
            }
        default:
            return state;
    }
}

//actions
export const getWeatherAction = () => async (dispatch) => {
    try {
        
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}`,{
            validateStatus: function (status) {
                return status < 500;
            }
        }).then(res => { 
            if(res.status >= 200 || res.status <= 299){
                dispatch({
                    type: GET_WEATHER_SUCCESS,
                    payload: response.data
                })
            }else{
                dispatch({
                    type: GET_WEATHER_ERROR,
                    payload: response.data
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_WEATHER_ERROR,
                payload: err.message
            })
        })
        
    } catch (e) {
        console.log(e)
    }
}