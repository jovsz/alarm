import React, {useEffect} from 'react';
import {Text} from 'react-native'
import { connect } from 'react-redux';
import { getWeatherAction } from '../redux/ducks/weatherDuck'

const WeatherInfo = (props) => {

    useEffect(() => {
        console.log(props.weather)
        props.getWeather();
    },[])

    return(
        <Text>wheater</Text>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: () => dispatch(getWeatherAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)